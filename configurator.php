<?php
/*
Template Name: conf
*/
?>
<?php $page_id = get_the_ID(); ?>
<?php get_header(); ?>
<section class="conf">
<div class="container">
    <div class="configurator__menu">
        <div class="configurator__picture"><img src="<?php bloginfo('template_url')?>/assets/img/4 cabrio.jpg" alt="" class="configurator__image"></div>
        <div class="configurator__constructor">
            <div class="configurator__constructor_row">
                <h2 class="configurator__title">Модель</h2>
                <div class="dropdown">
                <button style="background:url(<?php bloginfo('template_url') ?>/assets/img/dropdown.jpg);" class="configurator__body-model dropbutton">4 Cabrio</button>
                <ul class="configurator__body-model_dropdown droplist">
                    <li data-value="x1" class="configurator__body-model_dropdown_item dropitem">X1</li>
                    <li data-value="x2" class="configurator__body-model_dropdown_item dropitem">X2</li>
                    <li data-value="x3" class="configurator__body-model_dropdown_item dropitem">X3</li>
                    <li data-value="x4" class="configurator__body-model_dropdown_item dropitem">X4</li>
                    <li data-value="x5" class="configurator__body-model_dropdown_item dropitem">X5</li>
                    <li data-value="x6" class="configurator__body-model_dropdown_item dropitem">X6</li>
                    <li data-value="x7" class="configurator__body-model_dropdown_item dropitem">X7</li>
                    <li data-value="ix" class="configurator__body-model_dropdown_item dropitem">iX</li>
                    <li data-value="ixm60" class="configurator__body-model_dropdown_item dropitem">iX M60</li>
                    <li data-value="2coupe" class="configurator__body-model_dropdown_item dropitem">2 Coupe</li>
                    <li data-value="2gc" class="configurator__body-model_dropdown_item dropitem">2 Gran Coupe</li>
                    <li data-value="3" class="configurator__body-model_dropdown_item dropitem">3</li>
                    <li data-value="4coupe" class="configurator__body-model_dropdown_item dropitem">4 Coupe</li>
                    <li data-value="4cabrio" class="configurator__body-model_dropdown_item dropitem">4 Cabrio</li>
                    <li data-value="4gc" class="configurator__body-model_dropdown_item dropitem">4 Gran Coupe</li>
                    <li data-value="5" class="configurator__body-model_dropdown_item dropitem">5</li>
                    <li data-value="6gt" class="configurator__body-model_dropdown_item dropitem">6 GT</li>
                    <li data-value="7" class="configurator__body-model_dropdown_item dropitem">7</li>
                    <li data-value="7long" class="configurator__body-model_dropdown_item dropitem">7 Long</li>
                    <li data-value="8coupe" class="configurator__body-model_dropdown_item dropitem">8 Coupe</li>
                    <li data-value="8cabrio" class="configurator__body-model_dropdown_item dropitem">8 Cabrio</li>
                    <li data-value="8gc" class="configurator__body-model_dropdown_item dropitem">8 Gran Coupe</li>
                    <li data-value="z4" class="configurator__body-model_dropdown_item dropitem">Z4 Roadster</li>
                    <li data-value="m240i" class="configurator__body-model_dropdown_item dropitem">M240i xDrive Coupe</li>
                    <li data-value="m235i" class="configurator__body-model_dropdown_item dropitem">M235i xDrive Gran Coupe</li>
                    <li data-value="m3" class="configurator__body-model_dropdown_item dropitem">M3 Competition</li>
                    <li data-value="m4" class="configurator__body-model_dropdown_item dropitem">M4 Competition Coupe</li>
                    <li data-value="m440i" class="configurator__body-model_dropdown_item dropitem">M440i xDrive Cabrio</li>
                    <li data-value="m5" class="configurator__body-model_dropdown_item dropitem">M5 Competition</li>
                    <li data-value="m760li" class="configurator__body-model_dropdown_item dropitem">M760Li xDrive</li>
                    <li data-value="m8coupe" class="configurator__body-model_dropdown_item dropitem">M8 Coupe</li>
                    <li data-value="m8cabrio" class="configurator__body-model_dropdown_item dropitem">M8 Cabrio</li>
                    <li data-value="m8gc" class="configurator__body-model_dropdown_item dropitem">M8 Gran Coupe</li>
                    <li data-value="x5m" class="configurator__body-model_dropdown_item dropitem">X5 M Competition</li>
                    <li data-value="x6m" class="configurator__body-model_dropdown_item dropitem">X6 M Competition</li>
                    <li data-value="x7m" class="configurator__body-model_dropdown_item dropitem">X7 M50d</li>
                </ul>
                <input type="text" name="select-category" class="dropdown_input-hidden model-input">
            </div>
            </div>
            <div class="configurator__constructor_row">
                <h2 class="configurator__title">Салон</h2>
                <div class="dropdown">
                <button style="background:url(<?php bloginfo('template_url') ?>/assets/img/dropdown.jpg);" class="configurator__body-model dropbutton">Пластик</button>
                <ul class="configurator__body-model_dropdown droplist">
                    <li class="configurator__body-model_dropdown_item dropitem">Пластик</li>
                    <li  class="configurator__body-model_dropdown_item dropitem">Дерево</li>
                    <li  class="configurator__body-model_dropdown_item dropitem">Металл</li>
                    <li  class="configurator__body-model_dropdown_item dropitem">Кожа</li>
                    <li  class="configurator__body-model_dropdown_item dropitem">Углеволокно</li>
                </ul>
                </div>
            </div>
            <div class="configurator__constructor_row">
                <h2 class="configurator__price">0₽</h2>
            </div>
            <input type="text" name="select-category" class="dropdown_input-hidden disc">
        </div>
    </div>
<!--INFOBOX-->
    <div class="infobox">
        <div class="infobox__row">
            <div class="infobox__item"><h2 class="infobox__title power">340 л.c.</h2><span class="infobox__text">Мощность двигателя</span></div>
            <div class="infobox__item"><h2 class="infobox__title acceleration">4,9 с.</h2><span class="infobox__text">Разгон (от 0 до 100км/ч)</span></div>
            <div class="infobox__item"><h2 class="infobox__title fuel">8,7 л/100км</h2><span class="infobox__text">Расход топлива</span></div>
            <a href="http://u124675.test-handyhost.ru/?p=18" class="infobox__button">Оставить заявку</a>
        </div>
        <div class="infobox__row">
            <div class="infobox__item">
                <h2 class="infobox__title">Автоматическая</h2><span class="infobox__text">Коробка переключения передач</span>
            </div>
        </div>
    </div>
</div>
</section>
<?php get_footer(); ?>