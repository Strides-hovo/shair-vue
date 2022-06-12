<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->id();
            $table->string('code');
            $table->string('name');
            $table->enum('dir',['ltr','rtl'])->default('rtl');
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

 
    public function down()
    {
        Schema::dropIfExists('languages');
    }
};
