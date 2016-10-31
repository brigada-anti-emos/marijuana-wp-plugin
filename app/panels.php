<?php 

namespace BaeWp;

/** @var \Herbert\Framework\Panel $panel */

$panel->add([
	'type' => 'panel',
    'as' => 'mainPanel',
    'title' => 'Bae',
    'slug' => 'bae-home',
    'icon' => 'dashicons-media-audio',
    'uses' => __NAMESPACE__ . '\Controllers\AdminController@home'
]);

$panel->add([
	'type' => 'sub-panel',
    'as' => 'authInfoPanell',
    'parent' => 'mainPanel',
    'title' => 'Auth Info',
    'slug' => 'bae-auth-info',
    'uses' => __NAMESPACE__ . '\Controllers\AuthController@info'
]);