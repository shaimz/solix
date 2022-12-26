<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class News extends Model
{
    protected $table = 'news';

    public function news(){
        return $this->hasOne(NewsTranslates::class,'news_id','id');
    }
    public function translates(){
        return $this->hasOne(NewsTranslates::class,'news_id','id');
    }
    public function count(){
        return News::count();
    }

    /**
     * Prepare a date for array / JSON serialization.
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
