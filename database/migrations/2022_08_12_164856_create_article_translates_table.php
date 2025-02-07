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
        Schema::create('article_translates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('article_id')->index()->constrained()->onDelete('cascade');
            $table->string('author')->nullable();
            $table->string('name')->nullable();
            $table->text('short_description')->nullable();
            $table->text('description')->nullable();

            $table->string('image_alt')->nullable();
            $table->string('image_title')->nullable();
            
            meta_migrations($table);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('article_translates');
    }
};
