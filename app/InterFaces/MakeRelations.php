<?php

namespace App\InterFaces;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\HasOne;
interface MakeRelations
{

    /**
     * @property array $attributes
     */

    public static function withs(bool $frontend = false): Builder;

    public function loads(): self;

    //public function page(): ?HasOne;
    

}