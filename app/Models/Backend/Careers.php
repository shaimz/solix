<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Careers extends Model
{
    protected $table = 'careers';

    public function translates(){
        return $this->hasOne(CareersTranslates::class,'career_id','id');
    }
    public function backendData(){
        return $this->hasMany(CareersTranslates::class,'career_id','id');
    }
    public function requirements(){
        return $this->hasMany(CareersRequirements::class,'career_id','id');
    }
    public function offers(){
        return $this->hasMany(CareersOffers::class,'career_id','id');
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
