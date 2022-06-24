<?php

namespace App\Http\Requests;

use App\Models\PagePhotoGallery;
use Illuminate\Foundation\Http\FormRequest;

class PhotoGalleryRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $rules = [
            'page_photo_gallery_id' => 'nullable|exists:page_photo_galleries,id',
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|integer',
            'title' => 'nullable|string',
            'image' => 'nullable|string',
            'image_name' => 'nullable|string',
            'image_alt' => 'nullable|string',
            'image_title' => 'nullable|string',
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

            $page = PagePhotoGallery::firstOrCreate(['language_id' => $this->language_id],['language_id' => $this->language_id]);

            $this->merge(['page_photo_gallery_id' => $page->id]);
        }

    }
}
