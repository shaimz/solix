<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class Advantages extends Model
{

    protected $table = 'product_advantages';

    public $timestamps = false;
    protected $hidden  = ['created_at','updated_at'];

}
