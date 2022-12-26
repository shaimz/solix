<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class CategoriesTranslates extends Model
{
    protected $table = 'categories_translates';

    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];
}
