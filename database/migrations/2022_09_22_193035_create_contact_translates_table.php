<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{


    public function up()
    {
        Schema::create('contact_translates', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('branch_title');
            $table->string('write_title');
            $table->string('faq_title');
            $table->string('fullName_title');

            $table->string('tel_title');
            $table->string('email_title');
            $table->string('message_title');
            $table->string('send_title');
            $table->string('soc_set_title');
            $table->string('time_title');
            $table->json('time_list');

            $table->string('additional_title');
            $table->string('additional_tel');
            $table->string('fax_title');
            $table->string('fax');

            $table->string('write_us_title');
            $table->string('write_us_email');
            $table->string('address_title');
            $table->string('address');

            $table->foreignId('contact_id')->constrained()->onDelete('cascade');
            meta_migrations($table);
            $table->unique(['contact_id','language_id']);
        });
    }


    public function down()
    {
        Schema::dropIfExists('branch_page_translates');
    }
};
