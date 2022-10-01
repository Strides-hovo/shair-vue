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
        Schema::create('branch_translates', function (Blueprint $table) {
            $table->id();

            $table->string('name_title',100)->nullable();
            $table->string('name',100)->nullable();
            $table->string('address_title',100)->nullable();
            $table->string('address',100)->nullable();

            $table->string('tel',100)->nullable();
            $table->string('tel_title',100)->nullable();
            $table->string('email',100)->nullable();
            $table->string('email_title',100)->nullable();

            $table->string('time_title')->nullable();
            $table->string('time')->nullable();

            $table->string('whats_title',100)->nullable();
            $table->text('whats_text')->nullable();

            meta_migrations($table);
            $table->foreignId('branch_id')->constrained()->onDelete('cascade');
            $table->unique(['branch_id','language_id']);

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('branch_translates');
    }
};
