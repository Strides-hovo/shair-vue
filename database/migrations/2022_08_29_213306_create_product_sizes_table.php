<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('product_sizes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->index()->constrained()->onDelete('cascade');
            $table->foreignId('category_size_id')->nullable()->constrained()->onDelete('cascade');

            $table->boolean('status')->default(true);
            $table->string('sku')->nullable();
            $table->float('price',10)->nullable();
            $table->string('invoice_code')->nullable();
            $table->integer('delivery_sale')->nullable();
            $table->integer('delivery_rent')->nullable();
            $table->unique(['product_id','sku','category_size_id']);
        });
    }




    public function down()
    {
        Schema::dropIfExists('product_sizes');
    }
};
