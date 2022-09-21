<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CouponRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'discount' => 'required|numeric',
            'status' => 'required|boolean',
            'operation' => 'required|in:sum,percent',
            'category_ids' => 'required|array',
        ];
    }
}
