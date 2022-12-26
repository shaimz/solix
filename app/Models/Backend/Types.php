<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class Types extends Model
{
    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];
}
