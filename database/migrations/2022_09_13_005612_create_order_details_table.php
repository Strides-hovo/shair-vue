<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('order_details', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained();
            $table->foreignId('product_size_id')->constrained();
            $table->foreignId('order_id')->constrained();
            $table->foreignId('coupon_id')->nullable()->constrained();
            $table->integer('quantity');
            $table->float('width');
            $table->float('height');
            $table->float('price');
            $table->float('discount')->nullable();

        });
    }


    public function down()
    {
        Schema::dropIfExists('order_details');
    }
};
