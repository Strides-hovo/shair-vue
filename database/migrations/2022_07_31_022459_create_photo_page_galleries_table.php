<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    

    public function up()
    {
        Schema::create('photo_page_galleries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('photo_page_id')->constrained()->onDelete('cascade');
            $table->integer('sorting')->default(1);
            $table->boolean('status')->default(1);
            $table->string('image');
            $table->string('image_name');
            $table->string('image_alt')->nullable();
            $table->string('image_title')->nullable();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('photo_page_galleries');
    }
};
