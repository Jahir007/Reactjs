<?php

namespace App\Http\Controllers\API;


use App\Models\Guest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\File;

class GuestController extends Controller
{

    
    public function index()
    {
        $guests = Guest::all();
        return response()->json([
            'status' => 200,
            'guests' => $guests
        ]);
    }



    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'type_id' => 'required',
            'guest_name' => 'required',
            'lc_number' => 'required',
            'image' => 'required||image||mimes:jpeg,png,jpg,gif,svg',
            'duration' => 'required',
            // 'slot_id' => 'required',
            'start_date' => 'required',
            'charge' => 'required',
            'remarks' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        }
        else
        {
            $guest = new Guest;
            $guest->type_id = $request->input('type_id');
            $guest->guest_name = $request->input('guest_name');
            $guest->lc_number = $request->input('lc_number');
            $guest->image = $request->input('image');
            $guest->duration = $request->input('duration');
            $guest->slot_id = $request->input('slot_id');
            $guest->start_date = $request->input('start_date');
            $guest->charge = $request->input('charge'); 
            $guest->status = $request->input('status') === true ? 0 : 1;
            $guest->save();

            if($request->hasFile('image'))
            {
                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('uploads/guest/', $filename);
                $guest->image = 'uploads/guest/' . $filename;
            }
            $guest->save();

            return response()->json([
                'status' => 200,
                'message' => 'Guest Booking Successfully',
            ]);
        }
    }

    public function edit($id)
    {
        $guest = Guest::find($id);
        if($guest)
        {
            return  response()->json([
                'status' => 200,
                'guest' => $guest,
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Guest Booking Not Found'
            ]);
        }
    }


    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'type_id' => 'required',
            'guest_name' => 'required',
            'lc_number' => 'required',
            'duration' => 'required',
            // 'slot_id' => 'required',
            'start_date' => 'required',
            'charge' => 'required',
            'remarks' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ]);
        }
        else
        {
            $guest = Guest::find($id);

            if($guest)
            {

            $guest->type_id = $request->input('type_id');
            $guest->guest_name = $request->input('guest_name');
            $guest->lc_number = $request->input('lc_number');
            $guest->image = $request->input('image');
            $guest->duration = $request->input('duration');
            $guest->slot_id = $request->input('slot_id');
            $guest->start_date = $request->input('start_date');
            $guest->charge = $request->input('charge'); 
            $guest->status = $request->input('status') === true ? 0 : 1;

            if($request->hasFile('image'))
            {
                $path = '$guest->image';
                if(File::exists($path))
                {
                    File::delete($path);
                }

                $file = $request->file('image');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('uploads/guest/', $filename);
                $guest->image = 'uploads/guest/' . $filename;
            }
            $guest->update();

            return response()->json([
                'status' => 200,
                'message' => 'Guest Update Successfully',
            ]);
            
            }
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => 'Guest Booking Not Found'
                ]);
            }
        }

    }

    public function destroy($id)
    {
        $guest = Guest::find($id);
        if($guest)
        {
            $guest->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Guest deleted successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Guest not found'
            ]);
        }
    }

    
}

