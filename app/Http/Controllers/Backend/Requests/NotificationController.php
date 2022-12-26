<?php

namespace App\Http\Controllers\Backend\Requests;

use App\Http\Controllers\Controller;
use App\Mail\sendMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class NotificationController extends Controller
{
    public function send(Request $request){
        $this->validate($request,[
            'header' => ['required', 'string', 'max:255'],
            'text' => ['required', 'string'],
        ]);
        $data = [
            'subject'=>$request->header,
            'text'=>$request->text
        ];

    /*    if(Mail::to($request->email)->send(new sendMail($data))){
            return response()->json('Your email has been sent to ' . $request->email);
        }*/
        $headers = array(
            'From' => 'webmaster@example.com',
            'Reply-To' => 'webmaster@example.com',
            'X-Mailer' => 'PHP/' . phpversion()
        );
        mail($request->email,'Test',implode(',',$data),$headers);
        return response()->json('Something went wrong!');
    }
}
