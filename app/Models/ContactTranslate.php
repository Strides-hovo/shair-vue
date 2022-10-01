<?php

namespace App\Models;

use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactTranslate extends Model
{
    use HasFactory,FilteredSlug;

    protected $guarded = [];
    public $timestamps = false;


    public function timeList(): Attribute
    {
        return Attribute::make(
            get: fn($value) =>  json_decode( $value,true) ,
            set: fn($value) => is_array($value)
                ? json_encode($value)
                : json_encode( explode("\n",$value), JSON_UNESCAPED_UNICODE  )
        );
    }
}
