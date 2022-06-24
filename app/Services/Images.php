<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Images
{

    public function getImages($type = 'images')
    {

        $image_types = $type === 'images' ? ['.jpg', '.jpeg', '.png', '.gif'] : ['.mp4'];
        $files = Storage::allFiles('public');
        $files = array_filter($files,fn($f) => in_array(stristr($f,'.'),$image_types));

        return str_replace('public', '/storage', $files);
    }


    public function upload(Request $request)
    {
        return $request->file();
    }

}