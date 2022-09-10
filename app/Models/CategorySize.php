<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CategorySize extends Model
{
    use HasFactory;

    protected $fillable = ['width','height','category_id','status','sorting','by_default'];

    public $timestamps = false;

    protected $casts = [
        'status' => 'boolean',
        'sorting' => 'integer',
        'by_default' => 'boolean',
    ];


    public function category():BelongsTo
    {
        return $this->belongsTo(Category::class);
    }


}
