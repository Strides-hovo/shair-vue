<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;

trait FilteredSlug {

    public function slug(): Attribute
    {
        return new Attribute(
            set: fn ($value) => str_replace(' ','-',$value),
        );
    }
}