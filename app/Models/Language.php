<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, bool $true)
 * @method static create(mixed $validated)
 */
class Language extends Model
{
    use HasFactory;

    protected $fillable = ['code','name','dir','status'];

    protected $casts = [
        'status' => 'boolean',
    ];


    public static function actual(): Language
    {
        return self::where('status',true)->first();
    }


}
