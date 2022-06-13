<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PagePhotoJson extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {

        return $this->map(function ($item) {
            return [
                "id" => $item->id,
                "language_id" => $item->language_id,
                "title" => $item->title,
                "status" => $item->status,
                "sorting" => $item->sorting,
                "image" => $item->image,
                "image_name" => $item->image_name,
                "image_alt" => $item->image_alt,
                "image_title" => $item->image_title,
            ];
        });
    }
}
