<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        $rules = [
            'language_id' => 'nullable|exists:languages,id',
            'name' => 'nullable|unique:categories,name,' . $this->id,
            'title' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
            'description' => 'nullable|string',
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|integer',
        ];

        if ($this->method() === 'POST'){
            $rules['language_id'] = 'required|exists:languages,id';
            $rules['name'] = 'required|unique:categories,name';
        }

        return $rules;
    }
}
