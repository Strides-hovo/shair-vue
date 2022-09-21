<?php

namespace App\Traits;


use Closure;

trait ThreeRelation
{
    public function custom($related, Closure $baseConstraints, Closure $eagerConstraints, Closure $eagerMatcher)
    {
        $instance = new $related;
        $query = $instance->newQuery();
    }
}