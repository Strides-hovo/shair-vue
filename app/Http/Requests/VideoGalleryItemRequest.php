<?php

namespace App\Http\Requests;

use App\Models\VideoGalleryItem;
use Illuminate\Foundation\Http\FormRequest;

class VideoGalleryItemRequest extends FormRequest
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

        return [
            'video_alt' => 'nullable|string',
            'video_title' => 'nullable|string',
            'video_name' => 'nullable|string',
            'sorting' => 'nullable|integer',
            'status' => 'nullable|boolean',
            'video_gallery_id' => 'nullable|exists:video_galleries,id',
            'video' => 'required|string'
        ];
    }


    public function prepareForValidation(): void
    {
        StrPrepareForValidation($this,VideoGalleryItem::class,'video');
    }
}
