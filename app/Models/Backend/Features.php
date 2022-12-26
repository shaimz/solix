<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;


class Features extends Model
{
    protected $table = 'product_features';

    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];

}
