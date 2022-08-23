<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class AboutTranslate extends Model
{
    use HasFactory;

    protected $guarded = [];

    public $timestamps = false;


    public function about(): BelongsTo
    {
        return $this->belongsTo(About::class);
    }

}
