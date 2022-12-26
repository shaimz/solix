<?php

namespace App\Http\Controllers\Backend\Requests;

use App\Http\Controllers\Controller;
use App\Mail\sendMail;
use App\Models\Backend\Requests\Calls;
use App\Models\Backend\Requests\Products;
use App\Models\Backend\Requests\Services;
use App\Models\Backend\ServicesCategories;
use App\Models\Backend\ServicesCategoriesTranslates;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class RequestsController extends Controller {

    public function create(Request $request) {
        $type = $request->type;

        if ($type === 'career'){
            $type = 'call';
        }

        switch ($type) {
            case 'call':
                $call          = new Calls();
                $call->status  = 1;
                $call->page    = $request->page;
                $call->phone   = $request->phone ? $request->phone : '';
                $call->email   = $request->email ? $request->email : '';
                $call->comment = $request->comment ? $request->comment : '';

                $this->sendRequestEmail($request);

                if ($call->save()) {
                    return response()->json();
                } else {
                    return response()->json(['error' => 'Error sending the request!']);
                }
                break;

            case 'service':
                $call          = new Services();
                $call->status  = 1;
                $call->service = null;
                $call->phone   = $request->phone ? $request->phone : '';
                $call->email   = $request->email ? $request->email : '';
                $call->comment = $request->comment ? $request->comment : '';

                $this->sendRequestEmail($request);

                if ($call->save()) {
                    return response()->json();
                } else {
                    return response()->json(['error' => 'Error sending the request!']);
                }
                break;

            case 'product':
                $call          = new Products();
                $call->status  = 1;
                $call->type    = $request->category;
                $call->name    = $request->product;
                $call->phone   = $request->phone ? $request->phone : '';
                $call->email   = $request->email ? $request->email : '';
                $call->comment = $request->comment ? $request->comment : '';
                $call->price   = $request->price ? preg_replace('/[,]+/', '.', $request->price) : '';

                $this->sendRequestEmail($request);
                if ($call->save()) {
                    return response()->json();
                } else {
                    return response()->json(['error' => 'Error sending the request!']);
                }
                break;
        }
    }

    public function sendRequestEmail(Request $request) {
        Mail::send('includes.requestemail', ['request' => $request], function ($m) use ($request) {
            $m->from('info@solix.md', 'Solix', 'Solix');
            $m->to($request->type == 'career' ? 'hr@solix.md' : 'info@solix.md')->subject('New ' . ($request->type) . ' request from Solix');
        });
    }

    public function seen(Request $request) {
        $type = $request->type;
        $id   = $request->id;
        switch ($type) {
            case 'product':
                $toggle = Products::find($id);
                if (!$toggle->seen) {
                    $toggle->seen = 1;
                    $toggle->save();
                } else {
                    return response()->json(['info' => 'Already seen!']);
                }
                break;
            case 'call':
                $toggle = Calls::find($id);
                if (!$toggle->seen) {
                    $toggle->seen = 1;
                    $toggle->save();
                } else {
                    return response()->json(['info' => 'Already seen!']);
                }
                break;
            case 'service':
                $toggle = Services::find($id);
                if (!$toggle->seen) {
                    $toggle->seen = 1;
                    $toggle->save();
                } else {
                    return response()->json(['info' => 'Already seen!']);
                }
                break;
        }
    }

    public function sendEmail(Request $request){
        Mail::send('includes.responsemail', ['request' => $request], function ($m) use ($request) {
            $m->from('info@solix.md', 'Solix', 'Solix');
            $m->to($request->email)->subject('New answer for your last request');
        });

        return response()->json('Successful sent!');
    }

    public function delete(Request $request) {
        $id   = $request->id;
        $type = $request->type;
        switch ($type) {
            case 'product':
                Products::find($id)->delete();
                break;
            case 'service':
                Services::find($id)->delete();
                break;
            case 'call':
                Calls::find($id)->delete();
                break;
        }
    }
}
