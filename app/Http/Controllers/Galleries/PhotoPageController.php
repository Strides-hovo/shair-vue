<?php

namespace App\Http\Controllers\Galleries;

use App\Http\Requests\PhotoPageRequest;
use App\Models\PhotoPage;
use App\Http\Controllers\Controller;

class PhotoPageController extends Controller
{
    
    public function index()
    {
        return response()->success(PhotoPage::withs()->get());
    }

   
    public function store(PhotoPageRequest $request)
    {

        $photoPage = PhotoPage::create($request->validated());

        PhotoPage::setLanguageId($request->translate['language_id']);

        $this->translate($photoPage);

        return response()->success($photoPage->loads());
    }



    public function translate(PhotoPage $photoPage)
    {

        $request = request();
        $translate = $request->input('translate');
        $translate = array_merge($translate, ['photo_page_id' => $photoPage->id]);
        $request->merge(['translate' => $translate]);

        try {
            $translate = $request->validate([
                'translate.slug' => 'nullable|string',
                'translate.name' => 'required|string',
                'translate.description' => 'nullable|string',

                'translate.meta_description' => 'nullable|string',
                'translate.meta_title' => 'nullable|string',
                'translate.meta_keywords' => 'nullable|string',

                'translate.photo_page_id' => 'required|exists:photo_pages,id',
                'translate.language_id' => 'required|exists:languages,id',
            ]);

            if (!$photoPage->translate){
                $photoPage->translate()->create($translate['translate']);
            }
            else{
                $photoPage->translate()->update($translate['translate']);
            }

        }
        catch (\Exception $e){
           return response()->error($e->getMessage());
        }

    }




    public function update(PhotoPageRequest $request, PhotoPage $photoPage)
    {
        $photoPage->update($request->validated());

        if ($request->has('translate')){
            PhotoPage::setLanguageId($request->translate['language_id']);
            $this->translate($photoPage);
        }

        return response()->success($photoPage->loads());
    }

   
    public function destroy(PhotoPage $photoPage)
    {
        $photoPage->delete();
        return response()->success('photo-Page deleted');
    }


}
