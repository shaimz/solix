<?php

namespace App\Models\Backend;

use Illuminate\Database\Eloquent\Model;

class ProjectsTranslates extends Model
{
    protected $table = 'projects_translates';

    public $timestamps = false;
    protected $hidden = ['created_at','updated_at'];

    public function projects(){
        return $this->belongsTo(Projects::class,'id','project_id');
    }
}
