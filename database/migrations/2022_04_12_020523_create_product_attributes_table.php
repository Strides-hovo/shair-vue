<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('product_attributes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->index()->constrained();
            $table->foreignId('attribute_id')->index()->constrained();
            $table->foreignId('image_id')->index()->constrained();
            $table->foreignId('gallery_id')->index()->constrained();
            $table->foreignId('language_id')->index()->constrained();
            $table->text('description')->nullable();
            $table->integer('sum');
            $table->integer('count');
            $table->enum('operation',['plus','minus']);
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('product_attributes');
    }
};
