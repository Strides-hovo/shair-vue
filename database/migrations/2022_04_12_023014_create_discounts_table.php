<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('discounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->index()->constrained();
            $table->integer('count');
            $table->enum('operation',['sum','percent']);
            $table->tinyInteger('sale')->nullable();
            $table->integer('sum')->default(0);
            $table->enum('status',['0','1'])->default('1');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('discounts');
    }
};
