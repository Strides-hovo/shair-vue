<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->nullable()->constrained()->onDelete('cascade');
            $table->string('page_name', 32)->nullable();

            $table->date('published_at')->nullable()->useCurrent();
            $table->string('image')->nullable();
            $table->string('image_name')->nullable();
            $table->boolean('status')->default(true);
            $table->integer('sorting')->default(1);
            $table->timestamps();
        });
    }

   



    public function down()
    {
        Schema::dropIfExists('articles');
    }
};
