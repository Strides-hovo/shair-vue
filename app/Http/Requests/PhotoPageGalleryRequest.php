<?php

namespace App\Http\Requests;

use App\Models\PhotoPageGallery;
use App\Models\ProductPhoto;
use Illuminate\Foundation\Http\FormRequest;

class PhotoPageGalleryRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }



    public function rules()
    {
        return [
            'photo_page_id' => 'required|exists:photo_pages,id',
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|integer',
            'image' => 'nullable|string',
            'image_name' => 'nullable|string',
            'image_alt' => 'nullable|string',
            'image_title' => 'nullable|string',
        ];
    }



    public function prepareForValidation(): void
    {

        if($this->replace){
            $model = PhotoPageGallery::find($this->id);
            $image = changeImageName( $model->image, $this->image_name );
            $this->merge(['image' => $image]);
           
        }
    }
}
