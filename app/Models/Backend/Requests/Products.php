<?php

namespace App\Models\Backend\Requests;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Products extends Model
{
    protected $table = 'product_requests';
    protected $fillable = ['status','name','type','price',];
    //


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
