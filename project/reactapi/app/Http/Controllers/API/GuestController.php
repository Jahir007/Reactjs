<?php

namespace App\Http\Controllers\API;


use App\Models\Guest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
    
}






// public function index()
//     {
//         $guests = Guest::all();
//         return response()->json([
//             'status' => 200,
//             'guest' => $guests
//         ], 200);
//     }

//     public function edit($id)
//     {
//         $guest = Guest::find($id);
//         if($guest) {
//             return response()->json([
//                 'status' => 200,
//                 'guest' => $guest
//             ]);
//         }
//         else
//         {
//             return response()->json([
//                 'status' => 404,
//                 'message' => 'Guest not found'
//             ]);
//         }
//     }




//     public function store(Request $request)
//     {


        
//         $validator = Validator::make($request->all(), [
//             'guest_id' => 'required',
//             'guest_name' => 'required|max:191',
//             'lc_number' => 'required|max:15',
//             'image' => 'required',
//             'duration' => 'required|max:191',
//             'slot_id' => 'required|max:191',
//             'start_date' => 'required|max:191',
//             'charge' => 'required|max:191',
//         ]);
//         if($validator->fails())
//         {
//             return response()->json([
//                 'status' => 400,
//                 'errors' => $validator->messages(),
//             ]);
//         }
//         else
//         {
           
//             $guest = new Guest;
//             $guest->guest_id = $request->guest_id;
//             $guest->guest_name = $request->guest_name;
//             $guest->lc_number = $request->lc_number;
//             $guest->image = $request->image;
//             $guest->duration = $request->duration;
//             $guest->slot_id = $request->slot_id;
//             $guest->start_date = $request->start_date;
//             $guest->remarks = $request->remarks;
//             $guest->charge = $request->charge;
//             $guest->save();
//             return response()->json([
//                 'status' => 200,
//                 'message' => 'Guest added successfully',
//             ]);

//         }
//     }


//     public function update(request $request, $id)
//     {

//         $validator = Validator::make($request->all(), [
//             'guest_id' => 'required',
//             'guest_name' => 'required|max:191',
//             'lc_number' => 'required|max:15',
//             'image' => 'required',
//             'duration' => 'required|max:191',
//             'slot_id' => 'required|max:191',
//             'start_date' => 'required|max:191',
//             'charge' => 'required|max:191',
//         ]);
//         if($validator->fails())
//         {
//             return response()->json([
//                 'status' => 422,
//                 'errors' => $validator->messages(),
//             ]);
//         }
//         else
//         {

//             $guest = Guest::find($id);
//             if($id)
//             {
//                 $guest->guest_id = $request->guest_id;
//                 $guest->guest_name = $request->guest_name;
//                 $guest->lc_number = $request->lc_number;
//                 $guest->image = $request->image;
//                 $guest->duration = $request->duration;
//                 $guest->slot_id = $request->slot_id;
//                 $guest->start_date = $request->start_date;
//                 $guest->remarks = $request->remarks;
//                 $guest->charge = $request->charge;
//                 $guest->save();
//                 return response()->json([
//                     'status' => 200,
//                     'message' => 'Guest update successfully',
//                     ]);
//                 }
            
//             else
//             {
//                 return response()->json([
//                     'status' => 404,
//                     'message' => 'Guest not found'
//                     ]);
//                 }
//             }
//         }

       
//     public function destroy($id)
//     {
//         $guest = Guest::find($id);
//         if($guest)
//         {
//             $guest->delete();
//             return response()->json([
//                 'status' => 200,
//                 'message' => 'Guest deleted successfully'
//             ]);
//         }
//         else
//         {
//             return response()->json([
//                 'status' => 404,
//                 'message' => 'Guest not found'
//             ]);
//         }
//     }
