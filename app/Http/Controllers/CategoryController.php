<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Exports\CategoryExport;
use App\Traits\CustomValidate;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class CategoryController extends Controller
{

    use CustomValidate;

    public function index()
    {
        $frontend = request('frontend') ?? false;
        return response()->success(Category::withs($frontend)->get());
    }


    public function store(CategoryRequest $request)
    {
        try {
            $category = Category::create($request->validated());
            if ($request->has('translate')) {
                merge_translate($request, $category, 'category_id');
                $this->translate($category);
            }

            return response()->success($category->loads());
        }
        catch (\Exception $e) {
            return response()->error($e->getMessage());
        }
    }


    public function update(CategoryRequest $request, Category $category)
    {
        $category->update($request->validated());
        if ($request->has('translate')) {
            merge_translate($request, $category, 'category_id');
            $this->translate($category);
        }

        return response()->success($category->loads());
    }


    /**
     * @throws ValidationException
     */
    public function translate(Category $category): void
    {
        $request = request();
        $translate = self::merger_translate($request, $category, 'category_id','category_translate');

        $category->translations()->updateOrCreate(
            [
                'language_id' => $request['translate']['language_id'],
                'category_id' => $request['translate']['category_id']
            ], $translate['translate']);

    }


    public function destroy(Category $category)
    {

        try {
            $category->delete();
            return response()->success('Category Deleted');
        } catch (\ErrorException $e) {
            return response()->error($e->getMessage());
        }

    }


    public function export(): BinaryFileResponse
    {
        return Excel::download(new CategoryExport, 'categories.xlsx');
    }

}
