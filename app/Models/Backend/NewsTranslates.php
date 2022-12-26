<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;


class NewsTranslates extends Model
{
    protected $table = 'news_translates';

    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];

    public function news(){
        return $this->belongsTo(News::class,'id','news_id');
    }
}
