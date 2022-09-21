<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    


    public function up():void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->nullable()->constrained()->onDelete('set null');
            $table->boolean('status')->default(true)->comment('В наличии - прайс-лист');;
            $table->string('Instruction_file')->nullable();
            $table->boolean('rent')->default(true);
            $table->boolean('sale')->default(true);
            $table->boolean('guarantee')->default(false);
            $table->boolean('dimension')->default(false)->comment('Товар с размерами');
            $table->enum('flag',['noting','stock','sale','new'])->default('noting');

            $table->timestamps();
        });
    }

  

    public function down():void
    {
        Schema::dropIfExists('products');
    }
    
};
