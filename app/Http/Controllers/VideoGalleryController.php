<?php

namespace App\Http\Controllers;


use App\Http\Requests\VideoGalleryRequest;
use App\Models\VideoGallery;

class VideoGalleryController extends Controller
{
    public function index()
    {
        return response()->success(VideoGallery::with(['page','galleries'])->get());
    }


    public function store(VideoGalleryRequest $request)
    {

        $videoGallery = VideoGallery::create($request->validated());

        return response()->success($videoGallery->load('page'));
    }


    public function show(VideoGallery $videoGallery)
    {
        return response()->success($videoGallery->load(['galleries']));
    }


    public function update(VideoGalleryRequest $request, VideoGallery $videoGallery)
    {

        $videoGallery->update($request->validated());
        debug($videoGallery);
        return response()->success($videoGallery);
    }


    public function destroy(VideoGallery $videoGallery)
    {
        if ($videoGallery->galleries()) {
            $videoGallery->galleries->each(fn($g) => $g->delete());
        }
        $videoGallery->delete();
        return response()->success('gallery deleted');
    }
}
