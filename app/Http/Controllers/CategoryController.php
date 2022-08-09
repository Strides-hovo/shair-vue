<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Exports\CategoryExport;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

class CategoryController extends Controller
{

    public function index()
    {
        return response()->success(Category::withs()->get());
    }


    public function store(CategoryRequest $request)
    {
        try {
            $category = Category::create($request->validated());
            Category::setLanguageId($request->language_id);
            return response()->success($category->loads());
        } catch (\Exception $e) {
            return response()->error($e->getMessage());
        }
    }


    public function update(CategoryRequest $request, Category $category)
    {
        $category->update($request->validated());
        if ($request->has('translate')) {
            $this->translate($category);
        }

        return response()->success($category->loads());
    }


    public function translate(Category $category): void
    {
        $request = request();
        $translate = $request->validate([
            'translate.meta_title' => 'nullable|string',
            'translate.meta_description' => 'nullable|string',
            'translate.meta_keywords' => 'nullable|string',

            'translate.name' => 'nullable|string',
            'translate.title' => 'nullable|string',
            'translate.category_id' => 'nullable|exists:products,id',
            'translate.language_id' => 'nullable|exists:languages,id',
        ]);

        $category->translations()->updateOrCreate(['language_id' => $request['translate']['language_id']], $translate['translate']);

    }


    public function destroy(Category $category)
    {

        try {
            $category->delete();
            return response()->success('Category Deleted');
        }
        catch (\ErrorException $e) {
            return response()->error($e->getMessage());
        }

    }


    public function export(): \Symfony\Component\HttpFoundation\BinaryFileResponse
    {
        return Excel::download(new CategoryExport, 'categories.xlsx');
    }

}
