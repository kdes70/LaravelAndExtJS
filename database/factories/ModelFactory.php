<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'last_name' => $faker->lastName,
        'login' => $faker->userName,
        'email' => $faker->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
        'id_status' => $faker->randomKey([1,2]),
    ];
});



$factory->define(App\StrStatus::class, function (Faker\Generator $faker) {

    return [
        'name' => 'активный'
    ];
});