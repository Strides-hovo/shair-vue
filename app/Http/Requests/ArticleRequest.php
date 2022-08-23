<?php

namespace App\Http\Requests;

use App\Models\Article;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use JetBrains\PhpStorm\ArrayShape;

/**
 * @property mixed $translate
 */
class ArticleRequest extends FormRequest
{


    public function authorize()
    {
        return true;
    }


     public function rules(): array
    {
        return array(
            'product_id' => 'nullable|exists:products,id',
            'published_at' => 'nullable|date',
            'image' => 'nullable|string',
            'image_name' => 'nullable|string',
            'sorting' => 'nullable|integer',
            'status' => 'nullable|boolean',
        );
    }


    protected function failedValidation(Validator $validator)
    {

        $errors = response()->json([
            'status' => 'Error',
            'message' => 'Ops! Some errors occurred',
            'errors' => $validator->errors()
        ], 400);

        throw (new ValidationException($validator, $errors))
            ->errorBag($this->errorBag)
            ->redirectTo($this->getRedirectUrl());
    }


    public function prepareForValidation(): void
    {

        if ($this->replace) {
            $model = Article::find($this->id);
            $image = changeImageName($model->image, $this->image_name);
            $this->merge(['image' => $image]);

        }
    }
}
