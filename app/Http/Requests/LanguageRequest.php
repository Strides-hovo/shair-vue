<?php

namespace App\Http\Requests;


use App\Traits\FailedValidation;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class LanguageRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    use FailedValidation;

    public function rules()
    {

        if ($this->method() == 'POST') {

            $rules = [
                'code' => 'required|unique:languages',
                'name' => 'required|unique:languages',
                'dir' => 'required|in:ltr,rtl',
                'status' => 'boolean|nullable',
            ];
        } else {
            $rules = [
                'code' => 'nullable|unique:languages,code,' . $this->id,
                'name' => 'nullable|unique:languages,name,' . $this->id,
                'dir' => 'nullable|in:ltr,rtl',
                'status' => 'boolean|nullable',
            ];
        }

        return $rules;
    }



}
