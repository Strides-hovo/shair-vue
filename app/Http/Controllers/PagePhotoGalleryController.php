<?php

namespace App\Http\Controllers;

use App\Models\PagePhotoGallery;
use Illuminate\Http\Request;

class PagePhotoGalleryController extends Controller
{
    
    public function index()
    {
        return response()->success(PagePhotoGallery::with(['photoGalleries','language'])->get());
    }

 
    public function store(Request $request)
    {
       
    }

    
    public function show(PagePhotoGallery $pagePhotoGallery)
    {
        return response()->success($pagePhotoGallery->with(['photoGalleries','language']));
    }

  
    public function update(Request $request, PagePhotoGallery $pagePhotoGallery)
    {
        
    }

   
    public function destroy(PagePhotoGallery $pagePhotoGallery)
    {
       
    }
}
