<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class SettingController extends Controller
{

    public function show($id)
    {
        // Product Detail
        $settings = Setting::find($id);
        if (!$settings) {
            return response()->json([
                'message' => 'Settings Not Found.'
            ], 404);
        }

        // Return Json Response
        return response()->json([
            'settings' => $settings
        ], 200);
    }

    public function update(Request $request, Setting $setting)
    {
        try {
            // Validate the incoming request data (if needed)

            // Handle image uploading
            if ($request->hasFile('logo')) {
                $image = $request->file('logo');
                $imageName = time() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images'), $imageName);
                // Save the image path to the database
                $setting->logo = '/images/' . $imageName; // Update the image path based on your storage logic
            }

            // Update other fields
            $setting->fill($request->except('logo')); // Exclude logo from the mass assignment

            // Save the updated setting
            $setting->save();

            // Construct the response message
            $responseMessage = 'Settings updated successfully';

            return response()->json(['message' => $responseMessage], Response::HTTP_OK);
        } catch (\Exception $e) {
            // Handle any unexpected errors
            return response()->json(['message' => 'An error occurred while updating the setting.'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
