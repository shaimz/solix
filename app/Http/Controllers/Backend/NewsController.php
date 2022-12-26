<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Languages;
use App\Models\Backend\News;
use App\Models\Backend\NewsTranslates;
use App\Models\Backend\Projects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;


class NewsController extends Controller
{
    public function index(Request $request,$id){
        $data = News::get();
        $lang_id = $id;
        if($lang_id){
            return News::
            with(['news' => function ($query) use ($lang_id){
                $query->where('lang_id',$lang_id);
            }])
                ->get();
        }
        $result = [];
        foreach($data as $d) {
            $result = $d->with(['news' => function($query){
                $query->whereIn('lang_id',[1,2,3])->orderByRaw("FIELD(lang_id , '2', '3', '1') ASC");
            }])->orderBy('created_at','DESC')->get();
        }
        return response()->json($result);
    }

    public function create(){
        //
    }

    public function store(Request $request){
        foreach($request->data as $i=>$data){
            $data = json_decode($data);
            $find_by_sku = NewsTranslates::where('name','=',$data->name)->first();
            if($i > 0){
                var_export($request->data);
                $find_by_sku = NewsTranslates::where('name','=',json_decode($request->data[0])->name)->first();
            }

            $new = !$find_by_sku;
            if($new) {
                $news = new News();

                $news->available = $data->available;
                $news->image = '';
                $news->save();

                $news_update = News::find($news->id);
                if ($file = $request->file('file')) {
                    $fileName = $file->getClientOriginalName();
                    $directory = 'private/images/news/' . $news->id . '/';
                    $imageUrl = $directory . $fileName;
                    $file->move($directory, $fileName);
                    $news_update->image = $imageUrl;
                }
                $news_update->save();
            }

            $translates = NewsTranslates::where('news_id', $find_by_sku ? $find_by_sku->news_id : 0)->where('lang_id', $data->activeItem)->first();
            if(!$translates){
                $translated = new NewsTranslates();
                $translated->news_id = $new ? $news->id : $find_by_sku->news_id ;
                $translated->name = $data->name;
                $translated->description = $data->description;
                $translated->lang_id = $data->activeItem;
                $translated->save();
            }
        }
        if(!$request->data){
            return response()->json(['error'=>'News already exists!']);
        }
        return response(null,200);
    }

    public function show($id,$lang){
        $variants = Languages::all();
        $massive = array();
        if($lang){
            return response()->json(News::with(['translates' => function ($query) use ($lang){
                $query->where('lang_id',$lang);
            }])->where('id',$id)->first());
        }
        foreach($variants as $lang){
            $data = DB::table('news')
                ->join('news_translates','news.id','=','news_translates.news_id')
                ->where('news.id','=',$id)
                ->where('news_translates.lang_id','=',$lang['id'])
                ->where('news.available','=',1)
                ->select('news.available','news.image','news.created_at','news_translates.*')
                ->get();
            foreach($data as $d){
                $data = (array)$d;
            }
            $massive[$lang['id']] = $data;
        }

        return response()->json($massive);
    }

    public function edit($id){
        //
    }

    public function update(Request $request,$id){
        $data = json_decode($request->data);

        $news = News::find($id);
        $news->available = $data->available;

        if($image = $request->file('file')){
            $fileName = $image->getClientOriginalName();
            $directory = 'private/images/news/' . $id .'/';
            File::cleanDirectory($directory);
            $imageUrl = $directory.$fileName;
            $image->move($directory, $fileName);
            $news->image = $imageUrl;
        }
        $news->save();

        $translated = NewsTranslates::where('news_id',$id)->where('lang_id',$data->activeItem)->first();
        if(!$translated){
            $translated_create = new NewsTranslates();
            $translated_create->description = $data->description;
            $translated_create->name = $data->name;
            $translated_create->news_id = $id;
            $translated_create->lang_id = $data->activeItem;
            $translated_create->save();
        }else{
            $translated->description = $data->description;
            $translated->name = $data->name;
            $translated->save();
        }

        return back();
    }
    public function destroy($id){
        $news = News::find($id);
        $dir = explode('/',$news->image);
        array_pop($dir);
        $dir = implode('/',$dir);

        if(!empty($dir) && File::isDirectory($dir)){
            File::deleteDirectory($dir);
        }
        $news->delete();
        NewsTranslates::where('news_id',$id)->delete();


        return back();
    }

    public function toggle(Request $request){
        $status = $request->status;
        $news = News::find($request->id);
        if(Schema::hasColumn('news','status')){
            $news->status = $status;
        }else{
            $news->available = $status;
        }
        $news->save();
    }

    public function getNews(Request $request){
        $data = News::with(['translates' => function($query) use ($request){
            $query->where('lang_id',$request->lang_id);
        }]);
            if($request->limit || $request->offset){
                return response()->json($data->skip($request->offset)->take($request->limit)->where('available',1)->get());
            }
            return response()->json($data->where('id','!=',$request->id)->where('available',1)->limit($request->length)->get());
    }

    public function getNewsTotal(){
        return News::all()->count();
    }
}
