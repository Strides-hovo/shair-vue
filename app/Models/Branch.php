<?php

namespace App\Models;

use App\InterFaces\MakeRelations;
use App\Traits\MakeLanguages;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Branch extends Model implements MakeRelations
{
    use HasFactory, MakeLanguages;

    protected $guarded = [];

    protected $attributes = [
        'status' => true,
        'sorting' => 1,
    ];

    protected $casts = [
        'status' => 'boolean',
    ];

    private string $relationTranslate = BranchTranslate::class;

    public static function withs(bool $frontend = false): Builder
    {
        return self::with('translations');
    }

    public function loads(): MakeRelations
    {
        return $this->load('translations');
    }

    public function page(): ?HasOne
    {
        return null;
    }

}
