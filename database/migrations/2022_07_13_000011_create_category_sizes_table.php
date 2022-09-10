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
        Schema::create('category_sizes', function (Blueprint $table) {
            $table->id();
            $table->float('width');
            $table->float('height');
            $table->foreignId('category_id')->constrained();
            $table->boolean('status')->default(true);
            $table->boolean('by_default')->default(false);
            $table->integer('sorting')->default(1);

            $table->unique(['category_id','height','width']);


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('category_sizes');
    }
};
