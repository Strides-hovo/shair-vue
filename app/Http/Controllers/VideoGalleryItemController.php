<?php

namespace App\Http\Controllers;

use App\Http\Requests\VideoGalleryItemRequest;
use App\Models\VideoGalleryItem;


class VideoGalleryItemController extends Controller
{

    public function store(VideoGalleryItemRequest $request)
    {
        $videoGalleriesItem = VideoGalleryItem::Create($request->validated());
        return response()->success($videoGalleriesItem);
    }


    public function update(VideoGalleryItemRequest $request,  $id)
    {
        $videoGalleriesItem = VideoGalleryItem::find($id);
        $videoGalleriesItem->update($request->validated());
        return response()->success( $videoGalleriesItem );
    }


    public function destroy( $ids )
    {
        if (is_string($ids)){
            $ids = explode(',',$ids) ;
        }

        $count = VideoGalleryItem::whereIn('id',$ids)->delete();

        return response()->success( $count . ' Gallery deleted' );
    }
}
