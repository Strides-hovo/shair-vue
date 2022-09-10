<?php

namespace App\Models;

use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ArticleTranslate extends Model
{
    use HasFactory, FilteredSlug;

    protected $guarded = [];

    public $timestamps = false;


    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

}
