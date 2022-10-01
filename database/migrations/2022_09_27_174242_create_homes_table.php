<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('homes', function (Blueprint $table) {
            $table->id();
            $table->string('page_name')->default('Home');
            $table->string('main_video')->nullable();
            $table->string('video')->nullable();
            $table->json('brands')->nullable();
            $table->json('abouts')->nullable();
            $table->string('icon_link')->nullable();
            $table->string('about_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('homes');
    }
};
