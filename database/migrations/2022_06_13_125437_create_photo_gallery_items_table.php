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
        Schema::create('photo_gallery_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('photo_gallery_id')->constrained();
            $table->string('image');
            $table->string('image_name');
            $table->integer('sorting')->default(1);
            $table->boolean('status')->default(1);
            $table->string('image_alt')->nullable();
            $table->string('image_title')->nullable();
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
        Schema::dropIfExists('photo_gallery_items');
    }
};
