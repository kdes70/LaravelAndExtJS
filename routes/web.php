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

Route::get('/', 'MainController@index')->name('index');
Route::get('/comments/{id}', 'MainController@getComments')->name('comments');



Route::get('/nts', 'Nts\NtsController@index')->name('nts');

Route::group(['prefix' => '/nts/api/v1'], function () {
    Route::get('users/', 'ApiController@rdrUser');
});