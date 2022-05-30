<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price');
            $table->foreignId('language_id')->constrained();
            $table->foreignId('image_id')->nullable()->constrained();
            $table->foreignId('gallery_id')->nullable()->constrained();
            $table->foreignId('category_id')->index()->constrained();
            $table->integer('reserves')->default(0)->comment('количество запаса');
            $table->enum('status',['0','1'])->default('1');
            $table->text('description');
            $table->text('short_description')->nullable();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('products');
    }
};
