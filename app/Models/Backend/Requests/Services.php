<?php

namespace App\Models\Backend\Requests;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Services extends Model
{
    protected $table = 'service_requests';
    protected $fillable = ['status','service','type','price'];

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
