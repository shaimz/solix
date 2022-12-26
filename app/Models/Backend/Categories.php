<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    protected $table = 'categories';

    public function products(){
        return $this->hasMany(Products::class,'category_id','id');
    }
    public function data(){
        return $this->hasOne(CategoriesTranslates::class,'category_id','id');
    }
    public function children(){
        return $this->hasMany(Categories::class,'parent_id','id');
    }
}
