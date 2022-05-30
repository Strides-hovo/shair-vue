<?php

namespace App\Http\Requests;


use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class LanguageRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {

        if($this->method() == 'POST'){

            $rules = [
                'code' => 'required|unique:languages',
                'name' => 'required|unique:languages',
                'dir' => 'required|in:ltr,rtl',
                'status' => 'boolean|nullable',
            ];
        }
        else{
            $rules = [
                'code' => 'nullable|unique:languages,code,' . $this->id ,
                'name' => 'nullable|unique:languages,name,' . $this->id,
                'dir' => 'nullable|in:ltr,rtl',
                'status' => 'boolean|nullable',
            ];
        }

        return $rules;
    }

    public function failedValidation(Validator $validator)
    {
        return $validator->errors();
    }

}
