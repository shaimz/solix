<?php

namespace App\Http\Controllers;

use App\Models\Backend\Languages;
use App\Models\Backend\Careers;
use App\Models\Backend\CareersTranslates;
use App\Models\Backend\NewsTranslates;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Schema;

class CareersController extends Controller
{
    public function getCareers(Request $request){
        $lang_id = $request->lang_id;
        if(is_array($lang_id)){
            return Careers::with(['backendData' => function($query) use ($lang_id){
                $query->whereIn('lang_id',$lang_id)->orderByRaw("FIELD(lang_id , '2', '3', '1') ASC");
            }])->get();
        }
        return Careers::with(['translates' => function($query) use ($lang_id){
            $query->where('lang_id',$lang_id);
        }])->get();
    }

    public function getCareer(Request $request){
        $lang_id = $request->lang_id;
        $id = $request->id;

        return response()->json(Careers::where('id',$id)
                ->with(['translates' => function($query) use($lang_id){
                    $query->where('lang_id',$lang_id);
                }])->first());
    }

    public function create(){
        //
    }

    public function store(Request $request){
        foreach($request->data as $i=>$data) {
            $data = json_decode($data);
            $find_by_sku = CareersTranslates::where('name', '=', $data->name)->first();
            if($i > 0){
                $find_by_sku = CareersTranslates::where('name','=',json_decode($request->data[0])->name)->first();
            }

            $new = !$find_by_sku;
            if ($new) {
                $careers = new Careers();

                $careers->status = $data->status;
                $careers->save();
            }

            $translates = CareersTranslates::where('career_id', $find_by_sku ? $find_by_sku->career_id : 0)->where('lang_id', $data->activeItem)->first();

            if(!$translates){
                $translated = new CareersTranslates();
                $translated->career_id = $new ? $careers->id : $find_by_sku->career_id;
                $translated->name = $data->name;
                $translated->description = $data->description;
                $translated->location = $data->location;
                $translated->lang_id = $data->activeItem;
                $translated->save();
            }
        }
        if(!$request->data){
            return response()->json(['error'=>'Job already exists!']);
        }
        return response(null,200);
    }

    public function show($id,$lang){
        $variants = Languages::all();
        $massive = array();
        if($lang){
            return response()->json(Careers::with(['translates' => function ($query) use ($lang){
                $query->where('lang_id',$lang);
            }])->where('id',$id)->first());
        }
        foreach($variants as $lang){
            $data = DB::table('careers')
                ->join('careers_translates','career.id','=','careers_translates.news_id')
                ->where('career.id','=',$id)
                ->where('careers_translates.lang_id','=',$lang['id'])
                ->select('careers.status','careers.created_at','careers_translates.*')
                ->get();
            foreach($data as $d){
                $data = (array)$d;
            }
            $massive[$lang['id']] = $data;
        }

        return response()->json($massive);
    }

    public function edit($id){
        //
    }

    public function update(Request $request,$id){
        $data = json_decode($request->data);

        $careers = Careers::find($id);
        $careers->status = $data->status;
        $careers->save();

        $translated = CareersTranslates::where('career_id',$id)->where('lang_id',$data->activeItem)->first();
        if(!$translated){
            $translated_create = new CareersTranslates();
            $translated_create->description = $data->description;
            $translated_create->name = $data->name;
            $translated_create->location = $data->location;
            $translated_create->career_id = $id;
            $translated_create->lang_id = $data->activeItem;
            $translated_create->save();
        }else{
            $translated->description = $data->description;
            $translated->location = $data->location;
            $translated->name = $data->name;
            $translated->save();
        }

        return back();
    }

    public function destroy($id){
        $careers = Careers::find($id);
        $careers->delete();
        CareersTranslates::where('career_id',$id)->delete();


        return back();
    }

    public function toggle(Request $request){
        $status = $request->status;
        $careers = Careers::find($request->id);
        if (Schema::hasColumn('careers','status')){
            $careers->status = $status;
        } else {
            $careers->available = $status;
        }

        $careers->save();
    }
}
