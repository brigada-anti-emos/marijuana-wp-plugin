<?php namespace BaeWp;

/** @var \Herbert\Framework\Router $router */

$router->get([
	'as' => 'connect',
	'uri' => '/connect',
	'uses' => __NAMESPACE__ . 'Controllers\AuthController@connect'
]);