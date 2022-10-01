<?php

namespace App\Http\Requests;

use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class HomeRequest extends FormRequest
{
    use FailedValidation;

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'main_video' => 'nullable|string',
            'video'     => 'nullable|string',
            'brands'     => 'nullable|array',
            'abouts'     => 'nullable|array',
            'icon_link'     => 'nullable|string',
            'about_link'     => 'nullable|string',
        ];
    }
}
