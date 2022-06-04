const cardboxItem1 = document.querySelector('.cardbox__item1');
const cardboxItem2 = document.querySelector('.cardbox__item2');
const cardboxItem3 = document.querySelector('.cardbox__item3');
const cardboxItem4 = document.querySelector('.cardbox__item4');
const cardboxItem5 = document.querySelector('.cardbox__item5');
const cardboxItem6 = document.querySelector('.cardbox__item6');
const cardboxItem7 = document.querySelector('.cardbox__item7');
const conImage = document.querySelector('.configurator__image');
const mainValue = localStorage.getItem("value");
const confImageLink = 'http://bmw/wp-content/themes/bmw';
const confModelInput = document.querySelector('.configurator__body-model');

cardboxItem1.addEventListener('click', function(){
    localStorage.setItem("value", 'xm');
});
cardboxItem2.addEventListener('click', function(){
    localStorage.setItem("value", 'm8cabrio');
});
cardboxItem3.addEventListener('click', function(){
    localStorage.setItem("value", 'm235i');
});
cardboxItem4.addEventListener('click', function(){
    localStorage.setItem("value", '8cabrio');
});
cardboxItem5.addEventListener('click', function(){
    localStorage.setItem("value", 'm5');
});
cardboxItem6.addEventListener('click', function(){
    localStorage.setItem("value", 'm8coupe');
});
cardboxItem7.addEventListener('click', function(){
    localStorage.setItem("value", 'ix');
});
