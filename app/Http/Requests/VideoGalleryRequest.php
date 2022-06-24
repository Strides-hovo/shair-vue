<?php

namespace App\Http\Requests;

use App\Models\PageVideoGallery;
use Illuminate\Foundation\Http\FormRequest;

class VideoGalleryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $rules = [
            'page_video_gallery_id' => 'nullable|exists:page_video_galleries,id',
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|integer',
            'title' => 'nullable|string',
            'video' => 'nullable|string',
            'video_name' => 'nullable|string',
            'video_alt' => 'nullable|string',
            'video_title' => 'nullable|string',
            'slug' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string'
        ];
        if ($this->method() === 'POST'){
            $rules['slug'] = 'required|string';
            $rules['meta_title'] = 'required|string';

        }
        return $rules;
    }

    public function prepareForValidation() :void
    {
        if ($this->has('language_id')){
            $page = PageVideoGallery::firstOrCreate(['language_id' => $this->language_id],['language_id' => $this->language_id]);

            $this->merge(['page_video_gallery_id' => $page->id]);
        }

    }
}
