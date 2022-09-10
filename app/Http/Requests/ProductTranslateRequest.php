<?php

namespace App\Http\Requests;

use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class ProductTranslateRequest extends FormRequest
{

    use FailedValidation;

    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'name' => 'required|string',
            'short_description' => 'required|string',
            'description' => 'required|string',
            'advantage' => 'required|string',
            'flag_text' => 'nullable|string',
        ];
    }
}
