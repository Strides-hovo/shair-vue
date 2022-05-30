<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('attributes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('attribute_group_id')->nullable()->constrained();
            $table->foreignId('language_id')->nullable()->constrained();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('attributes');
    }
};
