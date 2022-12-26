<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;
use App\Models\Backend\Products;


class AdvantagesTranslates extends Model
{
    protected $table = 'product_advantages_translates';

    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];

    public function advantages(){
        return $this->belongsTo(Advantages::class,'advantage_id','id');
    }

}
