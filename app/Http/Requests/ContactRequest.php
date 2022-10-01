<?php

namespace App\Http\Requests;

use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{

    use FailedValidation;
    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'youtube' => 'required|string',
            'whatsapp' => 'required|string',
            'instagram' => 'required|string',
            'twitter' => 'required|string',
            'facebook' => 'required|string',
        ];
    }
}
