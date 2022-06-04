<?php

add_action( 'wp_enqueue_scripts', function () {
	// подключаем файл стилей темы
	wp_enqueue_style( 'fonts-gstatic', 'https://fonts.gstatic.com');
	wp_enqueue_style( 'fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&family=Montserrat:ital,wght@0,400;0,500;0,600;1,500&display=swap');
	wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/style.css');

	// подключаем js файл темы
	wp_enqueue_script( 'dropdown', get_template_directory_uri() .'/assets/js/dropdown.js', array(), 'null', true );
	wp_enqueue_script( 'colors', get_template_directory_uri() .'/assets/js/colors.js', array(), 'null', true );
	wp_enqueue_script( 'conf', get_template_directory_uri() .'/assets/js/conf.js', array(), 'null', true );
	wp_enqueue_script( 'offers', get_template_directory_uri() .'/assets/js/offers.js', array(), 'null', true );
	wp_enqueue_script( 'cart', get_template_directory_uri() .'/assets/js/cart.js', array(), 'null', true );
	wp_enqueue_script( 'shop', get_template_directory_uri() .'/assets/js/shop.js', array(), 'null', true );
	wp_enqueue_script( 'pages', get_template_directory_uri() .'/assets/js/pages.js', array(), 'null', true );
	wp_enqueue_script( 'confprice', get_template_directory_uri() .'/assets/js/confprice.js', array(), 'null', true );
	wp_enqueue_script( 'purchase', get_template_directory_uri() .'/assets/js/purchase.js', array(), 'null', true );
	wp_enqueue_script( 'cartimage', get_template_directory_uri() .'/assets/js/cartimage.js', array(), 'null', true );
	wp_enqueue_script( 'tel', get_template_directory_uri() .'/assets/js/tel.js', array(), 'null', true );
});

add_theme_support('post-thumbnails');
add_theme_support('title-tag');
add_theme_support('custon-logo');


?>