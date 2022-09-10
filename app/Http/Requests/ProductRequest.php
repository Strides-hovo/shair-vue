<?php

namespace App\Http\Requests;


use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;
use JetBrains\PhpStorm\ArrayShape;


class ProductRequest extends FormRequest
{
    use FailedValidation;

    public function authorize(): bool
    {
        return true;
    }


    #[ArrayShape(['category_id' => "string", 'Instruction_file' => "string", 'status' => "string",
        'flag' => "string", 'rent' => "string", 'sale' => "string", 'guarantee' => "string", 'dimension' => "string"])]
    public function rules(): array
    {
        return [
            'category_id' => 'nullable|exists:categories,id',
            'Instruction_file' => 'nullable|string',
            'status' => 'nullable|boolean',
            'flag' => 'nullable|string|in:noting,stock,sale,new',
            'rent' => 'nullable|boolean',
            'sale' => 'nullable|boolean',
            'guarantee' => 'nullable|boolean',
            'dimension' => 'nullable|boolean',
        ];
    }


}
