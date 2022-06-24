<?php

namespace App\Http\Controllers;

use App\Http\Requests\PhotoGalleryRequest;
use App\Models\PhotoGallery;


class PhotoGalleryController extends Controller
{
    

    public function index()
    {
        return response()->success(PhotoGallery::with(['page','galleries'])->get());
    }

  
    public function store(PhotoGalleryRequest $request)
    {

        $photoGallery = PhotoGallery::create($request->validated());

        return response()->success($photoGallery->load('page'));

    }

    
    public function show(PhotoGallery $photoGallery)
    {
        return response()->success($photoGallery->load(['galleries']) );
    }

    
     
    public function update(PhotoGalleryRequest $request, PhotoGallery $photoGallery)
    {

        $photoGallery->update($request->validated());
        debug($photoGallery);
        return response()->success($photoGallery);
    }

 
    public function destroy(PhotoGallery $photoGallery)
    {
        if ($photoGallery->galleries()){
            $photoGallery->galleries->each(fn($g) => $g->delete());
        }
        $photoGallery->delete();
        return response()->success('gallery deleted');
    }
}
