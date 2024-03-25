<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{

    public function show()
    {
        return response()->json('Hello World');
    }


    public function update(Request $request, Setting $setting)
    {
        $setting->update($request->all());
        return response()->json($setting, 200);
    }
}
