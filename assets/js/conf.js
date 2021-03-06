const confImage = document.querySelector('.configurator__image');
const confPower = document.querySelector('.power');
const confAcceleration = document.querySelector('.acceleration');
const confFuel = document.querySelector('.fuel');
const imageLink = 'http://u124675.test-handyhost.ru/wp-content/themes/bmw';

document.querySelectorAll('.dropdown').forEach(function(dropDownWrapper){
    const dropDownBtn = dropDownWrapper.querySelector('.dropbutton');
    const dropDownList = dropDownWrapper.querySelector('.droplist');
    const dropDownItems = dropDownList.querySelectorAll('.dropitem');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown_input-hidden');

    dropDownBtn.addEventListener('click', function() {
        dropDownList.classList.toggle('droplist-visible');
    });

    dropDownItems.forEach(function(listItem){
        listItem.addEventListener('click', function () {
            dropDownBtn.innerText = this.innerText;
            dropDownList.classList.remove('droplist-visible');
            switch (this.dataset.value) {
                case 'x1':  
                    shopImage.src = shopImageLink + "/assets/img/x1_.jpg";
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '135 л.с.';
                    confAcceleration.innerText = '9,6 с.';
                    confFuel.innerText = '6.5л/100км';
                    modelInput.innerText = 'X1';
                    localStorage.setItem("value", 'x1');
                    break;
                case 'x2': 
                    shopImage.src = shopImageLink + "/assets/img/x2_.jpg";
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '140 л.с.';
                    confAcceleration.innerText = '9,6 с.';
                    confFuel.innerText = '6.3л/100км';
                    modelInput.innerText = 'X2';
                    localStorage.setItem("value", 'x2');
                    break;
                case 'x3': 
                    shopImage.src = shopImageLink + "/assets/img/x3_.jpg";
                    shopImage.className = 'configurator__image7';
                    confPower.innerText = '168 л.с.';
                    confAcceleration.innerText = '9,4 с.';
                    confFuel.innerText = '6.7л/100км';
                    modelInput.innerText = 'X3';
                    localStorage.setItem("value", 'x3');
                    break;
                case 'x4': 
                    shopImage.src = shopImageLink + "/assets/img/x4_.jpg";
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '195 л.с.';
                    confAcceleration.innerText = '9,0 с.';
                    confFuel.innerText = '6.9л/100км';
                    modelInput.innerText = 'X4';
                    localStorage.setItem("value", 'x4');
                    break;
                case 'x5': 
                    shopImage.src = shopImageLink + '/assets/img/x5_.jpg';
                    shopImage.className = 'configurator__image7';
                    confPower.innerText = '225 л.с.';
                    confAcceleration.innerText = '8,6 с.';
                    confFuel.innerText = '7.1л/100км';
                    modelInput.innerText = 'X5';
                    localStorage.setItem("value", 'x5');
                    break;
                case 'x6': 
                    shopImage.src = shopImageLink + '/assets/img/x6_.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '247 л.с.';
                    confAcceleration.innerText = '8,3 с.';
                    confFuel.innerText = '7.5л/100км';
                    modelInput.innerText = 'X6';
                    localStorage.setItem("value", 'x6');
                    break;
                case 'x7': 
                    shopImage.src = shopImageLink + '/assets/img/x7_.jpg';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '285 л.с.';
                    confAcceleration.innerText = '8,5 с.';
                    confFuel.innerText = '7,8л/100км';
                    modelInput.innerText = 'X7';
                    localStorage.setItem("value", 'x7');
                    break;
                case 'ix': 
                    shopImage.src = shopImageLink + '/assets/img/ix m 60.jpg';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '325 л.с.';
                    confAcceleration.innerText = '7,0 с.';
                    confFuel.innerText = '7%/100км';
                    modelInput.innerText = 'iX';
                    localStorage.setItem("value", 'ix');
                    break;
                case 'ixm60': 
                    shopImage.src = shopImageLink + '/assets/img/ix m 60.jpg';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '425 л.с.';
                    confAcceleration.innerText = '6,3 с.';
                    confFuel.innerText = '10%/100км';
                    modelInput.innerText = 'iX M 60';
                    localStorage.setItem("value", 'ix m 60');
                    break;
                case '2coupe': 
                    shopImage.src = shopImageLink + '/assets/img/2 coupe.jpg';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '207 л.с.';
                    confAcceleration.innerText = '7,0 с.';
                    confFuel.innerText = '5.9л/100км';
                    modelInput.innerText = '2 Coupe';
                    localStorage.setItem("value", '2coupe');
                    break;
                case '2gc': 
                    shopImage.src = shopImageLink + '/assets/img/2 gc.jpeg';
                    shopImage.className = 'configurator__image5';
                    modelInput.innerText = '2 Gran Coupe';
                    confPower.innerText = '225 л.с.';
                    confAcceleration.innerText = '7,3 с.';
                    confFuel.innerText = '6.3л/100км';
                    localStorage.setItem("value", '2gc');
                    break;
                case '3': 
                    shopImage.src = shopImageLink + '/assets/img/3.png';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '265 л.с.';
                    confAcceleration.innerText = '6,0 с.';
                    confFuel.innerText = '7.0л/100км';
                    modelInput.innerText = '3';
                    localStorage.setItem("value", '3');
                    break;
                case '4coupe': 
                    shopImage.src = shopImageLink + "/assets/img/4.png";
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '334 л.с.';
                    confAcceleration.innerText = '4,7 с.';
                    confFuel.innerText = '6.5л/100км';
                    modelInput.innerText = '4 Coupe';
                    localStorage.setItem("value", '4coupe');
                    break;
                case '4cabrio': 
                    shopImage.src = shopImageLink + "/assets/img/4 cabrio.jpg";
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '326 л.с.';
                    confAcceleration.innerText = '5,0 с.';
                    confFuel.innerText = '6.5л/100км';
                    modelInput.innerText = '4 Cabrio';
                    localStorage.setItem("value", '4cabrio');
                    break;
                case '4gc': 
                    shopImage.src = shopImageLink + '/assets/img/4 gc.png';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '358 л.с.';
                    confAcceleration.innerText = '5,5 с.';
                    confFuel.innerText = '6.8л/100км';
                    modelInput.innerText = '4 Gran Coupe';
                    localStorage.setItem("value", '4gc');
                    break;
                case '5': 
                    shopImage.src = shopImageLink + '/assets/img/5.png';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '386 л.с.';
                    confAcceleration.innerText = '5,0 с.';
                    confFuel.innerText = '6.5л/100км';
                    modelInput.innerText = '5';
                    localStorage.setItem("value", '5');
                    break;
                case '6gt': 
                    shopImage.src = shopImageLink + '/assets/img/6 gt.png';
                    shopImage.className = 'configurator__image10';
                    confPower.innerText = '422 л.с.';
                    confAcceleration.innerText = '4,8 с.';
                    confFuel.innerText = '8.0л/100км';
                    modelInput.innerText = '6 GT';
                    localStorage.setItem("value", '6gt');;
                    break;
                case '7': 
                    shopImage.src = shopImageLink + '/assets/img/7.png';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '426 л.с.';
                    confAcceleration.innerText = '5,2 с.';
                    confFuel.innerText = '6.8л/100км';
                    modelInput.innerText = '7';
                    localStorage.setItem("value", '7');;
                    break;
                case '7long': 
                    shopImage.src = shopImageLink + '/assets/img/7x_.jpg';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '448 л.с.';
                    confAcceleration.innerText = '5,5 с.';
                    confFuel.innerText = '7.1л/100км';
                    modelInput.innerText = '7 Long';
                    localStorage.setItem("value", '7long');;
                    break;
                case '8coupe': 
                    shopImage.src = shopImageLink + '/assets/img/8 coupe.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '456 л.с.';
                    confAcceleration.innerText = '4,2 с.';
                    confFuel.innerText = '6.5л/100км';
                    modelInput.innerText = '8 Coupe';
                    localStorage.setItem("value", '8coupe');;
                    break;
                case '8cabrio': 
                    shopImage.src = shopImageLink + '/assets/img/8 cabrio.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '453 л.с.';
                    confAcceleration.innerText = '4,3 с.';
                    confFuel.innerText = '6.5л/100км';
                    modelInput.innerText = '8 Cabrio';
                    localStorage.setItem("value", '8cabrio');;
                case '8gc': 
                    shopImage.src = shopImageLink + '/assets/img/8 gc.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '474 л.с.';
                    confAcceleration.innerText = '4,3 с.';
                    confFuel.innerText = '6.8л/100км';
                    modelInput.innerText = '8 Gran Coupe';
                    localStorage.setItem("value", '8gc');;
                    break;
                case 'z4': 
                    shopImage.src = shopImageLink + '/assets/img/z4.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '389 л.с.';
                    confAcceleration.innerText = '4,8 с.';
                    confFuel.innerText = '5.9л/100км';
                    modelInput.innerText = 'Z4';
                    localStorage.setItem("value", 'z4');;
                    break;
                case 'm240i': 
                    shopImage.src = shopImageLink + '/assets/img/2 coupe.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '322 л.с.';
                    confAcceleration.innerText = '5,2 с.';
                    confFuel.innerText = '5.5л/100км';
                    modelInput.innerText = 'M240i xDrive Coupe';
                    localStorage.setItem("value", 'm240i');;
                    break;
                case 'm235i': 
                    shopImage.src = shopImageLink + '/assets/img/2 gc.jpeg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '346 л.с.';
                    confAcceleration.innerText = '5,0 с.';
                    confFuel.innerText = '5.8л/100км';
                    modelInput.innerText = 'M235i xDrive Gran Coupe';
                    localStorage.setItem("value", 'm235i');;
                    break;
                case 'm3': 
                    shopImage.src = shopImageLink + '/assets/img/m3 com.jfif';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '420 л.с.';
                    confAcceleration.innerText = '4,8 с.';
                    confFuel.innerText = '6.5л/100км';
                    modelInput.innerText = 'M3 Competition';
                    localStorage.setItem("value", 'm3');;
                    break;
                case 'm4': 
                    shopImage.src = shopImageLink + '/assets/img/m4 coupe.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '442 л.с.';
                    confAcceleration.innerText = '4,4 с.';
                    confFuel.innerText = '7.5л/100км';
                    modelInput.innerText = 'M4 Competition Coupe';
                    localStorage.setItem("value", 'm4');;
                    break;
                case 'm440i': 
                    shopImage.src = shopImageLink + '/assets/img/m4 cabrio.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '476 л.с.';
                    confAcceleration.innerText = '4,0 с.';
                    confFuel.innerText = '7.8л/100км';
                    modelInput.innerText = 'M440i xDrive Cabrio';
                    localStorage.setItem("value", 'm440i');;
                    break;
                case 'm5': 
                    shopImage.src = shopImageLink + '/assets/img/5.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '488 л.с.';
                    confAcceleration.innerText = '4,4 с.';
                    confFuel.innerText = '6.8л/100км';
                    modelInput.innerText = 'M5 Competition';
                    localStorage.setItem("value", 'm5');;
                    break;
                case 'm760li': 
                    shopImage.src = shopImageLink + '/assets/img/7x_.jpg';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '486 л.с.';
                    confAcceleration.innerText = '4,8 с.';
                    confFuel.innerText = '7.0л/100км';
                    modelInput.innerText = 'M760Li xDrive';
                    localStorage.setItem("value", 'm760li');;
                    break;
                case 'm8coupe': 
                    shopImage.src = shopImageLink + '/assets/img/8 coupe.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '494 л.с.';
                    confAcceleration.innerText = '4,0 с.';
                    confFuel.innerText = '8.5л/100км';
                    modelInput.innerText = 'M8 Coupe';
                    localStorage.setItem("value", 'm8coupe');;
                    break;
                case 'm8cabrio': 
                    shopImage.src = shopImageLink + '/assets/img/8 cabrio.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '494 л.с.';
                    confAcceleration.innerText = '4,1 с.';
                    confFuel.innerText = '8.5л/100км';
                    modelInput.innerText = 'M8 Cabrio';
                    localStorage.setItem("value", 'm8cabrio');;
                    break;
                case 'm8gc': 
                    shopImage.src = shopImageLink + '/assets/img/8 gc.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '502 л.с.';
                    confAcceleration.innerText = '4,2 с.';
                    confFuel.innerText = '8.7л/100км';
                    modelInput.innerText = 'M8 Gran Coupe';
                    localStorage.setItem("value", 'm8gc');;
                    break;
                case 'x5m': 
                    shopImage.src = shopImageLink + '/assets/img/x5 m.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '462 л.с.';
                    confAcceleration.innerText = '6,2 с.';
                    confFuel.innerText = '8.5л/100км';
                    modelInput.innerText = 'X5 M Competition';
                    localStorage.setItem("value", 'x5m');;
                    break;
                case 'x6m': 
                    shopImage.src = shopImageLink + '/assets/img/x6 m.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '481 л.с.';
                    confAcceleration.innerText = '6,0 с.';
                    confFuel.innerText = '9.0л/100км';
                    modelInput.innerText = 'X6 M Competition';
                    localStorage.setItem("value", 'x6m');;
                    break;
                case 'x7m': 
                    shopImage.src = shopImageLink + '/assets/img/x7_.jpg';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '512 л.с.';
                    confAcceleration.innerText = '6,2 с.';
                    confFuel.innerText = '9.5л/100км';
                    modelInput.innerText = 'X7 M50d';
                    localStorage.setItem("value", 'x7m');;
                    break;
                case 'ix m 60': 
                    shopImage.src = shopImageLink + '/assets/img/ix m 60.jpg';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '423 л.с.';
                    confAcceleration.innerText = '5,7 с.';
                    confFuel.innerText = '8%/100км';
                    modelInput.innerText = 'iX M 60';
                    localStorage.setItem("value", 'ix m 60');;
                    break;
                default:
                    break;
            }
        });
    });

    document.addEventListener('click', function(e) {
        if(e.target !== dropDownBtn)
        dropDownList.classList.remove('droplist-visible'); 
    });

    document.addEventListener('keydown', function(e) {
        if(e.key === 'Tab' || e.key === 'Escape'  )
        dropDownList.classList.remove('droplist-visible');
    });

    

});