<?php

namespace App\Http\Requests;

use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
{
    use FailedValidation;


    public function authorize(): bool
    {
        return true;
    }


    public function rules(): array
    {
        return [
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|integer',
        ];
    }
}
