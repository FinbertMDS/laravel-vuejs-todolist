<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['cors', 'json.response', 'auth:api'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['cors', 'json.response']], function () {
    // public routes
    Route::post('/login', 'Auth\ApiAuthController@login')->name('login.api');
    Route::post('/register','Auth\ApiAuthController@register')->name('register.api');
});

Route::middleware('auth:api')->group(function () {
    Route::post('/logout', 'Auth\ApiAuthController@logout')->name('logout.api');

    Route::get('/todos', 'Todo\ApiTodoItemController@todos')->name('loadTodos');
    Route::post('/todos', 'Todo\ApiTodoItemController@store')->name('storeTodos');
    Route::put('/todos/{todoItem}', 'Todo\ApiTodoItemController@update')->name('updateTodo');
    Route::delete('/todos/{todoItem}', 'Todo\ApiTodoItemController@destroy')->name('deleteTodo');
});