<?php
/** @noinspection PhpParamsInspection */
/** @noinspection PhpUndefinedFieldInspection */
/** @noinspection PhpDynamicAsStaticMethodCallInspection */
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Exports\ProductExport;
use App\Exports\ProductsExport;
use App\Http\Requests\ProductRequest;
use App\Imports\ProductImport;
use App\Models\Product;
use App\Models\ProductAdditional;
use App\Models\ProductSize;
use App\Models\ProductTranslate;
use App\Services\ProductService;
use App\Traits\CustomValidate;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;

class ProductController extends Controller
{

    use CustomValidate;

    public function index()
    {
        return response()->success(Product::withs()->get());
    }

    public function show(Product $product)
    {
        return $product->load('sizes');
    }

    /**
     * @param ProductRequest $request
     * @return mixed
     * @throws ValidationException
     */
    public function store(ProductRequest $request): JsonResponse
    {

        $product = Product::create($request->validated());
        if ($request->has('translate')) {
            $this->translate($request, $product);
        }

        return response()->success($product->loads());
    }


    public function status(bool $status)
    {
        Product::all()->each->update(['status' => $status]);
        return response()->success(Product::withs()->get());
    }


    /**
     * @throws ValidationException
     */
    public function copy(ProductRequest $request, ProductService $service)
    {
        $product = Product::create($request->validated());

        if ($request->has('translate')) {
            $this->translate($request, $product);
        }

        if ($request->has('photos')) {
            foreach ($request->photos as $photo) {
                ProductPhotoController::store($request->replace($photo)->merge(['product_id' => $product->id]), $service);
            }
        }

        return response()->success($product->loads());
    }


    /**
     * @param ProductRequest $request
     * @param Product $product
     * @return mixed
     * @throws ValidationException
     */
    public function update(ProductRequest $request, Product $product): JsonResponse
    {

        if ($request->category_id !== $product->category_id) {
            ProductSize::where('product_id', $product->id)->delete();
        }

        $product->update($request->validated());

        if ($request->has('translate')) {
            $this->translate($request, $product);
        }

        if ($request->has('sizes')) {
            $this->sizes($request, $product);
        }


        return response()->success($product->loads());

    }


    public function updateAdditions(Request $request, Product $product )
    {
        $additions = filter_product_additional('pivot', $request->additions);
        ProductAdditional::where('product_id', $product->id)->delete();
        ProductAdditional::upsert($additions, ['product_id', 'additional_id']);
        return response()->success($product->loads());
    }


    public function deleteAdditions(Product $product, $ids )
    {
        
        if (is_string($ids)){
            $ids = explode(',',$ids);
        }
        ProductAdditional::where('product_id',$product->id)->whereIn('additional_id', $ids)->delete();
        return response()->success($product->loads());

    }


    public function updateSetting(Request $request, Product $product )
    {

    }

    /**
     * @throws ValidationException
     */
    private function translate(Request $request, Product $product)
    {
        $translate = self::merger_translate($request, $product, 'product_id', 'product_translate');
        $product->translations()->updateOrCreate([
            'product_id' => $product->id, 'language_id' => $translate['translate']['language_id']],
            $translate['translate']
        );
    }



    /**
     * @throws ValidationException
     */
    private function sizes(Request $request, Product $product)
    {
        $dates = [];
        foreach ($request->sizes as $size) {
            $data = (new Request($size));
            $dates[] = self::setDates($data, 'product_size');
        }

        ProductSize::upsert($dates, ["product_id", "category_size_id"]);

    }


    public function destroy($ids)
    {
        if (is_string($ids)) {
            $ids = explode(',', $ids);
        }
        Product::whereIn('id', $ids)->delete();
        ProductTranslate::whereIn('product_id', $ids)->delete();

        return response()->success('Product Deleted');
    }

    //: \Symfony\Component\HttpFoundation\BinaryFileResponse
    public function export( int|string $id )
    {
        return Excel::download(new ProductExport($id), 'products.xlsx')
            //->headers('Content-type', 'application/vnd.ms-excel')
            ;
    }


    public function import(Request $request)
    {

       $response = Excel::import(new ProductImport, $request->file('file') );

        return response()->success($response);
    }

}
