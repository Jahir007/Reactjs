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
        $slottranss = Slottrans::all();
        return response()->json([
            'status' => 200,
            'slottrans' => $slottranss
        ], 200);
    }



    public function edit($id)
    {
        $slottrans = Slottrans::find($id);
        if($slottrans) {
            return response()->json([
                'status' => 200,
                'slottrans' => $slottrans
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
            'slot_id' => 'required|max:2|unique:tbl_slottrans',
            'vehicle_id' => 'required|max:9|unique:tbl_slottrans',
            'lc_number' => 'required|max:25|unique:tbl_slottrans',
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
            $slottrans->slot_id = $request->slot_id;
            $slottrans->vehicle_id = $request->vehicle_id;
            $slottrans->lc_number = $request->lc_number;
            $slottrans->start_date_time = $request->start_date_time;
            $slottrans->end_date_time = $request->end_date_time;
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
            'slot_id' => 'required|max:2',
            'vehicle_id' => 'required|max:9',
            'lc_number' => 'required|max:25',
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

