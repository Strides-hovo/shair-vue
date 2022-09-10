<?php
/** @noinspection PhpSameParameterValueInspection */
/** @noinspection PhpMissingReturnTypeInspection */
/** @noinspection PhpPossiblePolymorphicInvocationInspection */
/** @noinspection PhpUndefinedFieldInspection */
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Services;

use App\Models\ProductPhoto;
use App\Traits\CustomValidate;
use Illuminate\Http\Request;

class ProductService
{

    use CustomValidate;

    /**
     * @throws \ErrorException
     */
    public function store(Request $request)
    {

        $photo_data = self::setDates($request,'photo');
        $photo = ProductPhoto::create($photo_data);

        if ($request->has('translate')){

            $translate = self::merger_translate($request,$photo,'product_photo_id','photo_translate');

            $photo->translations()->create($translate['translate']);
        }

        return $photo;
    }




    /**
     * @throws \ErrorException
     */
    public function update(Request $request,ProductPhoto $product_photo)
    {

        if ($request->by_default > 0) {
            ProductPhoto::where('product_id', $product_photo->product_id)
                ->where('id', '<>', $product_photo->id)
                ->update(['by_default' => 0]);
        }

        if ($request->has('newName')) {
            $image = changeImageName($product_photo->image, $request->name);
            $request->merge(['image' => $image]);
        }

        $photo_data = self::merger_translate($request,$product_photo,'photo_id','photo');
        $product_photo->update($photo_data);

        if ($request->has('translate')){
            $translate = self::merger_translate($request, $product_photo,'product_photo_id','photo_translate');

            $product_photo->translations()->updateOrCreate([
                'product_photo_id' => $product_photo->id, 'language_id' => $translate['translate']['language_id']],
                $translate['translate']
            );
        }


        return $product_photo;
    }





















}