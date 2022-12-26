<?php

namespace App\Http\Controllers\Backend\Requests;

use App\Http\Controllers\Controller;
use App\Models\Backend\Requests\Calls;
use Illuminate\Http\Request;
use App\Models\Backend\Requests\Services;

class ServicesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        $requests = Services::orderby('id','DESC')->get();
        return response()->json($requests);
    }

    public function seen(){
        $toggle = Services::find('id');
        $toggle->seen = 1;
        $toggle->save();
    }

    public function getRequest($id){
        $request = Services::where('id',$id)
            ->where('status',1)->first();

        if($request){
            return response()->json($request);
        }
        return response()->json('Service request not found!');
    }

    public function updateStatus(Request $request){
        $id = $request->id;
        $request = Services::find($id);
        $request->status = 0;
        $request->save();

        return response()->json();
    }
}
