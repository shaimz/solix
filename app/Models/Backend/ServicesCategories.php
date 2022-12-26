<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class ServicesCategories extends Model
{
    public function services(){
        return $this->hasMany(Services::class,'category_id','id');
    }
    public function translates(){
        return $this->hasOne(ServicesCategoriesTranslates::class,'category_id','id');
    }
    public function type(){

    }
}
