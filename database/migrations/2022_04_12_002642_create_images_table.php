<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('images', function (Blueprint $table) {
            $table->id();
            $table->string('src');
            $table->string('alt')->nullable();
            $table->string('title')->nullable();
            $table->foreignId('language_id')->nullable()->constrained();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('images');
    }
};
