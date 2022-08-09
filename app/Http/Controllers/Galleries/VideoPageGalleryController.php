<?php

namespace App\Http\Controllers\Galleries;

use App\Http\Requests\VideoPageGalleryRequest;
use App\Models\VideoPageGallery;
use App\Http\Controllers\Controller;

class VideoPageGalleryController extends Controller
{


   
    public function store(VideoPageGalleryRequest $request)
    {

        $gallery = VideoPageGallery::create($request->validated());
        return response()->success($gallery->refresh());
    }

 


    public function update(VideoPageGalleryRequest $request, VideoPageGallery $videoGallery)
    {
        $videoGallery->update($request->validated());
        return response()->success($videoGallery->refresh());
    }

   
    public function destroy( $ids )
    {
        if(is_string($ids)){
            $ids = explode(',',$ids);
        }
        $count = VideoPageGallery::whereIn('id',$ids)->delete();

        return response()->success($count);
    }
}
