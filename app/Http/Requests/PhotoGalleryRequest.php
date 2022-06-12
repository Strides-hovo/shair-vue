<?php

namespace App\Http\Requests;

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
        return [
            'page_photo_gallery_id' => 'nullable|exists:photo_page_galeries,id', 
            'status' => 'nullable|boolean', 
            'sorting' => 'nullable|integer', 
            'title' => 'nullable|string', 
            'image' => 'nullable|string', 
            'image_name' => 'nullable|string', 
            'image_alt' => 'nullable|string', 
            'image_title' => 'nullable|string'
        ];
    }
}
