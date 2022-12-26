<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Requests\Calls;
use App\Models\Backend\Requests\Products;
use App\Models\Backend\Requests\Services;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Session;
use Illuminate\Contracts\Auth\Authenticatable;

class AdminController extends Controller
{
    public function register(Request $request){
        $this->validate($request,[
            'first_name'       =>   'required|string',
            'email'    =>   'required|unique:users',
            'username'  =>   'required|unique:users',
            'password'         =>   'required|min:5',
        ]);

        $user = new User();
        $user->name = $request->input('name');
        $user->username = $request->input('username');
        $user->email = $request->input('email');
        $user->password = bcrypt($request->input('password'));

        $user->save();

        Session::put('userId',$user->id);

        /*        $data = $customer->toArray();
                Mail::send('vendor.mail',$data,function($message) use ($data){
                    $message->to($data['email_address']);
                    $message->subject('Welcome to our shop');
                });*/

        return response()->json('Done!');
    }

    public function login(Request $request){
        $user = User::where('username',$request->username)->first();

        if($user && Hash::check($request->password,$user->password)){
                Session::put('userId',$user->id);
                Auth::login($user,$request->remember);

                return response()->json($user);
        }

        return response()->json('Error');
    }

    public function logout(){
        Session::forget('userId');
        Auth::logout();
        return redirect('/admin');
    }

    public function userData(){
        $id = Session::get('userId');

        $user = User::find($id);

        return response()->json([
            'user_session'=>$user
        ]);
    }

    public function getCountRequests(){
        $products = Products::all();
        $calls = Calls::all();
        $services = Services::all();

        return response()->json([
            'products' => $products->where('status',1)->where('seen',0)->count(),
            'calls' =>  $calls->where('status',1)->where('seen',0)->count(),
            'services'  =>  $services->where('status',1)->where('seen',0)->count()
        ]);
    }

    public function reset(Request $request){
        $data = $request->all();

        var_export($data);
        if($user = User::where('username',$data['username'])->first()){
            $user->password = Hash::make($data['password']);
            $user->save();
            return response()->json();
        }
    }
}
