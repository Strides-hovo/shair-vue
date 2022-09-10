<?php
/** @noinspection PhpPossiblePolymorphicInvocationInspection */
/** @noinspection PhpUndefinedFieldInspection */
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{

    public function index()
    {
        return response()->success(Page::withs()->get());
    }

    public function firstOrCreate(Request $request)
    {
        
        $data = $request->validate([
            'name' => 'required|string',
            'parent_id' => 'nullable|exists:pages,id',
        ]);

        $page = Page::firstOrCreate([
            'name' => $request->name,
        ], $data);

        if ($request->has('translate')) {
            $translate = $request->input('translate');
            $translate = array_merge($translate, ['page_id' => $page->id]);
            $request->merge(['translate' => $translate]);
        } 
        else {
            return response()->success($page);
        }
        $this->translate($request, $page);
        return response()->success($page->loads()->refresh());
    }


    public function translate(Request $request, Page $page)
    {

        $translate = array_merge_recursive($request->validate([
            'translate.page_id' => 'required|exists:pages,id',
        ]), meta_translate($request));

        $page->translations()->updateOrCreate([
            'language_id' => $request['translate']['language_id'],
            'page_id' => $request['translate']['page_id']],
            $request['translate']
        );

    }

}
