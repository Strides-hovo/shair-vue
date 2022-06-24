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
        Schema::create('video_gallery_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('video_gallery_id')->constrained();
            $table->string('video');
            $table->string('video_name');
            $table->integer('sorting')->default(1);
            $table->boolean('status')->default(1);
            $table->string('video_alt')->nullable();
            $table->string('video_title')->nullable();
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
        Schema::dropIfExists('video_gallery_items');
    }
};
