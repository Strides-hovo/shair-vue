<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MainController extends Controller
{

    public function admin(Request $request)
    {
        return view('app');
    }

}
