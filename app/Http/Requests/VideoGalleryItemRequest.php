<?php

namespace App\Http\Requests;


use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class VideoGalleryItemRequest extends FormRequest
{
    use FailedValidation;

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



}
