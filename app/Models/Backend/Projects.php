<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Projects extends Model
{
    protected $table = 'projects';

    public function features(){
        return $this->hasMany(ProjectsFeatures::class,'project_id','id');
    }
    public function projects(){
        return $this->hasOne(ProjectsTranslates::class,'project_id','id');
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
