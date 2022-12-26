<?php

namespace App\Models\Backend;

use App\Models\Backend\ServicesAdvantages;
use App\Models\Backend\ServicesTranslates;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Services extends Model
{
    public function data(){
        return $this->hasOne(ServicesTranslates::class,'service_id','id');
    }

    public function advantages(){
        return $this->hasMany(ServicesAdvantages::class,'service_id','id');
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
