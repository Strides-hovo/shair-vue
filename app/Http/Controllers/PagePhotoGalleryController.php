<?php

namespace App\Http\Controllers;

use App\Models\PagePhotoGallery;
use App\Models\PhotoGallery;
use App\Models\PhotoGalleriesItem;
use Illuminate\Http\Request;
use App\Http\Resources\PagePhotoJson;
class PagePhotoGalleryController extends Controller
{

    const SELECT_FIELDS = [
      'page_photo_galleries.id',
      'language_id',

      'photo_galleries.title as name',
      'photo_galleries.status as gallery_status',
      'photo_galleries.sorting as gallery_sorting',

      'photo_galleries_items.status as item_status',
      'photo_galleries_items.sorting as item_sorting',
      'image',
      'image_name',
      'image_alt',
      'image_title'
    ];

    public function index()
    {

        //$r1 = PagePhotoGallery::all();
        // $result = PagePhotoGallery
        // ::leftJoin('photo_galleries','photo_galleries.page_photo_gallery_id','=','page_photo_galleries.id')
        // ->leftJoin('photo_galleries_items','photo_gallery_id','=','photo_galleries.id')
        // ->leftJoin('languages','languages.id','=','page_photo_galleries.language_id')
        // ->select(self::SELECT_FIELDS)
        // ->get();


        // $r1 = PagePhotoGallery
        // ::leftJoin('languages','languages.id','=','page_photo_galleries.language_id');
        //
        // $r2 = PhotoGallery::leftJoin('languages','languages.id','=','page_photo_galleries.language_id')
        // ->leftJoin('photo_galleries','photo_galleries.page_photo_gallery_id','=','page_photo_galleries.id');
        //
        // $r3 = PhotoGalleriesItem
        // ::leftJoin('photo_galleries','photo_galleries.page_photo_gallery_id','=','page_photo_galleries.id')
        // ->leftJoin('photo_galleries_items','photo_gallery_id','=','photo_galleries.id')
        //
        // ->union($r1,$r2)
        //
        //
        // //->select(self::SELECT_FIELDS)
        // ->get();


        //$t = response()->success(PagePhotoGallery::with(['photoGalleries','language'])->get());
        //return response()->success($r3) ;
        // return (new PagePhotoJson($result));
        //return response()->success(PagePhotoGallery::with(['language','photoGalleries','photoGalleries.galleries'])->get());
        // $p = PagePhotoGallery::with(['language','photoGalleries','photoGalleries.galleries'])->get();
        // return response()->success($p);
        
        
        $t = PagePhotoGallery::all()->load(['language','photoGalleries','photoGalleries.galleries']);

        return response()->success($t);


        //return response()->success(PagePhotoGallery::with(['language','photoGalleries','photoGalleries.galleries'])->get());

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
