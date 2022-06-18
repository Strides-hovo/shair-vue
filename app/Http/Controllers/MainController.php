<?php

namespace App\Http\Controllers;

use Alexusmai\LaravelFileManager\Events\FilesUploaded;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MainController extends Controller
{


    public function admin(Request $request)
    {


        event(new FilesUploaded($request));


        return view('admin');
    }


}
