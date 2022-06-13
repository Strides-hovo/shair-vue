<?php

namespace App\Http\Controllers;

use App\Models\PhotoGalleriesItem;
use App\Http\Requests\StorePhotoGalleriesItemRequest;
use App\Http\Requests\UpdatePhotoGalleriesItemRequest;

class PhotoGalleriesItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorePhotoGalleriesItemRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePhotoGalleriesItemRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\PhotoGalleriesItem  $photoGalleriesItem
     * @return \Illuminate\Http\Response
     */
    public function show(PhotoGalleriesItem $photoGalleriesItem)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatePhotoGalleriesItemRequest  $request
     * @param  \App\Models\PhotoGalleriesItem  $photoGalleriesItem
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePhotoGalleriesItemRequest $request, PhotoGalleriesItem $photoGalleriesItem)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PhotoGalleriesItem  $photoGalleriesItem
     * @return \Illuminate\Http\Response
     */
    public function destroy(PhotoGalleriesItem $photoGalleriesItem)
    {
        //
    }
}
