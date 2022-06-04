<?php
/*
Template Name: contacts
*/
?>
<?php $page_id = get_the_ID(); ?>
<?php get_header(); ?>
<section class="contacts">
    <div class="container">
        <div class="contacts__body">
            <h2 class="contacts__title">Служба клиентской поддержки</h2>
            <div class="contacts__text">Если Вы хотите связаться с представителями Службы клиентской поддержки BMW, то Вы можете позвонить нам по телефону:
                8 800 550 88 00 (звонок из городов РФ бесплатный) с 09:00 до 21:00.
                +7 495 646 88 00 с 09:00 до 21:00. </div>
            <h2 class="contacts__title">Отправьте нам письмо</h2>
            <form  method="POST" class="contacts__form">
                <?php echo do_shortcode ('[contact-form-7 id="12" title="Контактная форма"]')?>
                <!--<div class="contacts__fio">
                    <div class="contacts__item">
                        <span class="contacts__item-title">Фамилия</span>
                        <input name="familia" type="text" class="contacts__input req">
                    </div>
                    <div class="contacts__item">
                        <span class="contacts__item-title">Имя</span>
                        <input name="name" type="text" class="contacts__input req">
                    </div>
                    <div class="contacts__item">
                        <span class="contacts__item-title">Отчество</span>
                        <input name="ooo" type="text" class="contacts__input req">
                    </div>
                </div>
                <div class="contacts__con">
                    <div class="contacts__item">
                        <span class="contacts__item-title">Электронный адрес</span>
                        <input name="email" type="email" class="contacts__input input-2 req email">
                    </div>
                    <div class="contacts__item">
                        <span class="contacts__item-title">Номер телефона</span>
                        <input name="number" type="text" class="contacts__input req">
                    </div>
                </div>
                <div class="contacts__textbox">
                    <div class="contacts__item">
                        <span class="contacts__item-title">Тема письма</span>
                        <input name="subject" type="text" class="contacts__input req">
                    </div>
                    <div class="contacts__item">
                        <span class="contacts__item-title">Текст письма</span>
                        <textarea name="text" type="text" class="contacts__input text-input req"></textarea>
                    </div>
                </div>
                <div class="contacts__check">
                <input type="checkbox" class="contacts__checkbox req"><span class="contacts__checkbox-text">Я соглашаюсь с условиями обработки информации</span>
                </div>
                <button type="submit" class="contacts__button">Отправить</button>-->
            </form>
        </div>
    </div>
</section>
<?php get_footer();?>