<?php

namespace App\Http\Controllers\Galleries;

use App\Http\Requests\VideoPageRequest;
use App\Models\VideoPage;
use App\Http\Controllers\Controller;

class VideoPageController extends Controller
{
    
    public function index()
    {
        return response()->success(VideoPage::withs()->get());
    }

   
    public function store(VideoPageRequest $request)
    {

        $videoPage = VideoPage::create($request->validated());

        VideoPage::setLanguageId($request->translate['language_id']);

        $this->translate($videoPage);

        return response()->success($videoPage->loads());
    }



    public function translate(VideoPage $videoPage)
    {

        $request = request();
        $translate = $request->input('translate');
        $translate = array_merge($translate, ['photo_page_id' => $videoPage->id]);
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

            if (!$videoPage->translate){
                $videoPage->translate()->create($translate['translate']);
            }
            else{
                $videoPage->translate()->update($translate['translate']);
            }

        }
        catch (\Exception $e){
           return response()->error($e->getMessage());
        }

    }




    public function update(VideoPageRequest $request, VideoPage $videoPage)
    {
        $videoPage->update($request->validated());

        if ($request->has('translate')){
            VideoPage::setLanguageId($request->translate['language_id']);
            $this->translate($videoPage);
        }

        return response()->success($videoPage->loads());
    }

   
    public function destroy(VideoPage $videoPage)
    {
        $videoPage->delete();
        return response()->success('photo-Page deleted');
    }


}
