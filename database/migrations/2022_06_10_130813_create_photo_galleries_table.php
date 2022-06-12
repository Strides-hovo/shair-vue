<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use League\CommonMark\Extension\Table\Table;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('photo_galleries', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->foreignId('page_photo_gallery_id')->constrained();
            $table->boolean('status')->default(1);
            $table->integer('sorting')->default(1);
            $table->string('image');
            $table->string('image_name');
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
        Schema::dropIfExists('photo_galleries');
    }
};
