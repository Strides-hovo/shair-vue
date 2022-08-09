<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;

class PhotoPageRequest extends FormRequest
{

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
