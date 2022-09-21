<?php /** @noinspection PhpUndefinedFieldInspection */

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

trait CustomValidate
{

    /**
     * @param Request $request
     * @param array $rules
     * @return array
     * @throws ValidationException
     */
    protected static function customValidate(Request $request, array $rules): array
    {

        try {
            return $request->validate($rules);
        }
        catch (\Exception $e){
            $validator = Validator::make($request->all(), $rules);
            $errors = response()->json([
                'status' => 'Error',
                'message' => 'Ops! Some errors occurred',
                'errors' => $validator->errors()
            ], 400);

            throw new ValidationException($validator,$errors );
        }

    }


    public static function ValidDates(array $dates, array $rules):array
    {

        $validator = Validator::make($dates, $rules);

        $errors = response()->json([
            'status' => 'Error',
            'message' => 'Ops! Some errors occurred',
            'errors' => $validator->errors()
        ], 400);

        try {
            return $validator->validate();
        }catch (\Exception $e){
            throw new ValidationException($validator,$errors );
        }
    }



    /**
     * @param Request $request
     * @param $modelName
     * @return array
     * @throws ValidationException
     */
    protected static function setDates(Request $request, $modelName) : array
    {
        return match ($modelName) {
            'photo' => self::customValidate($request, [
                'name' => 'required|string',
                'image' => 'required|string',
                'product_id' => 'required|exists:products,id',
                'sorting' => 'nullable|integer',
                'by_default' => 'nullable|boolean',
            ]),
            'photo_translate' => self::customValidate($request, [
                'translate.alt' => 'nullable|string',
                'translate.title' => 'nullable|string',
                'translate.language_id' => 'required|exists:languages,id',
                'translate.product_photo_id' => 'required|exists:product_photos,id',
            ]),
            'product_translate' => array_merge_recursive(meta_translate($request), self::customValidate($request, [
                'translate.short_description' => 'nullable|string',
                'translate.description' => 'nullable|string',
                'translate.name' => 'nullable|string',
                'translate.advantage' => 'nullable|string',
                'translate.flag_text' => 'nullable|string',
                'translate.product_id' => 'nullable|exists:products,id',
            ])),
            'product_setting' => meta_translate($request),
            'product_size' =>  self::customValidate($request, [
                'product_id' => 'required|exists:products,id',
                'category_size_id' => 'required|exists:category_sizes,id',
                'status' => 'nullable|boolean',
                'sku' => 'required|alpha_num',
                'price' => 'required|integer',
                'invoice_code' => 'required|integer',
                'delivery_sale' => 'required|integer',
                'delivery_rent' => 'required|integer',
            ]),
            'category_translate' =>  self::customValidate($request, [
                'translate.name' => 'required|string',
                'translate.category_id' => 'required|exists:categories,id',
                'translate.language_id' => 'required|exists:languages,id',
                'translate.footer_text' => 'nullable|string',
                'translate.meta_description' => 'nullable|string',
                'translate.meta_title' => 'nullable|string',
            ]),
            'order_details' =>  self::customValidate($request, [
                'details.*.product_id' => 'required|exists:products,id',
                'details.*.product_size_id' => 'required|exists:product_sizes,id',
                'details.*.quantity' => 'required|numeric',
                'details.*.price' => 'required|numeric',
                'details.*.height' => 'required|string',
                'details.*.width' => 'required|numeric',
                'details.*.discount' => 'nullable|numeric',
            ]),


        };
    }


    /**
     * @param Request $request
     * @param Model $model
     * @param string $key
     * @param string $valid_key
     * @return array
     * @throws ValidationException
     */
    public static function merger_translate(Request $request, Model $model, string $key, string $valid_key): array
    {
        $translate = $request->input('translate');

        $translate = array_merge($translate, [$key => $model->id]);

        $request->merge(['translate' => $translate]);

        return self::setDates($request,$valid_key);
    }

}