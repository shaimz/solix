<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductAdvantagesTranslatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_advantages_translates', function (Blueprint $table) {
            $table->id();
            $table->integer('advantage_id');
            $table->integer('product_id');
            $table->string('name');
            $table->string('value');
            $table->integer('lang_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_advantages_translates');
    }
}
