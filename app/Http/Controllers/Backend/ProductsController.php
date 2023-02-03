<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Advantages;
use App\Models\Backend\AdvantagesTranslates;
use App\Models\Backend\Categories;
use App\Models\Backend\CategoriesTranslates;
use App\Models\Backend\Features;
use App\Models\Backend\Languages;
use App\Models\Backend\Products;
use App\Models\Backend\ProductsTranslates;
use App\Models\Backend\Projects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Log;

class ProductsController extends Controller
{
    public function index(Request $request)
    {
        if ($request->category_id) {
            $category = [];

            if (is_array($request->category_id) && count($request->category_id) > 1) {
                $category = $request->category_id;
            } else {
                $category = [$request->category_id];
            }

            $products = Products::whereIn('category_id', $category)
                ->with(
                    [
                        'translates' => function ($query) use ($request) {
                            $query->where('lang_id', $request->lang_id)->orderByRaw(
                                "FIELD(lang_id , '2', '3', '1') ASC"
                            );
                        }
                    ]
                )
                ->with(
                    [
                        'features' => function ($query) use ($request) {
                            $query->where('lang_id', $request->lang_id);
                        }
                    ]
                )
                ->with(
                    [
                        'advantage' => function ($query) use ($request) {
                            $query->where('lang_id', $request->lang_id)
                                ->with('advantages');
                        }
                    ]
                )
                ->with(
                    [
                        'category' => function ($query) use ($category, $request) {
                            $query->whereIn('id', $category)->with(
                                [
                                    'data' => function ($q) use ($request) {
                                        $q->where('lang_id', $request->lang_id);
                                    }
                                ]
                            );
                        }
                    ]
                );

            if ($request->length || $request->offset) {
                return response()->json(
                    $products->where('available', 1)->skip($request->offset)->take($request->length)->get()
                );
            }

            return response()->json($products->where('available', 1)->get());
        }

        $d      = Products::all();
        $result = [];
        foreach ($d as $data) {
            $advantages = AdvantagesTranslates::where('product_id', $data->id)->first();
            if ($advantages) {
                $resultAdvantages   = [];
                $resultAdvantages[] = ['default' => $advantages, 'translates' => $advantages->advantages()->get()];
            }

            $result[] = [
                'id'   => $data->id,
                'name' => ProductsTranslates::select('name')->where('product_id', $data->id)->whereIn(
                    'lang_id',
                    [1, 2, 3]
                )->pluck('name')->first(),

                'type' => CategoriesTranslates::select('name')->where('category_id', $data->category_id)->where(
                    'lang_id',
                    [1, 2, 3]
                )->pluck('name')->first(),

                'category'    => CategoriesTranslates::select('name')->where('category_id', $data->category_id)->first(),
                'features'    => Features::where('product_id', '=', $data->id)->where('lang_id', [1, 2, 3])->get(),
                'advantages'  => isset($resultAdvantages) ? $resultAdvantages : [],
                'available'   => $data->available,
                'brand'       => $data->brand,
                'description' => ProductsTranslates::select('description')->where('product_id', $data->id)->whereIn(
                    'lang_id',
                    [1, 2, 3]
                )->first() ? ProductsTranslates::select('description')->where('product_id', $data->id)->whereIn(
                    'lang_id',
                    [1, 2, 3]
                )->first()->description : '',
                'image'       => $data->image,
                'document'    => $data->document,
                'sku'         => $data->sku,
                'price'       => $data->price
            ];
        }
        return response()->json($result);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = json_decode($request->data);
        if ($data->sku) {
            $find_by_sku = Products::where('sku', $data->sku)->first();

            $new = !$find_by_sku;
            if ($new) {
                $product = new Products();

                $product->category_id = $data->category;
                $product->available   = $data->available;
                $product->brand       = $data->brand;
                $product->price       = $data->price;
                $product->brand_logo  = '';
                $product->image       = '';
                $product->document    = '';
                $product->sku         = $data->sku;
                $product->save();

                $product_update = Products::find($product->id);

                if ($logo = $request->file('logo')) {
                    $fileName       = str_replace(' ', '-', $logo->getClientOriginalName());
                    $directory      = 'private/images/brands/' . $product->id . '/';
                    $extension      = $logo->getExtension();
                    $filename       = pathinfo($fileName, PATHINFO_FILENAME);
                    $smallthumbnail = $filename . '_small_.' . $extension;
                    File::cleanDirectory($directory);
                    $smallthumbnailpath = public_path(
                        'storage/images/brands/thumbnail/' . $product->id . '/' . $smallthumbnail
                    );
                    $logo->storeAs('public/images/brands/thumbnail/' . $product->id, $smallthumbnail);
                    $this->createThumbnail($smallthumbnailpath, 60, 50);
                    $product->brand_logo = '/storage/images/brands/thumbnail/' . $product->id . '/' . $smallthumbnail;
                }

                if ($image = $request->file('file')) {
                    $fileName  = $image->getClientOriginalName();
                    $directory = 'private/images/products/' . $product->id . '/';
                    $imageUrl  = $directory . $fileName;
                    $image->move($directory, $fileName);
                    $product_update->image = '/' . $imageUrl;
                }

                if ($document = $request->file('document')) {
                    $fileName    = $document->getClientOriginalName();
                    $directory   = 'private/documents/products/' . $product->id . '/';
                    $documentUrl = $directory . $fileName;
                    $document->move($directory, $fileName);
                    $product_update->document = '/' . $documentUrl;
                }

                $product_update->save();
            }

            $translates = ProductsTranslates::where('product_id', $find_by_sku ? $find_by_sku->id : 0)->where(
                'lang_id',
                $data->activeItem
            )->first();

            if (!$translates) {
                $translated              = new ProductsTranslates();
                $translated->product_id  = $new ? $product->id : $find_by_sku->id;
                $translated->name        = $data->name;
                $translated->description = $data->description;
                $translated->lang_id     = $data->activeItem;
                $translated->save();

                if ($data->features) {
                    foreach ($data->features as $f) {
                        if ($f->feature_name) {
                            $feature                = new Features();
                            $feature->product_id    = $new ? $product->id : $find_by_sku->id;
                            $feature->feature_name  = $f->feature_name ? $f->feature_name : '';
                            $feature->feature_value = $f->feature_value ? $f->feature_value : '';
                            $feature->lang_id       = $data->activeItem;
                            $feature->save();
                        }
                    }
                }

                if ($data->advantages) {
                    foreach ($data->advantages as $key => $adv) {
                        if ($adv->name) {
                            $advantage             = new Advantages();
                            $advantage->product_id = $new ? $product->id : $find_by_sku->id;
                            $advantage->icon       = '';
                            $advantage->save();
                            if ($icon = $request->file('iconfile-' . $key)) {
                                $advantage_icon = Advantages::find($advantage->id);
                                $fileName       = $icon->getClientOriginalName();
                                $directory      = '/private/images/products/advantages_icons/' . $product->id . '/';
                                $imageUrl       = $directory . $fileName;
                                $icon->move($directory, $fileName);
                                $advantage_icon->icon = '/' . $imageUrl;
                                $advantage_icon->save();
                            }

                            $translated_adv               = new AdvantagesTranslates();
                            $translated_adv->product_id   = $new ? $product->id : $find_by_sku->id;
                            $translated_adv->advantage_id = $advantage->id;
                            $translated_adv->name         = $adv->name;
                            $translated_adv->value        = $adv->value;
                            $translated_adv->lang_id      = $data->activeItem;
                            $translated_adv->save();
                        }
                    }
                }

                return response(null, 200);
            }

            if (!$new) {
                return response()->json(['error' => 'The product already exists!']);
            }
        }

        return response(null, 200);
    }

