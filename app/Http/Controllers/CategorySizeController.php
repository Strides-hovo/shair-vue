<?php /** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Models\CategorySize;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Validator;

class CategorySizeController extends Controller
{


    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'width' => Rule::unique('category_sizes','width')->where(function ($query) use($request) {
                return $query
                    ->where('width', $request->input('width'))
                    ->where('height', $request->input('height'))
                    ->where('category_id', $request->input('category_id'));
            }),
            'height' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
        ]);

        try {
            $size = CategorySize::create($validator->validated());
            return response()->success($size->refresh());
        }
        catch (\Exception $e){
            return response()->error($e->getMessage(), 500, $validator->errors());
        }

    }


    public function update(Request $request, CategorySize $categorySize)
    {

        $validator = Validator::make($request->all(), [
            'width' => Rule::unique('category_sizes','width')->where(function ($query) use($categorySize, $request) {
                return $query
                    ->where('width', $request->input('width'))
                    ->where('height', $request->input('height'))
                    ->where('category_id', $request->input('category_id'));
            })->ignore($categorySize),
            'height' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|numeric',
            'by_default' => 'nullable|boolean',
        ]);

        try {
            if ($validator->validated()['by_default']) {
                CategorySize::whereNot('id', $categorySize->id)->update(['by_default' => false]);
            }
            $categorySize->update($validator->validated());

            return response()->success($categorySize);
        }
        catch (\Exception $e){
            return response()->error($e->getMessage(), 500, $validator->errors());
        }

    }


    public function destroy($ids)
    {
        if (is_string($ids)) {
            $ids = explode(',', $ids);
        }

        $count = CategorySize::whereIn('id', $ids)->delete();
        return response()->success($count . ' Sizes deleted');
    }

}
