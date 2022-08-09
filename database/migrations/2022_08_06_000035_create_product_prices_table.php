<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    

    public function up()
    {
        Schema::create('product_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->index()->constrained()->onDelete('cascade');
            $table->float('height');
            $table->float('width');
            $table->boolean('status')->default(true);
            $table->string('sku');
            $table->float('price');
            $table->string('invoice_code')->nullable();
            $table->float('delivery_sale')->nullable();
            $table->float('delivery_rent')->nullable();
        });
    }

 

    public function down()
    {
        Schema::dropIfExists('product_prices');
    }
};
