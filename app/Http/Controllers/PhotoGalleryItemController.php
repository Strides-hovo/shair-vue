<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhotoGalleriesItemRequest;
use App\Models\PhotoGalleryItem;
use Illuminate\Http\JsonResponse;


class PhotoGalleryItemController extends Controller
{


    public function store(PhotoGalleriesItemRequest $request): JsonResponse
    {

        $PhotoGalleriesItem = PhotoGalleryItem::create($request->validated());
        $PhotoGalleriesItem->status = 1;

        return response()->success($PhotoGalleriesItem);

    }


    public function update(PhotoGalleriesItemRequest $request,  $id) : JsonResponse
    {
        $photoGalleriesItem = PhotoGalleryItem::find($id);
        $photoGalleriesItem->update($request->validated());
        return response()->success( $photoGalleriesItem );
    }


    public function destroy( $ids ): JsonResponse
    {
        if (is_string($ids)){
            $ids = explode(',',$ids) ;
        }

       $count = PhotoGalleryItem::whereIn('id',$ids)->delete();

        return response()->success($count . ' Gallery deleted' );
    }
}
