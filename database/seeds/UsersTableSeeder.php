<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('spr_users')->delete();

        $faker = Faker\Factory::create();
        static $password;

        for($i = 0; $i < 100; $i++) {
            App\User::create([
                'name' => $faker->name,
                'last_name' => $faker->lastName,
                'login' => $faker->userName,
                'email' => $faker->safeEmail,
                'password' => $password ?: $password = bcrypt('secret'),
                'remember_token' => str_random(10),
                'id_status' => $faker->randomElement($array = array (1,2))
            ]);
        }
    }
}


class StatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('spr_status')->delete();

        DB::table('spr_status')->insert([
                ['name' => 'активный'],
                ['name' => 'заблокированый']
            ]
        );

    }
}