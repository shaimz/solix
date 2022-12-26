<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class ProductsTranslates extends Model
{
    protected $table = 'products_translates';

    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];

    public function features(){
        return $this->hasMany('product_features');
    }

    public function advantages(){
        return $this->hasMany('product_advantages');
    }

    public function category(){
        return $this->hasOne('categories','category_id','id');
    }

    public function translates(){
        return $this->belongsTo(Products::class,'id');
    }
}
