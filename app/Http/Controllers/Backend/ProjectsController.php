<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Categories;
use App\Models\Backend\Languages;
use App\Models\Backend\Products;
use App\Models\Backend\ProductsTranslates;
use App\Models\Backend\Projects;
use App\Models\Backend\ProjectsFeatures;
use App\Models\Backend\ProjectsTranslates;
use App\Models\Backend\Types;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use phpDocumentor\Reflection\Project;
use Illuminate\Support\Facades\Log;

class ProjectsController extends Controller {

    public function index(Request $request) {
        $lang   = isset($request->lang) ? $request->lang : 0;
        $limit  = isset($request->limit) ? $request->limit : 0;
        $offset = isset($request->offset) ? $request->offset : 0;
        $type   = isset($request->type) ? $request->type : null;

        if ($lang) {
            $projects = Projects::
            with(['projects' => function ($query) use ($lang) {
                $query->where('lang_id', $lang);
            }])

            ->with(['features' => function ($query) use ($lang) {
                $query->where('lang_id', $lang);
            }]);

            if ($limit) {
                $response = $projects
                        ->where('status', 1)
                        ->skip($offset)
                        ->take($limit);

                if ($type) {
                    $response->where('type_id', $type);
                }

                return response()->json($response->get());
            }

            return response()->json($projects->get());
        }

        $data   = Projects::get();
        $result = [];

        foreach ($data as $d) {
            $result = $d->with(['projects' => function ($query) {
                $query->whereIn('lang_id', [1, 2, 3])->orderByRaw("FIELD(lang_id , '2', '3', '1') ASC");
            }])->with('features')->get();
        }

        return response()->json($result);
    }

    public function create() {
        //
    }

    public function store(Request $request) {
        foreach ($request->data as $i => $data) {
            $data        = json_decode($data);
            $find_by_sku = ProjectsTranslates::where("name", $data->name)->first();
            if ($i > 0) {
                var_export($request->data);
                $find_by_sku = ProjectsTranslates::where('name', '=', json_decode($request->data[0])->name)->first();
            }

            $new = !$find_by_sku;
            if ($new) {
                $project = new Projects();

                $project->status  = $data->status;
                $project->power   = $data->power;
                $project->type_id = $data->type_id;
                $project->coords  = 0;
                $project->image   = '';
                $project->link    = isset($data->link) ? $data->link : '';
                $project->save();

                $project_update = Projects::find($project->id);
                if ($image = $request->file('image')) {
                    $fileName  = $image->getClientOriginalName();
                    $directory = 'private/images/projects/' . $project->id . '/';
                    $imageUrl  = $directory . $fileName;
                    $image->move($directory, $fileName);
                    $project_update->image = $imageUrl;
                }

                if ($images = $request->file('gallery_images')) {
                    foreach ($images as $g_image) {
                        $filename = $g_image->getClientOriginalName();
                        $dir      = 'private/images/projects/' . $project->id . '/gallery/';
                        $url      = $dir . $filename;
                        $g_image->move($dir, $filename);
                        $project_update->gallery .= $url . ';';
                    }
                }

                $project_update->save();
            }

            $translates = ProjectsTranslates::where('project_id', $find_by_sku ? $find_by_sku->project_id : 0)->where('lang_id', $data->activeItem)->first();
            if (!$translates) {
                $translated              = new ProjectsTranslates();
                $translated->project_id  = $new ? $project->id : $find_by_sku->project_id;
                $translated->name        = $data->name;
                $translated->type        = $data->type;
                $translated->description = $data->description;
                $translated->location    = $data->location;
                $translated->lang_id     = $data->activeItem;
                $translated->save();

                if (isset($data->features)) {
                    foreach ($data->features as $f) {
                        if ($f->name) {
                            $feature             = new ProjectsFeatures();
                            $feature->project_id = $new ? $project->id : $find_by_sku->project_id;
                            $feature->name       = $f->name ? $f->name : '';
                            $feature->value      = $f->value ? $f->value : '';
                            $feature->lang_id    = $data->activeItem;
                            $feature->save();
                        }
                    }
                }
            }
        }

        if (!$request->data) {
            return response()->json(['error' => 'Project already exists!']);
        }
        return response(null, 200);
    }

