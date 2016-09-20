<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/


Route::get('/', 'Nts\NtsController@index')->name('index');

Route::group(['prefix' => '/nts/api/v1'], function () {
    Route::get('read', 'Nts\Api\V1\ApiController@read');
});