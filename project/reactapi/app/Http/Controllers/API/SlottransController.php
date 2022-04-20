<?php

namespace App\Http\Controllers\API;

use App\Models\Slottrans;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SlottransController extends Controller
{
    
    public function index()
    {
        $slottrans = Slottrans::all();
        return response()->json([
            'status' => 200,
            'slottrans' => $slottrans
        ], 200);
    }


    public function allslottrans()
    {
        $slottrans = Slottrans::where('status', '=', '0')->get();
        return response()->json([
            'status' => 200,
            'slottrans' => $slottrans
        ]);
    }



    public function edit($id)
    {
        $slottrans = Slottrans::find($id);
        if($slottrans) {
            return response()->json([
                'status' => 200,
                'slottrans' => $slottran
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Slot Translation not found'
            ]);
        }
    }




    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'type_id' => 'required',
            'slot_id' => 'required',
            'vehicle_id' => 'required',
            'lc_number' => 'required',
            'start_date_time' => 'required',
            'end_date_time' => 'required',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status' => 400,
                'errors' => $validator->messages(),
            ]);
        }
        else
        {

            $slottrans = new Slottrans;
            $slottrans->type_id = $request->type_id;
            $slottrans->slot_id = $request->slot_id;
            $slottrans->vehicle_id = $request->vehicle_id;
            $slottrans->lc_number = $request->lc_number;
            $slottrans->start_date_time = $request->start_date_time;
            $slottrans->end_date_time = $request->end_date_time;
            $slottrans->slug = $request->slug;
            $slottrans->status = $request->input('status') == true ? 0 : 1;
            $slottrans->save();
            return response()->json([
                'status' => 200,
                'message' => 'Slot Translation added successfully',
            ]);

        }
    }


    public function update(request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'type_id' => 'required',
            'slot_id' => 'required',
            'vehicle_id' => 'required',
            'lc_number' => 'required',
            'start_date_time' => 'required',
            'end_date_time' => 'required',
        ]);
        if($validator->fails())
        {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        }
        else
        {

            $slottrans = Slottrans::find($id);
            if($id)
            {
                $slottrans->type_id = $request->type_id;
                $slottrans->slot_id = $request->slot_id;
                $slottrans->vehicle_id = $request->vehicle_id;
                $slottrans->lc_number = $request->lc_number;
                $slottrans->start_date_time = $request->start_date_time;
                $slottrans->end_date_time = $request->end_date_time;
                $slottrans->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Slot Translation update successfully',
                    ]);
                }
            
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => 'Slot Translationnot found'
                    ]);
                }
            }
        }

       
    public function destroy($id)
    {
        $slottrans = Slottrans::find($id);
        if($slottrans)
        {
            $slottrans->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Slot Translation deleted successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Slot Translation not found'
            ]);
        }
    }

}

