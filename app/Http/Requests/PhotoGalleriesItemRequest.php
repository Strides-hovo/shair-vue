<?php

namespace App\Http\Requests;

use App\Models\PhotoGalleryItem;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class PhotoGalleriesItemRequest extends FormRequest
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
            'image_alt' => 'nullable|string',
            'image_title' => 'nullable|string',
            'image_name' => 'nullable|string',
            'sorting' => 'nullable|integer',
            'status' => 'nullable|boolean',
            'photo_gallery_id' => 'nullable|exists:photo_galleries,id',
            'image' => 'required|string'
        ];
    }


    public function prepareForValidation(): void
    {
        StrPrepareForValidation($this);
    }


}