    public function createThumbnail($path, $width, $height)
    {
        $img = Image::make($path)->resize($width, $height)->save($path);
    }

    public function show($id)
    {
        $variants = Languages::all();
        $massive  = [];
        foreach ($variants as $lang) {
            $product = Products::find($id);
            $data    = DB::table('products')
                ->join('products_translates', 'products.id', '=', 'products_translates.product_id')
                ->where('products.id', '=', $id)
                ->where('products_translates.lang_id', '=', $lang['id'])
                ->select(
                    'products.category_id',
                    'products.document',
                    'products.image',
                    'products.brand_logo',
                    'products.brand',
                    'products.available',
                    'products.sku',
                    'products.price',
                    'products_translates.*'
                )->get();

            foreach ($data as $d) {
                $data = (array)$d;
            }

            $data['category'] = $product->category()->value('id');
            $data['features'] = Features::select('id', 'feature_name', 'feature_value')->where(
                'product_id',
                $id
            )->where('lang_id', $lang['id'])->get();

            $data['advantages'] = DB::table('product_advantages')
                ->join(
                    'product_advantages_translates',
                    'product_advantages_translates.advantage_id',
                    '=',
                    'product_advantages.id'
                )
                ->where('product_advantages.product_id', '=', $id)
                ->where('product_advantages_translates.lang_id', '=', $lang['id'])
                ->select(
                    'product_advantages.id',
                    'product_advantages.icon',
                    'product_advantages_translates.value',
                    'product_advantages_translates.name'
                )
                ->get();

            $length = count($data['advantages']);
            if ($length < 4) {
                for ($i = $length; $i < 4; $i++) {
                    $data['advantages']->push((object)['id' => null, 'icon' => null, 'value' => '', 'name' => '']);
                }
            }

            $advantages = [];
            foreach ($data['advantages'] as $a) {
                if (!in_array($a, $advantages)) {
                    array_push($advantages, $a);
                }
            }

            $data['advantages']   = $advantages;
            $massive[$lang['id']] = $data;
        }

        return response()->json($massive);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $data = json_decode($request->data);

        $product = Products::find($id);

        $product->update([
            'category_id' => $data->category,
            'available' => $data->available,
            'brand' => $data->brand,
            'price' => $data->price,
            'sku' => $data->sku,
        ]);

        if ($logo = $request->file('logo')) {
            $fileName       = str_replace(' ', '-', $logo->getClientOriginalName());
            $directory      = 'private/images/brands/' . $id . '/';
            $extension      = $logo->getClientOriginalExtension();
            $filename       = pathinfo($fileName, PATHINFO_FILENAME);
            $smallthumbnail = $filename . '_small_.' . $extension;
            $smallthumbnailpath = public_path(
                'storage/images/brands/thumbnail/' . $product->id . '/'
            );


            if (!file_exists($smallthumbnailpath)) {
                mkdir($smallthumbnailpath, 775, true);
            }
            $img = Image::make($logo->getRealPath());
            $img->resize(60, 50, function ($constraint) {
                $constraint->aspectRatio();
            });
            $img->save($smallthumbnailpath . $smallthumbnail);

            $product->brand_logo = '/storage/images/brands/thumbnail/' . $product->id . '/' . $smallthumbnail;
        }

        if ($image = $request->file('file')) {
            $fileName  = str_replace(' ', '-', $image->getClientOriginalName());
            $directory = 'private/images/products/' . $id . '/';
            File::cleanDirectory($directory);
            $imageUrl = $directory . $fileName;
            $image->move($directory, $fileName);
            $product->image = '/' . $imageUrl;
        }

        if ($document = $request->file('document')) {
            $fileName  = str_replace(' ', '-', $document->getClientOriginalName());
            $directory = 'private/documents/products/' . $id . '/';
            File::cleanDirectory($directory);
            $documentUrl = $directory . $fileName;
            $document->move($directory, $fileName);
            $product->document = '/' . $documentUrl;
        }
        $product->save();

        $translated = ProductsTranslates::where('product_id', $id)->where('lang_id', $data->activeItem)->first();

        if (!$translated) {
            $translated_create              = new ProductsTranslates();
            $translated_create->description = $data->description;
            $translated_create->name        = $data->name;
            $translated_create->product_id  = $id;
            $translated_create->lang_id     = $data->activeItem;
            $translated_create->save();
        } else {
            $translated->description = $data->description;
            $translated->name        = $data->name;
            $translated->save();
        }

        if ($data->features) {
            $product_features = Features::where('product_id', $id)->where('lang_id', $data->activeItem)->get()->keyBy(
                'id'
            )->toArray();

            $fresh_keys = [];
            foreach ($data->features as $f) {
                if ($f->feature_name) {
                    if (isset($f->id)) {
                        $feature = Features::where('product_id', $id)->where('lang_id', $data->activeItem)->where(
                            'id',
                            $f->id
                        )->first();

                        $fresh_keys[$f->id] = $f->id;
                    } else {
                        $feature = false;
                    }

                    if ($feature) {
                        $feature->feature_name  = $f->feature_name ? $f->feature_name : '';
                        $feature->feature_value = $f->feature_value ? $f->feature_value : '';
                        $feature->save();
                    } else {
                        $create_feature                = new Features();
                        $create_feature->feature_name  = $f->feature_name ? $f->feature_name : '';
                        $create_feature->feature_value = $f->feature_value ? $f->feature_value : '';
                        $create_feature->lang_id       = $data->activeItem;
                        $create_feature->product_id    = $id;
                        $create_feature->save();
                    }
                }
            }

            // remove obsolete
            if ($fresh_keys && $product_features) {
                $obsolete = [];
                foreach ($product_features as $key => $value) {
                    if (empty($fresh_keys[$key])) {
                        $obsolete[] = $key;
                    }
                }

                if ($obsolete) {
                    Features::whereIn('id', $obsolete)->delete();
                }
            }
        } else {
            Features::where('product_id', $id)->where('lang_id', $data->activeItem)->delete();
        }

        if ($data->advantages) {
            foreach ($data->advantages as $key => $adv) {
                if ($adv->name) {
                    $dir       = '/private/images/products/advantages_icons/' . $id . '/';
                    $advantage = Advantages::where("product_id", $id)->where('id', $adv->id)->first();

                    if ($advantage) {
                        if ($icon = $request->file('iconfile-' . $key)) {
                            $fileName  = $icon->getClientOriginalName();
                            $directory = 'private/images/products/advantages_icons/' . $id . '/';
                            File::cleanDirectory($directory . $fileName);
                            $imageUrl = $directory . $fileName;
                            $icon->move($directory, $fileName);
                            $advantage->icon = '/' . $imageUrl;
                        }

                        $advantage->save();
                    } else {
                        $create_advantage             = new Advantages();
                        $create_advantage->icon       = '';
                        $create_advantage->product_id = $id;

                        if ($icon = $request->file('iconfile-' . $key)) {
                            $fileName  = $icon->getClientOriginalName();
                            $directory = '/private/images/products/advantages_icons/' . $id . '/';
                            $imageUrl  = $directory . $fileName;
                            $icon->move(public_path($directory), $fileName);
                            $create_advantage->icon = $imageUrl;
                        }

                        $create_advantage->save();
                    }

                    $advantage_id   = isset($adv->id) ? $adv->id : $create_advantage->id;
                    $translated_adv = AdvantagesTranslates::where('product_id', $id)->where(
                        'lang_id',
                        $data->activeItem
                    )->where('advantage_id', $advantage_id)->first();

                    if ($translated_adv) {
                        $translated_adv->name  = $adv->name;
                        $translated_adv->value = $adv->value;
                        $translated_adv->save();
                    } else {
                        $create_translated_adv               = new AdvantagesTranslates();
                        $create_translated_adv->product_id   = $id;
                        $create_translated_adv->advantage_id = $advantage_id;
                        $create_translated_adv->lang_id      = $data->activeItem;
                        $create_translated_adv->name         = $adv->name;
                        $create_translated_adv->value        = $adv->value;
                        $create_translated_adv->save();
                    }
                }
            }
        }
        return response()->json();
    }

