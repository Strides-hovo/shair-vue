<?php

namespace App\Http\Controllers;

use App\Models\PhotoGallery;
use App\Http\Requests\PhotoGalleryRequest;


class PhotoGalleryController extends Controller
{
    

    public function index()
    {
        return response()->success(PhotoGallery::all());
    }

  
    public function store(PhotoGalleryRequest $request)
    {
        $photoGallery = PhotoGallery::create($request->validated());
        return response()->success($photoGallery);
    }

    
    public function show(PhotoGallery $photoGallery)
    {
        return response()->success($photoGallery->load(['galleries']) );
    }

    
     
    public function update(PhotoGalleryRequest $request, PhotoGallery $photoGallery)
    {

        $photoGallery->update($request->validated());
        return response()->success($photoGallery);
    }

 
    public function destroy(PhotoGallery $photoGallery)
    {
        //
    }
}
