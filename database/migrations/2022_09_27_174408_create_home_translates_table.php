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
        Schema::create('home_translates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('home_id')->constrained()->onDelete('cascade');
            $table->foreignId('language_id')->constrained()->onDelete('cascade');
            $table->string('about_title')->nullable();
            $table->text('about_content')->nullable();
            $table->string('icon_title')->nullable();
            $table->text('icon_content')->nullable();
            $table->unique(['home_id','language_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('home_translates');
    }
};