    public function destroy($id)
    {
        $products   = Products::find($id);
        $brand_logo = explode('/', $products->brand_logo);
        $image      = explode('/', $products->image);
        $document   = explode('/', $products->document);
        array_pop($brand_logo);
        array_pop($image);
        array_pop($document);
        $brand_logo = implode('/', $brand_logo);
        $image      = implode('/', $image);
        $document   = implode('/', $document);

        if (!empty($brand_logo) && File::isDirectory($brand_logo)) {
            File::deleteDirectory($brand_logo);
        }

        if (!empty($image) && File::isDirectory($image)) {
            File::deleteDirectory($image);
        }

        if (!empty($document) && File::isDirectory($document)) {
            File::deleteDirectory($document);
        }

        $products->delete();

        ProductsTranslates::where('product_id', $id)->delete();
        Features::where('product_id', $id)->delete();

        $advantages = Advantages::where('product_id', $id)->get();
        if ($advantages) {
            foreach ($advantages as $adv) {
                $icon = $adv->icon;
                $icon = explode('/', $icon);
                array_pop($icon);
                $icon = implode('/', $icon);
                $icon = substr($icon, 1);
                if (!empty($icon) && File::isDirectory($icon)) {
                    File::deleteDirectory($icon);
                }
            }
            Advantages::where('product_id', $id)->delete();
        }

        AdvantagesTranslates::where('product_id', $id)->delete();

        return response()->json();
    }

