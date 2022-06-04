const inputName = document.querySelector('.input-name');
const inputFam = document.querySelector('.input-fam');
const inputAge = document.querySelector('.input-age');
const inputCountry = document.querySelector('.input-country');
const inputTown = document.querySelector('.input-town');
const inputAddress = document.querySelector('.input-address');
const inputNumber = document.querySelector('.input-number');
const inputEmail = document.querySelector('.input-email');
const cartCheckboxes = document.querySelectorAll('.cart__info_input');
const cartButton = document.querySelector('.cart__button');

cartButton.addEventListener('click', function(){
    let inputAgeValue = Number(inputAge.value);
    let inputNumberValue = String(inputNumber.value);
    let inputEmailValue = String(inputEmail.value);
    let error = 0;

    if(typeof inputName.value !== 'string' || inputName.value.length < 2) {
        inputName.classList.add('input-alert');
        inputName.classList.remove('input-correct');
        error++;
    }
    else{
        inputName.classList.remove('input-alert');
        inputName.classList.add('input-correct');
    }
    if(typeof inputFam.value !== 'string' || inputFam.value.length < 2) {
        inputFam.classList.add('input-alert');
        inputFam.classList.remove('input-correct');
        error++;
    }
    else{
        inputFam.classList.remove('input-alert');
        inputFam.classList.add('input-correct');
    }
    if(typeof inputAgeValue !== 'number' || inputAgeValue < 18) {
        if (inputAgeValue.length === undefined) { 

        }
        else{
            inputAge.classList.add('input-alert');
            inputAge.classList.remove('input-correct');
            error++;
        }
    }
    else{
        inputAge.classList.remove('input-alert');
        inputAge.classList.add('input-correct');
    }
    if(typeof inputCountry.value !== 'string' || inputCountry.value.length < 3) {
        if (inputAgeValue.length === undefined) { 

        }
        else{
            inputCountry.classList.add('input-alert');
            inputCountry.classList.remove('input-correct');
            error++;
        }
    }
    else{
        inputCountry.classList.remove('input-alert');
        inputCountry.classList.add('input-correct');
    }
    if(typeof inputTown.value !== 'string' || inputTown.value.length < 3) {
        if (inputAgeValue.length === undefined) { 

        }
        else{
            inputTown.classList.add('input-alert');
            inputTown.classList.remove('input-correct');
            error++;
        }
    }
    else{
        inputTown.classList.remove('input-alert');
        inputTown.classList.add('input-correct');
    }
    if(typeof inputAddress.value !== 'string' || inputAddress.value.length < 7) {
        if (inputAgeValue.length === undefined) { 

        }
        else{
            inputAddress.classList.add('input-alert');
            inputAddress.classList.remove('input-correct');
            error++;
        }
    }
    else{
        inputAddress.classList.remove('input-alert');
        inputAddress.classList.add('input-correct');
    }
    if(typeof inputNumberValue !== 'string' || inputNumberValue.length < 11 || inputNumberValue.length > 12) {
        inputNumber.classList.add('input-alert');
        inputNumber.classList.remove('input-correct');
        error++;
    }
    else{
        inputNumber.classList.remove('input-alert');
        inputNumber.classList.add('input-correct');
    }
    if(typeof inputEmailValue !== 'string' || inputEmailValue.length < 7 || inputEmailValue.includes("@") === false || inputEmailValue.includes(".") === false) {
        inputEmail.classList.add('input-alert');
        inputEmail.classList.remove('input-correct');
        error++;
    }
    else{
        inputEmail.classList.remove('input-alert');
        inputEmail.classList.add('input-correct');
    }
    cartCheckboxes.forEach(function(checkbox){
        if(checkbox.checked !== true){
            error++;
        }
    });
    if (error <= 0){
        window.location.href = 'http://u124675.test-handyhost.ru/?p=20';
    }
    else{

    }
});