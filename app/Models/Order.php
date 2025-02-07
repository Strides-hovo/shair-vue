<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Order extends Model
{
    use HasFactory;

    protected $guarded = [];




    public function details(): HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }


    public function coupon(): BelongsTo
    {
        return $this->belongsTo(Coupon::class);
    }


    protected static function boot()
    {
        parent::boot();

        /*self::creating(function ($model){

        });*/
    }

    public function categoryIds()
    {

    }

    public function discount()
    {

    }

}
