<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('product_photo_translates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('language_id')->constrained()->onDelete('cascade');
            $table->foreignId('product_photo_id')->constrained()->onDelete('cascade');
            $table->string('alt')->nullable();
            $table->string('title')->nullable();
            
        });
    }




    public function down()
    {
        Schema::dropIfExists('product_photo_translates');
    }
};
