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
        Schema::create('video_page_translates', function (Blueprint $table) {
            $table->id();
            $table->foreignId('video_page_id')->index()->constrained()->onDelete('cascade');
            $table->string('name');
            $table->text('description')->nullable();

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
        Schema::dropIfExists('video_page_translates');
    }
};
