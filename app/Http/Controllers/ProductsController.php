<?php

namespace App\Http\Controllers;

use App\Models\Backend\Categories;
use App\Models\Backend\Products;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductsController extends Controller
{
    public function show($id,$lang){
        return Products::where('id',$id)
            ->with(['category' => function($query) use ($lang){
                $query->with('data');
            }])
            ->with(['features' => function($query) use ($lang){
                $query->where('lang_id',$lang);
            }])
            ->with(['translates' => function($query) use ($lang){
                $query->where('lang_id',$lang);
            }])
            ->with(['advantage' => function ($query) use ($lang){
                $query->where('lang_id',$lang)->with('advantages');
            }])->first();
    }

}
