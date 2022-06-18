<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhotoGalleriesItemRequest;
use App\Http\Requests\UpdatePhotoGalleriesItemRequest;
use App\Models\PhotoGalleriesItem;


class PhotoGalleriesItemController extends Controller
{


    public function store(PhotoGalleriesItemRequest $request)
    {

        $PhotoGalleriesItem = PhotoGalleriesItem::Create($request->validated());
        return response()->success($PhotoGalleriesItem);
    }


    public function update(PhotoGalleriesItemRequest $request,  $id)
    {
        $photoGalleriesItem = PhotoGalleriesItem::find($id);
        $photoGalleriesItem->update($request->validated());
        return response()->success( $photoGalleriesItem );
    }


    public function destroy(PhotoGalleriesItem $photoGalleriesItem)
    {
        $photoGalleriesItem->delete();
        return response()->success( 'deleted' );
    }
}
