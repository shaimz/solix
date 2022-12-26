<?php

namespace App\Http\Controllers\Backend\Requests;

use App\Http\Controllers\Controller;
use App\Models\Backend\Requests\Products;
use Illuminate\Http\Request;

use App\Models\Backend\Requests\Calls;

class CallsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        $requests = Calls::orderby('created_at','DESC')->get();
        return response()->json($requests);
    }

    public function seen(){
        $toggle = Calls::find('id');
        $toggle->seen = 1;
        $toggle->save();
    }

    public function getRequest($id){
        $request = Calls::where('id',$id)
            ->where('status',1)->first();

        if($request){
            return response()->json($request);
        }
        return response()->json('Call request not found!');
    }

    public function updateStatus(Request $request){
        $id = $request->id;
        $request = Calls::find($id);
        $request->status = 0;
        $request->save();

        return response()->json();
    }

    public function create(Request $request){
        $call = new Calls();
        $call->status = 1;
        $call->page = $request->page;
        $call->phone = $request->phone ? $request->phone : '';
        $call->email = $request->email ? $request->email : '';
        $call->comment = $request->comment ? $request->comment : '';
        if($call->save()){
            return response()->json('');
        }else{
            return response()->json('Error sending the request!');
        }
    }
}
