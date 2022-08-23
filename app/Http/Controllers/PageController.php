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


    public function store(Request $request)
    {

    }

    public function update(Request $request,Page $page )
    {
        $data = $request->validate([
            'translate.slug' => 'nullable|string',
            'translate.meta_title' => 'nullable|string',
            'translate.meta_keywords' => 'nullable|string',
            'translate.meta_description' => 'nullable|string',
            'translate.language_id' => 'required|exists:languages,id',
        ]);
        Page::setLanguageId($request->translate['language_id']);
        if ($page->translate){
            $page->translate()->update($data['translate']);
        }
        else{
            $page->translate()->create($data['translate']);
        }
        return response()->success($page->refresh());
    }

}
