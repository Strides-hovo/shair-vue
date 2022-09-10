<?php /** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Models\ProductPhoto;
use App\Models\ProductPhotoTranslate;
use App\Services\ProductService;

use Illuminate\Http\Request;


class ProductPhotoController extends Controller
{



    public static function store(Request $request, ProductService $service)
    {
        $photo = $service->store($request);
        return response()->success($photo->load('translations'));
    }




    public function update(Request $request,ProductPhoto $product_photo, ProductService $service)
    {

        $productPhoto = $service->update($request, $product_photo);
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
