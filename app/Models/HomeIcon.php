<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class HomeIcon extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    protected $guarded = [];

    private string $relationTranslate = HomeIconTranslate::class;

    public static function withs(bool $frontend = false): Builder
    {
        return self::with('translations');
    }

    public function loads(): MakeRelations
    {
        return $this->load('translations');
    }

    public function page(): BelongsTo
    {
        return $this->belongsTo(Home::class);
    }



}
