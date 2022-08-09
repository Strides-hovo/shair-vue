<?php

namespace App\Http\Controllers;

use App\Models\ProductPhoto;
use App\Models\ProductPhotoTranslate;
use App\Services\ProductPhotoService;
use Illuminate\Http\Request;

class ProductPhotoController extends Controller
{

    public function store(Request $request, ProductPhotoService $service)
    {

        $photo = $service->store($request);
        return response()->success($photo->load('translations'));

    }




    public function update(Request $request, $id, ProductPhotoService $service)
    {

        $productPhoto = $service->update($request, $id);

        return response()->success($productPhoto->refresh());
    }



    public function destroy($ids)
    {
        if(is_string($ids)){
            $ids = explode(',',$ids);
        }

        ProductPhotoTranslate::whereIn('product_photo_id', $ids)->delete();
        $count = ProductPhoto::whereIn('id', $ids)->delete();
        
        return response()->success($count);
    }

}
