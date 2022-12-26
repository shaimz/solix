<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class ProjectsFeatures extends Model
{
    protected $table = 'projects_features';

    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];

    public function features(){
        return $this->belongsTo(Projects::class,'id','project_id');
    }

}
