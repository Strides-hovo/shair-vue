<?php

namespace App\Http\Requests;

use App\Traits\FailedValidation;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

use Illuminate\Validation\ValidationException;

/**
 * @property mixed $translate
 */
class ArticleTranslateRequest extends FormRequest
{

    use FailedValidation;

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'translate.author' => 'nullable|string',
            'translate.article_id' => 'required|exists:articles,id',
            'translate.name' => 'nullable|string',
            'translate.image_name' => 'nullable|string',
            'translate.image_alt' => 'nullable|string',
            'translate.image_title' => 'nullable|string',
            'translate.short_description' => 'nullable|string',
            'translate.description' => 'nullable|string',
            'translate.slug' => 'nullable|string',
            'translate.meta_description' => 'nullable|string',
            'translate.meta_title' => 'nullable|string',
            'translate.meta_keywords' => 'nullable|string',
            'translate.language_id' => 'required|exists:languages,id',
        ];
    }



    protected function failedValidation(Validator $validator)
    {

        $errors = response()->json([
            'status' => 'Error',
            'message' => 'Ops! Some errors occurred',
            'errors' => $validator->errors()
        ],400);

        throw (new ValidationException($validator, $errors ))
            ->errorBag($this->errorBag)
            ->redirectTo($this->getRedirectUrl());
    }
}