    public function show($id, $lang) {
        $variants = Languages::all();
        $massive  = [];

        if ((int)$lang > 0 && $lang) {
            $data = Projects::where('id', $id)

                ->with(['features' => function ($query) use ($lang) {
                    $query->where('lang_id', $lang);
                }])

                ->with(['projects' => function ($query) use ($lang) {
                    $query->where('lang_id', $lang);
                }])

                ->first();

            if (isset($data['gallery'])) {
                $gallery_result = [];
                $gallery        = explode(';', $data['gallery']);

                foreach ($gallery as $g) {
                    $filename         = pathinfo($g, PATHINFO_BASENAME);
                    $thumbnail        = '/storage/images/projects/' . $id . '/thumbnail/' . $filename;
                    $gallery_result[] = (object)['thumbnail' => $thumbnail, 'file' => $filename];
                }

                $data['gallery'] = array_filter($gallery_result, function ($item) {
                    return $item->file;
                });
            }

            return response()->json($data);
        }

        foreach ($variants as $language) {
            $data = DB::table('projects')
                ->join('projects_translates', 'projects.id', '=', 'projects_translates.project_id')
                ->where('projects.id', '=', $id)
                ->where('projects_translates.lang_id', '=', $language['id'])
                ->select('projects.*', 'projects_translates.*')
                ->get();

            foreach ($data as $d) {
                $data = (array)$d;
            }

            $data['features'] = ProjectsFeatures::select('id', 'name', 'value')->where('project_id', $id)->where('lang_id', $language['id'])->get();

            if (isset($data['gallery'])) {
                $gallery_result = [];
                $gallery        = explode(';', $data['gallery']);

                foreach ($gallery as $g) {
                    $filename         = pathinfo($g, PATHINFO_BASENAME);
                    $gallery_result[] = (object)['name' => $filename, 'file' => ''];
                }

                $data['gallery'] = array_filter($gallery_result, function ($item) {
                    return $item->name;
                });
            }

            $massive[$language['id']] = $data;
        }

        return response()->json($massive);
    }

    public function getProjectsByLanguage(Request $request) {
        $data = Projects::with(['projects' => function ($query) use ($request) {
            $query->where('lang_id', $request->lang);
        }])
            ->with(['features' => function ($query) use ($request) {
                $query->where('lang_id', $request->lang);
            }])->latest()->limit($request->limit);

        if ($request->id) {
            return $data->where('id', '!=', $request->id)->get();
        }
        return $data->get();
    }

    public function edit($id) {
        //
    }

    public function update(Request $request, $id) {
        $data             = json_decode($request->data);

        $project          = Projects::find($id);
        $project->status  = $data->status;
        $project->power   = $data->power;
        $project->type_id = $data->type_id;
        $project->link    = $data->link;

        if ($image = $request->file('image')) {
            $fileName  = $image->getClientOriginalName();
            $directory = 'private/images/projects/' . $id . '/cover/';

            if (!is_dir($directory)){
                mkdir($directory, 0775, true);
            }

            File::cleanDirectory($directory);
            $imageUrl = $directory . $fileName;
            $image->move($directory, $fileName);
            $project->image = $imageUrl;
        }

        if ($data->activeItem === 2){
            if ($galleries = $data->gallery) {
                $dir         = 'private/images/projects/' . $id . '/gallery/';
                $storage_dir = 'public/images/projects/' . $id . '/thumbnail/';

                if (is_dir($dir)) {
                    $delete = array_values(array_diff(scandir($dir), ['..', '.']));
                    foreach ($galleries as $g) {
                        if ($g->name) {
                            $index = array_search($g->name, $delete);
                            if ($index !== false) {
                                array_splice($delete, $index, 1);
                            }
                        }
                    }

                    foreach ($delete as $d) {
                        File::delete($dir . $d);
                        Storage::delete($storage_dir . $d);
                        $project->gallery = str_replace($dir . $d . ';', '', $project->gallery);
                    }
                }
            } else {
                $dir         = 'private/images/projects/' . $id . '/gallery/';
                $storage_dir = 'public/images/projects/' . $id . '/thumbnail/';

                if ($dir) {
                    File::deleteDirectory($dir);
                    Storage::deleteDirectory($storage_dir);
                    $project->gallery = null;
                }
            }
        }

        if ($images = $request->file('gallery_images')) {
            foreach ($images as $g_image) {
                $filename  = $g_image->getClientOriginalName();

                $dir       = 'private/images/projects/' . $id . '/gallery/';
                if (!is_dir($dir)){
                    mkdir($dir, 0775, true);
                }

                $url = $dir . $filename;
                if (!is_file($url)) {
                    $smallthumbnailpath  = public_path('storage/images/projects/' . $id . '/thumbnail/' . $filename);
                    $smallthumbnailpath2 = public_path('storage/images/projects/' . $id . '/thumbnail/280/');

                    if (!is_dir($smallthumbnailpath2)){
                        mkdir($smallthumbnailpath2, 0775, true);
                    }

                    $smallthumbnailpath2 .= $filename;


                    $g_image->storeAs('public/images/projects/' . $id . '/thumbnail/', $filename);
                    File::copy($smallthumbnailpath, $dir . $filename);
                    File::copy($smallthumbnailpath, $smallthumbnailpath2);

                    $this->createThumbnail($smallthumbnailpath, 370, 235);
                    $this->createThumbnail($smallthumbnailpath2, 280, 235);

                    $this->createThumbnail($dir . $filename, 1600, 1067);
                    $project->gallery .= 'private/images/projects/' . $id . '/gallery/' . $filename . ';';
                }
            }
        }

        $project->save();

        $translated = ProjectsTranslates::where('project_id', $id)->where('lang_id', $data->activeItem)->first();

        if (!$translated) {
            $translated_create              = new ProjectsTranslates();
            $translated_create->description = $data->description;
            $translated_create->name        = $data->name;
            $translated_create->location    = $data->location;
            $translated_create->type        = $data->type;
            $translated_create->project_id  = $id;
            $translated_create->lang_id     = $data->activeItem;
            $translated_create->save();
        } else {
            $translated->description = $data->description;
            $translated->name        = $data->name;
            $translated->location    = $data->location;
            $translated->type        = $data->type;
            $translated->save();
        }

        if (isset($data->features)) {
            foreach ($data->features as $f) {
                if ($f->name) {
                    $feature = isset($f->id) ? ProjectsFeatures::where('project_id', $id)->where('lang_id', $data->activeItem)->where('id', $f->id)->first() : false;

                    if ($feature) {
                        $feature->name  = $f->name ? $f->name : '';
                        $feature->value = $f->value ? $f->value : '';
                        $feature->save();
                    } else {
                        $create_feature             = new ProjectsFeatures();
                        $create_feature->project_id = $id;
                        $create_feature->lang_id    = $data->activeItem;
                        $create_feature->name       = $f->name ? $f->name : '';
                        $create_feature->value      = $f->value ? $f->value : '';
                        $create_feature->save();
                    }
                }
            }
        }

        return response()->json();
    }

