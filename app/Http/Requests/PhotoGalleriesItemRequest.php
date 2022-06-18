<?php

namespace App\Http\Requests;

use App\Models\PhotoGalleriesItem;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;

class PhotoGalleriesItemRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
       
        return [
            'image_alt' => 'nullable|string',
            'image_title' => 'nullable|string',
            'image_name' => 'nullable|string',
            'sorting' => 'nullable|integer',
            'status' => 'nullable|boolean',
            'photo_gallery_id' => 'nullable|exists:photo_galleries,id',
            'image' => 'required|string'
        ];
    }




    public function prepareForValidation():void {

           
            $name = explode('/',$this->image); //storage/img.png

            $image_name = end($name); //img.png

        if(strlen($this->image_name) > 1){
            
            $new_name =  $this->image_name . strstr($image_name,'.'); //new_name.png


            debug( $new_name,$image_name  );


        if (Storage::exists("public/{$image_name}") ){

            Storage::move("public/{$image_name}","public/{$new_name}");

            PhotoGalleriesItem::where('image', '/storage/' . $image_name)->update(['image' => '/storage/' . $new_name, 'image_name' => strstr($new_name,'.',1)]);

            
            $this->merge(['image_name' => strstr($new_name,'.',1),'image' =>  $new_name]);
        }
        }
        else{
            $this->merge(['image_name' => strstr($image_name,'.',1)]);
        }

    }



}