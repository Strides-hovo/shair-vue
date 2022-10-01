<?php
/** @noinspection PhpUndefinedMethodInspection */
/** @noinspection PhpMissingReturnTypeInspection */


namespace App\Services;

use App\Models\Page;
use Illuminate\Http\Request;

class Menus{

    const MENUS = [
        'Home','PriceList','About','ProductsRent','Galleries','PhotoGallery',
        'VideoGallery','Certificate','Products','Articles','Contact','Concourse'
    ];

    public function menu()
    {
        return response()
            ->success(Page::with(['translations','children.translations'])
                ->whereIn('name',self::MENUS)
            ->whereNull('parent_id')->get());
    }


    public function getBreadCrumbs(Request $request)
    {
        $grumps = [];
        if ($request->has('names')){
            Page::whereIn('name',$request->input('names'))
                ->with('translations',function ($tr) use($request) {
                    $tr->where('language_id',$request->input('language_id'))->select(['slug','page_id','language_id']);
                })
                ->get()
                ->each(function ($page,$key) use (&$grumps){
                    if ($page->translations){
                        $grumps[$key]['name'] = $page->name;
                        $grumps[$key]['slug'] = $page->translations[0]['slug'];
                    }

                });
        }
        return response()->success($grumps);
    }


    

}
