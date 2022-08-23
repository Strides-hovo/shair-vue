<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Product;
use App\Models\ProductTranslate;

class ProductController extends Controller
{

    public function index()
    {
        return response()->success( Product::withs()->get() );
    }



    public function store(ProductRequest $request)
    {
        
        try {
            $product = Product::create($request->validated());
            return response()->success($product->loads() );
        }
        catch (\Exception $e){
            return response()->error($e->getMessage());
        }

    }










    public function update(ProductRequest $request, Product $product)
    {

        try {
            $product->update($request->validated());
            $this->translate($product);
            Product::setLanguageId($request->language_id);
            return response()->success($product->loads());
        }
        catch (\Exception $e){
            return response()->error($e->getMessage());
        }

    }


    private function translate(Product $product):void
    {
        $request = request();
        $translate = $request->validate([
            'translate.slug' => 'nullable|string',
            'translate.meta_title' => 'nullable|string',
            'translate.meta_description' => 'nullable|string',
            'translate.meta_keywords' => 'nullable|string',

            'translate.short_description' => 'nullable|string',
            'translate.description' => 'nullable|string',
            'translate.name' => 'nullable|string',
            'translate.advantage' => 'nullable|string',
            'translate.flag_text' => 'nullable|string',

            'product_id' => 'nullable|exists:products,id',
            'language_id' => 'nullable|exists:languages,id',
        ]);

        $product->translations()->find($request['translate']['id'])->update( $translate['translate'] );
    }


    public function destroy($ids)
    {
        if(is_string($ids)){
            $ids = explode(',',$ids);
        }
        Product::whereIn('id',$ids)->delete();
        ProductTranslate::whereIn('product_id',$ids)->delete();

        return response()->success('Product Deleted');
    }
}
