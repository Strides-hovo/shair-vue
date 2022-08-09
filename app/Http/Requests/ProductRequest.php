<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{

    public function authorize():bool
    {
        return true;
    }


    public function rules()
    {

            return [
                'category_id' => 'required|exists:categories,id',
                'Instruction_file' => 'nullable|string',
                'status' => 'nullable|boolean',
                'flag' => 'nullable|boolean',
                'rent' => 'nullable|boolean',
                'sale' => 'nullable|boolean',
                'guarantee' => 'nullable|boolean',
                'dimension' => 'nullable|boolean',
            ];

    }
}
