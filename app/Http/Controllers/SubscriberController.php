<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SubscriberController extends Controller
{
    public function insert(Request $request){
        if($email = $request->email){
            $sub = Subscriber::where('email',$email)->first();
            if($sub){
                return response()->json(['error'=>'Already subscribed']);
            }

            $subscriber        = new Subscriber();
            $subscriber->email = $email;
            $subscriber->save();

            Mail::send('includes.requestsubscriber', ['subscriber' => $subscriber], function ($m) use ($subscriber) {
                $m->from('info@solix.md', 'Solix', 'Solix');
                $m->to('info@solix.md')->subject('New subscriber on Solix');
            });

            return response()->json();
        }
    }
}
