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
            $table->tinyInteger('limit')->default(1);
            $table->integer('count')->default(1);
            $table->integer('use')->nullable();
            $table->enum('type',['sum','percent'])->default('sum');
            $table->enum('status',['0','1'])->default('1');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('coupons');
    }
};
