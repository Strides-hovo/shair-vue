<?php
/** @noinspection PhpPossiblePolymorphicInvocationInspection */
/** @noinspection PhpUndefinedFieldInspection */
/** @noinspection PhpUndefinedMethodInspection */

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class PageController extends Controller
{

    public function index()
    {
        return response()->success(Page::withs()->get());
    }

    /**
     * @throws ValidationException
     */
    public function firstOrCreate(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'parent_id' => 'nullable|exists:pages,id',
        ]);

        if ($validator->fails()){
            throw_validate($validator);
        }
        $page = Page::firstOrCreate([
            'name' => $request->name,
        ], $validator->validated());


        if ($request->has('translate')) {
            $translate = $request->input('translate');
            $translate = array_merge($translate, ['page_id' => $page->id]);
            $request->merge(['translate' => $translate]);
            $this->translate($request, $page);
        } 
        else {
            return response()->success($page);
        }

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
