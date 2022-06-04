<?php
/*
Template Name: cart
*/
?>
<?php $page_id = get_the_ID(); ?>
<?php get_header(); ?>
<section class="cart">
    <div class="container">
        <h2 class="cart__title">Заполните необходимые данные для оплаты</h2>
        <div class="cart__content">
            <div class="cart__left-section">
                <div class="cart__fio">
                    <div class="cart__fio_name">
                    <span class="cart__input-title neccessary">
                        Имя
                    </span>
                    <input type="text" class="cart__input input-1 input-name">
                    </div>
                    <div class="cart__fio_fam">
                    <span class="cart__input-title neccessary">
                        Фамилия
                    </span>
                    <input type="text" class="cart__input input-1 input-fam">
                    </div>
                </div>
                <div class="cart__age">
                    <span class="cart__input-title-age">
                        Возраст
                    </span>
                    <input type="text" class="cart__input input-2 input-age">
                </div>
                <div class="cart__country">
                    <span class="cart__input-title">
                        Страна
                    </span>
                    <input type="text" class="cart__input input-1 input-country">
                </div>
                <div class="cart__town">
                    <span class="cart__input-title">
                        Город
                    </span>
                    <input type="text" class="cart__input input-1 input-town">
                </div>
                <div class="cart__address">
                    <span class="cart__input-title">
                        Адрес
                    </span>
                    <input type="text" class="cart__input input-3 input-address">
                </div>
                <div class="cart__number tel">
                    <span class="cart__input-title neccessary">
                        Номер телефона
                    </span>
                    <input type="tel" class="cart__input input-3 input-number">
                </div>
                <div class="email cart__email">
                    <span class="cart__input-title neccessary">
                        Электронный адрес
                    </span>
                    <input type="email" class="cart__input input-3 input-email">
                </div>
            </div>
            <div class="cart__right-section">
                <div class="cart__card">
                    <img src="<?php bloginfo('template_url')?>/assets/img/4 cabrio.jpg" alt="" class="cart__image">
                </div>
                <div class="cart__summa">
                <span class="cart__sum">Сумма:</span>
                <h2 class="cart__price">0₽</h2>
                <div class="dropdown">
                <button style="background:url(<?php bloginfo('template_url') ?>/assets/img/dropdown.jpg);" class="cart__salon dropbutton">Бакра, Новая Адыгея</button>
                <ul class="cart__salon_dropdown droplist">
                    <li data-value="x1" class="cart__salon_dropdown_item dropitem">Бакра, Новая Адыгея</li>
                    <li data-value="x2" class="cart__salon_dropdown_item dropitem">Атлас, Краснодар</li>
                    <li data-value="x3" class="cart__salon_dropdown_item dropitem">Модус, Краснодар</li>
                </ul>
                </div>
                </div>
            <div class="cart__info">
                <div class="cart__input-body"><input type="checkbox" class="cart__info_input"><span class="cart__info_radio">Я соглашаюсь с условиями пользовательского соглашения</span></input></div>
                <!--<div class="cart__input-body"><input type="checkbox" class="cart__info_input"><span class="cart__info_radio">Я согласен со специальными условиями цифровой оплаты</span></input></div>-->
                <div class="cart__input-body"><input type="checkbox" class="cart__info_input"><span class="cart__info_radio">Я хочу получать e-mail рассылку о новых поставках и специальных предложениях</span></input></div>
                <button class="cart__button">Оставить заявку</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</section>
<?php get_footer();?>