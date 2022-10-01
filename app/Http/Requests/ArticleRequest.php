<?php

namespace App\Http\Requests;

use App\Models\Article;
use App\Traits\FailedValidation;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;
use JetBrains\PhpStorm\ArrayShape;

/**
 * @property mixed $translate
 */
class ArticleRequest extends FormRequest
{
    use FailedValidation;

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
            'in_home' => 'nullable|boolean',
        );
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
