<?php

namespace App\Http\Requests;

use App\Models\VideoPageGallery;
use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;


class VideoPageGalleryRequest extends FormRequest
{

    use FailedValidation;

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'video_page_id' => 'required|exists:video_pages,id',
            'status' => 'nullable|boolean',
            'sorting' => 'nullable|integer',
            'video' => 'nullable|string',
            'video_name' => 'nullable|string',
            'video_alt' => 'nullable|string',
            'video_title' => 'nullable|string',
        ];
    }


    public function prepareForValidation(): void
    {

        if ($this->replace) {
            $model = VideoPageGallery::find($this->id);
            $video = changeImageName($model->video, $this->video_name);

            $this->merge(['video' => $video]);
            // VideoPageGallery::where('video',$model->video)->update(['video' => $video, 'video_name' => $this->video_name]) ;
        }
    }
}
