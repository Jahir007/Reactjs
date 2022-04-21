<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Slottrans;
use App\Models\Guest;


class FrontendController extends Controller
{
    
    public function slottrans()
    {
        $slottrans = Slottrans::where('status', '=', '0')->get();
        return response()->json([
            'status' => 200,
            'slottrans' => $slottrans,
        ]);
    }

    public function guest($slug)
    {
        $slottrans = Slottrans::where('slug', $slug)->where('status', '0')->first();
        if($slottrans)
        {
            $guest = Guest::where('type_id', $slottrans->id)->where('status', '0')->get();
            if($guest)
            {
                return response()->json([
                    'status' => 200,
                    'guest_data' => [
                        'guest' => $guest,
                        'slottrans' => $slottrans,
                    ],
                ]);
            }
            else
            {
                return response()->json([
                    'status' => 400,
                    'message' => 'No guest Available',
                ]);
            }
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'Guest not found',
            ]);
        }
    }

}