    public function getProductsByLanguage(Request $request)
    {
        $data = Products::with(
            [
                'translates' => function ($query) use ($request) {
                    $query->where('lang_id', $request->lang);
                }
            ]
        )
            ->with(
                [
                    'features' => function ($query) use ($request) {
                        $query->where('lang_id', $request->lang);
                    }
                ]
            )
            ->with(
                [
                    'advantage' => function ($query) use ($request) {
                        $query->with(
                            [
                                'advantages' => function ($query) use ($request) {
                                }
                            ]
                        )->where('lang_id', $request->lang);
                    }
                ]
            )
            ->with('category')
            ->where('id', '!=', $request->id)
            ->latest()->limit($request->length);

        if ($request->id) {
            return $data->where('id', '!=', $request->id)->get();
        }

        return response()->json($data->get());
    }

    public function toggle(Request $request)
    {
        $status   = $request->status;
        $products = Products::find($request->id);
        if (Schema::hasColumn('products', 'status')) {
            $products->status = $status;
        } else {
            $products->available = $status;
        }
        $products->save();
    }

    public function copy(Request $request)
    {
        $product         = Products::find($request->id);
        $newProduct      = $product->replicate();
        $newProduct->sku = '';
        $newProduct->save();

        if (!empty($product->brand_logo) && File::isFile(ltrim($product->brand_logo, $product->brand_logo[0]))) {
            $smallthumbnailpath = ltrim($product->brand_logo, $product->brand_logo[0]);
            $file               = pathinfo(public_path($smallthumbnailpath));
            $thumbnailpath      = 'images/brands/thumbnail/' . $newProduct->id;
            /*File::copy(public_path($smallthumbnailpath),storage_path($thumbnailpath . '/' . $file['basename']));*/
            Storage::disk('public')->copy(
                '/images/brands/thumbnail/' . $product->id . '/' . $file['basename'],
                '/images/brands/thumbnail/' . $newProduct->id . '/' . $file['basename']
            );
            $this->createThumbnail(public_path('/storage/' . $thumbnailpath) . '/' . $file['basename'], 60, 50);
            $newProduct->brand_logo = '/' . $thumbnailpath . '/' . $file['basename'];
        }

        if (!empty($product->image) && File::isFile(ltrim($product->image, $product->image[0]))) {
            $smallthumbnailpath = ltrim($product->image, $product->image[0]);
            $file               = pathinfo(public_path($smallthumbnailpath));
            $newthumbnailpath   = 'private/images/products/' . $newProduct->id;
            $thumbnailpath      = 'private/images/products/' . $newProduct->id . '/';
            if (!File::exists($thumbnailpath)) {
                File::makeDirectory($thumbnailpath);
            }
            File::copy('./' . $smallthumbnailpath, public_path($thumbnailpath . $file['basename']));
            $newProduct->image = $thumbnailpath . $file['basename'];
        }

        if (!empty($product->document) && File::isFile(ltrim($product->document, $product->document[0]))) {
            $smallthumbnailpath = ltrim($product->document, $product->document[0]);
            $file               = pathinfo(public_path($smallthumbnailpath));
            $newthumbnailpath   = 'private/documents/products/' . $newProduct->id;
            $thumbnailpath      = 'private/documents/products/' . $newProduct->id . '/';
            if (!File::exists($thumbnailpath)) {
                File::makeDirectory($thumbnailpath);
            }
            File::copy('./' . $smallthumbnailpath, public_path($thumbnailpath . $file['basename']));
            $newProduct->document = $thumbnailpath . $file['basename'];
        }

        $newProduct->save();

        $productTranslates = ProductsTranslates::where('product_id', $request->id)->get();
        foreach ($productTranslates as $pt) {
            $newProductTranslates             = $pt->replicate();
            $newProductTranslates->product_id = $newProduct->id;
            $newProductTranslates->save();
        }

        $advantages = Advantages::where('product_id', $request->id)->get();
        foreach ($advantages as $a) {
            $newAdvantages = $a->replicate();
            if (!empty($a->icon) && File::isFile(ltrim($a->icon, $a->icon[0]))) {
                $icon = pathinfo(public_path(ltrim($a->icon, $a->icon[0])));
                $path = 'private/images/products/advantages_icons/' . $newProduct->id;
                if (!File::exists($path)) {
                    File::makeDirectory($path);
                }
                File::copy(public_path(ltrim($a->icon, $a->icon[0])), $path . '/' . $icon['basename']);
                $newAdvantages->icon = '/' . $path . '/' . $icon['basename'];
            }
            $newAdvantages->product_id = $newProduct->id;
            $newAdvantages->save();
        }

        $advantagesTranslates = AdvantagesTranslates::where('product_id', $request->id)->get();
        foreach ($advantagesTranslates as $nat) {
            $newAdvantagesTranslates             = $nat->replicate();
            $newAdvantagesTranslates->product_id = $newProduct->id;
            $newAdvantagesTranslates->save();
        }

        $productFeatures = Features::where('product_id', $request->id)->get();
        foreach ($productFeatures as $pf) {
            $newProductFeatures             = $pf->replicate();
            $newProductFeatures->product_id = $newProduct->id;
            $newProductFeatures->save();
        }
        return response()->json();
    }
}
