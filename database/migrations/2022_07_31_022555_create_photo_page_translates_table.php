<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up()
    {
        Schema::create('photo_page_translates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('photo_page_id')->index()->constrained()->onDelete('cascade');
            $table->foreignId('language_id')->index()->constrained()->onDelete('cascade');
            $table->string('slug',100)->nullable();
            $table->string('name');
            $table->text('description')->nullable();
            $table->string('meta_title')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('meta_keywords')->nullable();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('photo_page_translates');
    }
};
