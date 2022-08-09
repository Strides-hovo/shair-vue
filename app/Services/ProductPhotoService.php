<?php

namespace App\Services;

use App\Models\ProductPhoto;
use Illuminate\Http\Request;

class ProductPhotoService
{

    public function store(Request $request)
    {

        $photo_data = $request->validate([
            'name' => 'required|string',
            'image' => 'required|string',
            'product_id' => 'required|exists:products,id',
        ]);

        $photo = ProductPhoto::create($photo_data);

        $request->merge(['product_photo_id' => $photo->id]);

        $translate = $request->validate([
            'alt' => 'nullable|string',
            'title' => 'nullable|string',
            'language_id' => 'required|exists:languages,id',
            'product_photo_id' => 'required|exists:product_photos,id',
        ]);

        $photo->translations()->create($translate);
        return $photo;
    }


    public function update(Request $request, $id)
    {

        $productPhoto = ProductPhoto::find($id);

        if ($request->by_default > 0) {
            ProductPhoto::
            where('product_id', $productPhoto->product_id)
                ->where('id', '<>', $productPhoto->id)
                ->update(['by_default' => 0]);
        }

        if ($request->has('newName')) {
            $image = changeImageName($productPhoto->image, $request->name);
            $request->merge(['image' => $image]);
        }

        $photo_data = $request->validate([
            'by_default' => 'nullable|boolean',
            'image' => 'nullable|string',
            'sorting' => 'nullable|integer',
            'name' => 'nullable|string',
        ]);

        ProductPhoto::setLanguageId($request->translate['language_id']);
        $productPhoto->update($photo_data);

        if (!$productPhoto->refresh()->translate){
            $productPhoto->translate()->create($request->translate);
        }
        else{
            $productPhoto->translate()->update($request->translate);
        }


        return $productPhoto;
    }


}