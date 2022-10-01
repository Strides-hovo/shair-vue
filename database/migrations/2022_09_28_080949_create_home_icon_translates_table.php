<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{


    public function up()
    {
        Schema::create('home_icon_translates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('home_icon_id')->constrained()->onDelete('cascade');
            $table->foreignId('language_id')->constrained()->onDelete('cascade');
            $table->string('title')->nullable();
            $table->unique(['home_icon_id','language_id']);
        });
    }


    public function down()
    {
        Schema::dropIfExists('home_icon_translates');
    }
};
