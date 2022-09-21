<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('coupons', function (Blueprint $table) {
            $table->id();
            $table->integer('discount');
            $table->enum('operation',['percent','sum'])->default('percent');
            $table->boolean('status')->default(true);
            $table->json('category_ids')->nullable();

            /*$table->jsonb('category_ids');
            $table->rawIndex('("category_ids"->\'ids\')', 'coupons_category_ids_index')->algorithm('gin');*/
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('coupons');
    }
};
