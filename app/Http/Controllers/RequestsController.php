<?php

namespace App\Http\Controllers;

use App\Models\Backend\Requests\Calls;
use App\Models\Backend\Requests\Products;
use App\Models\Backend\Requests\Services;
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
}
