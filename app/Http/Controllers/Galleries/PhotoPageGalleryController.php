<?php

namespace App\Http\Controllers\Galleries;

use App\Http\Requests\PhotoPageGalleryRequest;
use App\Models\PhotoPageGallery;
use App\Http\Controllers\Controller;

class PhotoPageGalleryController extends Controller
{


   
    public function store(PhotoPageGalleryRequest $request)
    {

        $gallery = PhotoPageGallery::create($request->validated());
        return response()->success($gallery->refresh());
    }

 


    public function update(PhotoPageGalleryRequest $request, PhotoPageGallery $photoGallery)
    {
        
        $photoGallery->update($request->validated());
        return response()->success($photoGallery->refresh());
    }

   
    public function destroy( $ids )
    {
        if(is_string($ids)){
            $ids = explode(',',$ids);
        }
        $count = PhotoPageGallery::whereIn('id',$ids)->delete();

        return response()->success($count);
    }
}
