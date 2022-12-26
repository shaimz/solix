<?php

namespace App\Http\Controllers\Backend\Requests;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Backend\Requests\Products;

class ProductsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        $requests = Products::orderby('id','DESC')->get();
        return response()->json($requests);
    }
    public function seen(){
        $toggle = Products::find('id');
        $toggle->seen = 1;
        $toggle->save();
    }

    public function getRequest($id){
        $request = Products::where('id',$id)
            ->where('status',1)->first();

        if($request){
            return response()->json($request);
        }
        return response()->json('Product request not found!');
    }

    public function updateStatus(Request $request){
        $id = $request->id;
        $request = Products::find($id);
        $request->status = 0;
        $request->save();

        return response()->json();
    }
}