    public function createThumbnail($path, $width, $height) {
        Image::make($path)->resize($width, $height)->save($path, 100);
    }

    public function createThumbnailFit($path, $width, $height) {
        Image::make($path)->fit($width, $height, null, 'top')->save($path, 100);
    }

    public function destroy($id) {
        $projects = Projects::find($id);
        $image    = explode('/', $projects->image);
        array_pop($image);
        $image = implode('/', $image);

        if ($image && File::isDirectory($image)) {
            File::deleteDirectory($image);
            Storage::delete($image);
        }
        $projects->delete();
        ProjectsTranslates::where('project_id', $id)->delete();
        ProjectsFeatures::where('project_id', $id)->delete();

        $path = public_path('storage/images/projects/' . $id . '/');
        $dir  = 'private/images/projects/' . $id . '/';
        $public = 'public/images/projects/' . $id . '/';

        File::deleteDirectory($path);
        File::deleteDirectory($dir);
        File::deleteDirectory($public);

        return response()->json();
    }

    public function toggle(Request $request) {
        $status   = $request->status;
        $projects = Projects::find($request->id);
        if (Schema::hasColumn('projects', 'status')) {
            $projects->status = $status;
        } else {
            $projects->available = $status;
        }
        $projects->save();
    }

    public function total(Request $request) {
        $category_id = isset($request->categoryId) ? $request->categoryId : 0;
        $type        = $request->type;
        $lang        = $request->lang;

        if ($type === 'products' && $category_id) {
            return response()->json(Products
                ::with(['translates' => function ($query) use ($lang) {
                    $query->where('lang_id', $lang);
                }])
                ->where('category_id', $category_id)
                ->get()->count());
        }
        return response()->json(DB::table($type . '_translates')->where('lang_id', $lang)->count('id'));
    }

    public function totalByType(Request $request) {
        $type        = $request->type;
        $type_id     = $request->typeId;
        $lang        = $request->lang;

        $where = $type_id ? DB::table($type)->where('type_id',$type_id)->count('id') :  DB::table($type)->whereIn('type_id',[1,2,3])->count('id');
        return response()->json($where);
    }

    public function getTypes(Request $request) {
        return response()->json(Types::where('lang_id', $request->lang_id)->get());
    }
}
