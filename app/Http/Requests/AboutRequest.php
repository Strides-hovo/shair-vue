<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class AboutRequest extends FormRequest
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

           /*$rules = [
            '' => 'required|exists:languages,id',
            'title' => 'required|string',
            'content' => 'required|string',
            'slug' => 'nullable|string',
            'meta_title' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
            'meta_description' => 'nullable|string',
        ];*/


            $rules = [
                'language_id' => 'nullable|exists:languages,id',
                'title' => 'nullable',
                'content' => 'nullable',
                'slug' => 'nullable|string',
                'meta_title' => 'nullable|string',
                'meta_keywords' => 'nullable|string',
                'meta_description' => 'nullable|string',
            ]; 


        return $rules;
    }

    public function failedValidation(Validator $validator)
    {
        return $validator->errors();
    }
}
