<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
   
    public function up()
    {
        Schema::create('photo_pages', function (Blueprint $table) {
            $table->id();
            $table->integer('sorting')->default(1);
            $table->boolean('status')->default(true);
        });
    }


    public function down()
    {
        Schema::dropIfExists('photo_pages');
    }
};
