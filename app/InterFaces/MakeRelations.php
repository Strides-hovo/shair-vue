<?php

namespace App\InterFaces;

use Illuminate\Database\Eloquent\Builder;

interface MakeRelations
{

    public static function withs(bool $frontend = false): Builder;

    public function loads(): self;

}