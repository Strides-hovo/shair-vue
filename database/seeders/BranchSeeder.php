<?php

namespace Database\Seeders;

use App\Models\Branch;
use App\Models\Contact;
use App\Models\BranchTranslate;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{


    public function run()
    {
        Branch::factory(2)->create();
        BranchTranslate::factory(1)->create();

        Contact::factory(1)->create();

    }
}
