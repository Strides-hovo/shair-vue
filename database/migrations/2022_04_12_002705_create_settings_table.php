<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {

            $table->string('site_name',100);
            $table->string('site_tel',50);
            $table->string('site_address',100);
            $table->string('site_work_time');
            $table->string('site_favicon');
            $table->string('site_logo');
            $table->string('site_email');
            $table->string('email_from');
            $table->string('smtp_host',20);
            $table->string('smtp_port',20);
            $table->string('smtp_email');
            $table->string('smtp_username');
            $table->string('smtp_password');
            $table->text('error');

        });
    }


    public function down()
    {
        Schema::dropIfExists('settings');
    }
};
