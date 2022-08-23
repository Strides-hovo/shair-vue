<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    public $timestamps = false;

    protected $guarded = [];

    private string $relationTranslate = PageTranslate::class;

    public static function withs( $frontend = false): Builder
    {
        return self::with(['translations', 'translate']);
    }

    public function loads(): MakeRelations
    {
        return $this->load(['translate', 'translations']);
    }


}
