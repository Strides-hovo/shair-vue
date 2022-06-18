<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Images
{

    public function getImages()
    {

       $a = Storage::allFiles('public');
       return str_replace('public','/storage',$a);
    }


    public function upload(Request $request)
    {
        return $request->file();
    }

}