<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('branches', function (Blueprint $table) {
            $table->id();

            $table->integer('sorting')->default(1);
            $table->boolean('status')->default(true);
            $table->string('map_lng')->nullable();
            $table->string('map_lat')->nullable();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('branches');
    }
};
