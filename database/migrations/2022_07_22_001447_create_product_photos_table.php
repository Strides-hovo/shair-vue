<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('product_photos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained()->onDelete('cascade');
            $table->string('image');
            $table->string('name');
            $table->integer('sorting')->default(1);
            $table->boolean('by_default')->default(false);

            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('product_photos');
    }
};
