<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('delivers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price')->default(0);
            $table->enum('type',['pickup','delivery']);
            $table->enum('status',['0','1'])->default('1');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('delivers');
    }
};
