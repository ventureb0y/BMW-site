<?php
/*
Template Name: home
*/
?>
<?php $page_id = get_the_ID(); ?>
<?php get_header(); ?>


<!--MAIN-->
<section class="main" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/bmw-8-series-coupe-onepager-sp-desktop.jpg)">
    <div class="container">
        <div class="offer">
            <h1 class="offer__title">Крупнейший дилер в Краснодаре</h1>
            <h2 class="offer__subtitle">Станьте владельцем BMW</h2>
            <a href="http://u124675.test-handyhost.ru/?p=10" class="offer__button">В магазин</a>
        </div>
        <div class="info">
            <div class="info__item1">Более 150 довольных клиентов каждый месяц</div>
            <div class="info__item2">Эксклюзивные поставки каждые 2 месяца</div>
            <div class="info__item3">Автопарк более 70 автомобилей различных расцветок и комплектаций</div>
        </div>
    </div>
</section>
<!--OFFERS-->
<section class="offers">
<div class="container">
    <div class="cardbox">
        <div class="cardbox__row">
            <a href="http://u124675.test-handyhost.ru/?p=13" class="cardbox__item1" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/bmw\ iX\ offer.jpg)">
                <h2 class="cardbox__item1_title">Открыт предзаказ</h2>
                <h2 class="cardbox__item1_subtitle">Нового ХМ</h2>
            </a>
            <a href="http://u124675.test-handyhost.ru/?p=13" class="cardbox__item2" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/m8\ offer.jpg)">
                <h2 class="cardbox__item2_title">BMW.</h2>
                <h2 class="cardbox__item2_title">Твой выбор.</h2>
            </a>
            <a href="http://u124675.test-handyhost.ru/?p=13" class="cardbox__item3" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/m2\ offer.jfif)">
                <h2 class="cardbox__item3_title">M2 Power</h2>
            </a>
        </div>
        <div class="cardbox__row">
            <a href="http://u124675.test-handyhost.ru/?p=13" class="cardbox__item4" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/m8\ cabrio\ offer.jpg)">
                <h2 class="cardbox__item4_title">Сносит крышу от скорости</h2>
                <h2 class="cardbox__item4_subtitle">BMW 8 Cabrio</h2>
            </a>
            <a href="http://u124675.test-handyhost.ru/?p=13" class="cardbox__item5" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/m5\ offer.webp)">
                <h2 class="cardbox__item5_title">M5 Sport</h2>
            </a>
        </div>
        <div class="cardbox__row">
            <a href="http://u124675.test-handyhost.ru/?p=13" class="cardbox__item6" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/m8\ 2\ offer.jpg)">
                <h2 class="cardbox__item6_title">Динамичный и агрессивный M8</h2>
            </a>
            <a href="http://u124675.test-handyhost.ru/?p=13" class="cardbox__item7" style="background-image: url(<?php bloginfo('template_url') ?>/assets/img/iX\ offer.jpg)">
                <h2 class="cardbox__item7_title">Новейший электрический</h2>
                <h2 class="cardbox__item7_title">кроссовер iX</h2>
            </a>
        </div>
    </div>
</div>
</section>

<?php get_footer();?>