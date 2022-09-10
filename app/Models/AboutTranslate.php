<?php

namespace App\Models;

use App\Traits\FilteredSlug;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AboutTranslate extends Model
{
    use HasFactory, FilteredSlug;

    protected $guarded = [];

    public $timestamps = false;


    public function about(): BelongsTo
    {
        return $this->belongsTo(About::class);
    }

}
