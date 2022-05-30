<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('address');
            $table->foreignId('client_id')->index()->constrained();
            $table->json('products_data');
            $table->integer('count');
            $table->decimal('sum');
            $table->foreignId('payment_id')->constrained();
            $table->foreignId('coupon_id')->nullable()->constrained();

            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
