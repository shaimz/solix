<?php

namespace App\Http\Controllers;

use App\Models\Backend\Categories;
use App\Models\Backend\Products;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CategoriesController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function getCategories(Request $request)
    {
        $parents = Categories::with(['data' => function ($query) use ($request) {
            $query->where('lang_id', $request->lang_id);
        }])
            ->with(['children' => function ($query) use ($request){
                $query->with(['data' => function ($query) use ($request){
                    $query->where('lang_id',$request->lang_id);
                }]);
            }])
            ->get();


        return response()->json($parents);

    }

    public function getCategory(Request $request)
    {
        $category = Categories::with(['data' => function ($query) use ($request) {
            $query->where('lang_id', $request->lang_id);
        }])->where('url', $request->url)->first();

        return response()->json($category);
    }

    public function getCategoryById(Request $request)
    {
        $category = Categories::with(['data' => function ($query) use ($request) {
            $query->where('lang_id', $request->lang_id);
        }])->where('id', $request->parent_id)->first();

        return response()->json($category);
    }

    public function getBrandsByCategory(Request $request)
    {
        return response()->json(Products::select('brand_logo','brand')->where('category_id',$request->categoryId)->get());
    }

    public function setUserLang(Request $request)
    {
        if (Auth::check()) {
            $user = Auth::id();
            $lang = User::find($user);

            $lang->lang_id = $request->lang;
            $lang->save();
            return response()->json($request->lang);
        }
    }
}
