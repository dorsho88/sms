<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->post('/api/message', 'MessageController@store');
$router->get('/api/messages', 'MessageController@index');
$router->get('/api/pdf', 'MessageController@download');