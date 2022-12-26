<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    public function getUserLang(){
        if(Auth::check()){
            $user = Auth::id();
            $lang = User::findOrFail($user);

            return response()->json($lang->lang_id);
        }
    }
    public function setUserLang(Request $request){
        if(Auth::check()){
            $user = Auth::id();
            $lang = User::find($user);

            $lang->lang_id = $request->lang;
            $lang->save();
            return response()->json($request->lang);
        }
    }
}
