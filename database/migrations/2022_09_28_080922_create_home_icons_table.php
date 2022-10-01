<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('home_icons', function (Blueprint $table) {
            $table->id();
            $table->string('icon');
            $table->foreignId('home_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('home_icons');
    }
};
