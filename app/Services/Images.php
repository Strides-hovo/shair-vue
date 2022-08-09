<?php

namespace App\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use \Illuminate\Http\JsonResponse;

class Images
{

    public function getImages($type = 'images'): JsonResponse
    {

        
        $image_types = $type === 'images' ? ['.jpg', '.jpeg', '.png', '.gif'] : ['.mp4'];
        $files = Storage::allFiles('public');
        $files = array_filter($files,fn($f) => in_array(stristr($f,'.'),$image_types));
        $data = str_replace('public', '/storage', $files);
        return response()->json($data);
    }

  

    public function upload(Request $request): JsonResponse
    {

        $uploadedFile = $request->file('file');
        $filename = $uploadedFile->getClientOriginalName();


        Storage::putFileAs('public/files/',$uploadedFile,$filename);
        return response()->json( '/storage/files/' . $filename);
    }

}