<?php

namespace App\Models;

use App\Traits\RelationsManager;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Language extends Model
{
    use HasFactory, RelationsManager;

    protected $fillable = ['code','name','dir','status'];

    protected $casts = [
        'status' => 'boolean',
        //'status' => 'enum:0,1',
    ];

    /*public function categories():hasMany
    {
        return $this->hasMany(Category::class);
    }


    public function products():hasMany
    {
        return $this->hasMany(Product::class);
    }*/

}
