<?php
/** @noinspection PhpUnhandledExceptionInspection */
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Models\ProductSize;
use App\Traits\CustomValidate;
use Illuminate\Http\Request;

class ProductSizeController extends Controller
{

    use CustomValidate;



    public function updateOrCreate(Request $request)
    {
        $data = self::setDates($request,'product_size');
        $size = ProductSize::updateOrCreate(
            ['product_id' => $data['product_id'],'height' => $data['height']],
            $data);
        return response()->success($size);
    }
}
