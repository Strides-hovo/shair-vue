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
        Schema::create('video_page_galleries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('video_page_id')->constrained()->onDelete('cascade');
            $table->integer('sorting')->default(1);
            $table->boolean('status')->default(1);
            $table->string('video');
            $table->string('video_name');
            $table->string('video_alt')->nullable();
            $table->string('video_title')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('video_page_galleries');
    }
};
