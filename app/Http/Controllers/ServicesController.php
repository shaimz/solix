<?php

namespace App\Http\Controllers;

use App\Models\Backend\Services;
use App\Models\Backend\ServicesCategories;
use App\Models\Backend\ServicesCategoriesTranslates;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function index(Request $request){
        $lang_id = $request->lang_id;
        $offset = $request->offset ? $request->offset : 0;

        $data = array();
        $categories = ServicesCategories::with(['translates' => function($query) use ($lang_id){
            $query->where('lang_id',$lang_id);
        }])
            ->skip($offset)
            ->take($request->limit)
            ->get();

        foreach($categories as $category){
            $items = Services::
            with(['data' => function($query) use ($lang_id){
                $query->where('lang_id',$lang_id);
            }])
                ->with(['advantages' => function($query) use ($lang_id){
                    $query->where('lang_id',$lang_id);
                }])
                ->where('category_id',$category['id'])
                ->get();
            foreach($items as $item){
                $item['type'] = $category['type'];
            }
            $data[] = [
                'category'=>$category['translates']['name'], 'items' => $items
            ];
        }
        return response()->json($data);
    }

    public function show(Request $request){
        $lang_id = $request->lang_id;
        $id = $request->id;

        if($id){
            return response()->json(Services::where('id',$id)
                ->with(['data' => function($query) use ($lang_id){
                    $query->where('lang_id',$lang_id);
                }])
                ->with(['advantages' => function($query) use ($lang_id){
                    $query->where('lang_id',$lang_id);
                }])
                ->first());
        }
        return response()->json();
    }
}
