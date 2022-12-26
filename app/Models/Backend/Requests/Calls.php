<?php

namespace App\Models\Backend\Requests;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Calls extends Model
{
    protected $table = 'call_requests';
    protected $fillable = ['status','name','page'];
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
