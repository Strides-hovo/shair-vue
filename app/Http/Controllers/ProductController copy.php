<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductRequest;
use App\Models\Language;
use App\Models\Product;
use App\Models\ProductPhoto;
use App\Models\ProductSetting;
use App\Models\ProductTranslate;
use Illuminate\Http\Request;
use JetBrains\PhpStorm\NoReturn;

class ProductControllerCopy extends Controller
{

    public function index()
    {
        $id = Language::first()->id;
        // Product::setLanguageId(2);
        $products = Product::with(['translate'])->get();

        return response()->success( $products );
    }


    /** @noinspection PhpUndefinedMethodInspection */
    public function store(Request $request)
    {
        try {

            $languages = Language::where('status',true)->get();
            $product_data = self::setDates($request,'product');
            $product = Product::create($product_data);

            $languages->each(function ($lang) use ($request, $product){
                $request->merge(['language_id' => $lang->id]);
                $request->merge(['product_id' => $product->id]);
                $setting_data = self::setDates($request,'setting');
                ProductSetting::create($setting_data);
                $transition_data = self::setDates($request,'translate');
                ProductTranslate::create($transition_data);
            });

            return response()->success($product->refresh() );
        }
        catch (\Exception $e){
            return response()->error($e->getMessage());
        }

    }






    /**
     * @param Request $request
     * @param array $rules
     * @param array $messages
     * @return array
     * @throws \ErrorException
     */
    public static function customValidate(Request $request, array $rules, array &$messages = []): array
    {
        $messages['errors'] = '';
        try {
            return $request->validate($rules);
        }
        catch (\Exception $e){
            $messages['errors'] = $e->getMessage();
        }
        throw new \ErrorException($messages['errors']);
    }


    /**
     * @throws \ErrorException
     */
    private static function setDates(Request $request, $modelName): array
    {
        return match ($modelName) {
            'product' => self::customValidate($request, [
                'category_id' => 'required|exists:categories,id',
            ]),
            'setting' => self::customValidate($request, [
                'product_id' => 'required|exists:products,id',
                'language_id' => 'required|exists:languages,id',
                'Instruction_file' => 'nullable|string',
                'price_list' => 'nullable|boolean',
                'rent' => 'nullable|boolean',
                'guarantee' => 'nullable|boolean',
                'dimension' => 'nullable|boolean',
                'flag' => 'nullable|boolean',
            ]),
            'translate' => self::customValidate($request, [
                'product_id' => 'required|exists:products,id',
                'language_id' => 'required|exists:languages,id',
                'name' => 'required|string',
                'description' => 'nullable|string',
                'slug' => 'required|string',
                'advantage' => 'nullable|string',
                'flag_text' => 'nullable|string',
                'meta_title' => 'nullable|string',
                'meta_description' => 'nullable|string',
                'meta_keywords' => 'nullable|string',
            ]),
            'photo' => self::customValidate($request, [
                'image' => 'nullable|string',
                'sorting' => 'nullable|number',
                'by_default' => 'nullable|boolean',
            ]),
            'photo_translate' => self::customValidate($request, [
                'alt' => 'nullable|string',
                'name' => 'nullable|number',
                'title' => 'nullable|string',
            ]),
        };
    }




    public function update(Request $request, Product $product)
    {

          $translate = $request->validate([
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

        try {
            if ($request->has('photo')){
                $product =  $this->updateFile($request);
            }

            $product_data = $request->validate(['category_id' => 'nullable|exists:categories,id', 'slug' => 'nullable|string']);
            
            if($request->category_id !== $product->category_id || $request->slug !== $product->slug ){
                $product->update($product_data);
            }

            $product->translations()->update( $translate['translate'] );

            return response()->success($product->refresh());
        }
        catch (\Exception $e){
            return response()->error($e->getMessage());
        }

    }


    public function updateFile( Request $request )
    {

        $valid_data = $request->validate([
            'by_default' => 'nullable|boolean',
            'photo.image' => 'string',
            'sorting' => 'nullable|number'
        ]);
        //$valid_data = self::setDates($request,'photo');
        dd($valid_data);

        $productPhoto = ProductPhoto::find($request->photo['id']);
        $t = $productPhoto->update($valid_data);


        return $productPhoto;
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return response()->success('Product Deleted');
    }
}
