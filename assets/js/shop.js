const shopCars = document.querySelectorAll('.shop__link');
const shopCars2 = document.querySelectorAll('.shop__link2');
const shopImage = document.querySelector('.configurator__image');
const shopValue = localStorage.getItem("value");
const shopImageLink = 'http://u124675.test-handyhost.ru/wp-content/themes/bmw';
const modelInput = document.querySelector('.configurator__body-model');
shopCars.forEach(function(shopCar){
    shopCar.addEventListener('click', function(){
        switch (shopCar.dataset.value){
            case 'x1':
                localStorage.setItem("value", 'x1');
                break;
            case 'x2':
                localStorage.setItem("value", 'x2');
                break;
            case 'x3':
                localStorage.setItem("value", 'x3');
                break;
            case 'x4':
                localStorage.setItem("value", 'x4');
                break;
            case 'x5':
                localStorage.setItem("value", 'x5');
                break;
            case 'x6':
                localStorage.setItem("value", 'x6');
                break;
            case 'x7':
                localStorage.setItem("value", 'x7');
                break;
            case 'ix':
                localStorage.setItem("value", 'ix');
                break;
            case 'ix m 60':
                localStorage.setItem("value", 'ix m 60');
                break;
            case '2coupe':
                localStorage.setItem("value", '2coupe');
                break;
            case '2gc':
                localStorage.setItem("value", '2gc');
                break;
            case '3':
                localStorage.setItem("value", '3');
                break;
            case '4coupe':
                localStorage.setItem("value", '4coupe');
                break;
            case '4cabrio':
                localStorage.setItem("value", '4cabrio');
                break;
            case '4gc':
                localStorage.setItem("value", '4gc');
                break;
            case '5':
                localStorage.setItem("value", '5');
                break;
            case '6gt':
                localStorage.setItem("value", '6gt');
                break;
            case '7':
                localStorage.setItem("value", '7');
                break;
            case '7long':
                localStorage.setItem("value", '7long');
                break;
            case '8coupe':
                localStorage.setItem("value", '8coupe');
                break;
            case '8cabrio':
                localStorage.setItem("value", '8cabrio');
                break;
            case '8gc':
                localStorage.setItem("value", '8gc');
                break;
            case 'z4':
                localStorage.setItem("value", 'z4');
                break;
            default:
                break;
            }
        });
    });
shopCars2.forEach(function(shopCar){
    shopCar.addEventListener('click', function(){
        switch (shopCar.dataset.value){
            case 'm240i':
                localStorage.setItem("value", 'm240i');
                break;
            case 'm235i':
                localStorage.setItem("value", 'm235i');
                break;
            case 'm3':
                localStorage.setItem("value", 'm3');
                break;
            case 'm4':
                localStorage.setItem("value", 'm4');
                break;
            case 'm440i':
                localStorage.setItem("value", 'm440i');
                break;
            case 'm5':
                localStorage.setItem("value", 'm5');
                break;
            case 'm760li':
                localStorage.setItem("value", 'm760li');
                break;
            case 'm8coupe':
                localStorage.setItem("value", 'm8coupe');
                break;
            case 'm8cabrio':
                localStorage.setItem("value", 'm8cabrio');
                break;
            case 'm8gc':
                localStorage.setItem("value", 'm8gc');
                break;
            case 'x5m':
                localStorage.setItem("value", 'x5m');
                break;
            case 'x6m':
                localStorage.setItem("value", 'x6m');
                break;
            case 'x7m':
                localStorage.setItem("value", 'x7m');
                break;
            case 'ix m 60':
                localStorage.setItem("value", 'ix m 60');
                break;
            default:
                break;
        }
    });
});

    switch (shopValue){
            case 'xm':  
                    shopImage.src = shopImageLink + "/assets/img/bmw iX offer.jpg";
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '355 ??.??.';
                    confAcceleration.innerText = '6,6 ??.';
                    confFuel.innerText = '5%/100????';
                    modelInput.innerText = 'XM';
                    //localStorage.clear;
                    break;
            case 'x1':  
                    shopImage.src = shopImageLink + "/assets/img/x1_.jpg";
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '135 ??.??.';
                    confAcceleration.innerText = '9,6 ??.';
                    confFuel.innerText = '6.5??/100????';
                    modelInput.innerText = 'X1';
                    //localStorage.clear;
                    break;
            case 'x2': 
                    shopImage.src = shopImageLink + "/assets/img/x2_.jpg";
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '140 ??.??.';
                    confAcceleration.innerText = '9,6 ??.';
                    confFuel.innerText = '6.3??/100????';
                    modelInput.innerText = 'X2';
                    //localStorage.clear;
                    break;
                case 'x3': 
                    shopImage.src = shopImageLink + "/assets/img/x3_.jpg";
                    shopImage.className = 'configurator__image7';
                    confPower.innerText = '168 ??.??.';
                    confAcceleration.innerText = '9,4 ??.';
                    confFuel.innerText = '6.7??/100????';
                    modelInput.innerText = 'X3';
                    //localStorage.clear;
                    break;
                case 'x4': 
                    shopImage.src = shopImageLink + "/assets/img/x4_.jpg";
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '195 ??.??.';
                    confAcceleration.innerText = '9,0 ??.';
                    confFuel.innerText = '6.9??/100????';
                    modelInput.innerText = 'X4';
                    //localStorage.clear;
                    break;
                case 'x5': 
                    shopImage.src = shopImageLink + '/assets/img/x5_.jpg';
                    shopImage.className = 'configurator__image7';
                    confPower.innerText = '225 ??.??.';
                    confAcceleration.innerText = '8,6 ??.';
                    confFuel.innerText = '7.1??/100????';
                    modelInput.innerText = 'X5';
                    //localStorage.clear;
                    break;
                case 'x6': 
                    shopImage.src = shopImageLink + '/assets/img/x6_.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '247 ??.??.';
                    confAcceleration.innerText = '8,3 ??.';
                    confFuel.innerText = '7.5??/100????';
                    modelInput.innerText = 'X6';
                    //localStorage.clear;
                    break;
                case 'x7': 
                    shopImage.src = shopImageLink + '/assets/img/x7_.jpg';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '285 ??.??.';
                    confAcceleration.innerText = '8,5 ??.';
                    confFuel.innerText = '7,8??/100????';
                    modelInput.innerText = 'X7';
                    //localStorage.clear;
                    break;
                case 'ix': 
                    shopImage.src = shopImageLink + '/assets/img/ix m 60.jpg';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '325 ??.??.';
                    confAcceleration.innerText = '7,0 ??.';
                    confFuel.innerText = '7%/100????';
                    modelInput.innerText = 'iX';
                   // localStorage.clear;
                    break;
                case 'ixm60': 
                    shopImage.src = shopImageLink + '/assets/img/ix m 60.jpg';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '425 ??.??.';
                    confAcceleration.innerText = '6,3 ??.';
                    confFuel.innerText = '10%/100????';
                    modelInput.innerText = 'iX M 60';
                    //localStorage.clear;
                    break;
                case '2coupe': 
                    shopImage.src = shopImageLink + '/assets/img/2 coupe.jpg';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '207 ??.??.';
                    confAcceleration.innerText = '7,0 ??.';
                    confFuel.innerText = '5.9??/100????';
                    modelInput.innerText = '2 Coupe';
                    //localStorage.clear;
                    break;
                case '2gc': 
                    shopImage.src = shopImageLink + '/assets/img/2 gc.jpeg';
                    shopImage.className = 'configurator__image5';
                    modelInput.innerText = '2 Gran Coupe';
                    confPower.innerText = '225 ??.??.';
                    confAcceleration.innerText = '7,3 ??.';
                    confFuel.innerText = '6.3??/100????';
                    //localStorage.clear;
                    break;
                case '3': 
                    shopImage.src = shopImageLink + '/assets/img/3.png';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '265 ??.??.';
                    confAcceleration.innerText = '6,0 ??.';
                    confFuel.innerText = '7.0??/100????';
                    modelInput.innerText = '3';
                    //localStorage.clear;
                    break;
                case '4coupe': 
                    shopImage.src = shopImageLink + "/assets/img/4.png";
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '334 ??.??.';
                    confAcceleration.innerText = '4,7 ??.';
                    confFuel.innerText = '6.5??/100????';
                    modelInput.innerText = '4 Coupe';
                    //localStorage.clear;
                    break;
                case '4cabrio': 
                    shopImage.src = shopImageLink + "/assets/img/4 cabrio.jpg";
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '326 ??.??.';
                    confAcceleration.innerText = '5,0 ??.';
                    confFuel.innerText = '6.5??/100????';
                    modelInput.innerText = '4 Cabrio';
                    //localStorage.clear;
                    break;
                case '4gc': 
                    shopImage.src = shopImageLink + '/assets/img/4 gc.png';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '358 ??.??.';
                    confAcceleration.innerText = '5,5 ??.';
                    confFuel.innerText = '6.8??/100????';
                    modelInput.innerText = '4 Gran Coupe';
                    //localStorage.clear;
                    break;
                case '5': 
                    shopImage.src = shopImageLink + '/assets/img/5.png';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '386 ??.??.';
                    confAcceleration.innerText = '5,0 ??.';
                    confFuel.innerText = '6.5??/100????';
                    modelInput.innerText = '5';
                    //localStorage.clear;
                    break;
                case '6gt': 
                    shopImage.src = shopImageLink + '/assets/img/6 gt.png';
                    shopImage.className = 'configurator__image10';
                    confPower.innerText = '422 ??.??.';
                    confAcceleration.innerText = '4,8 ??.';
                    confFuel.innerText = '8.0??/100????';
                    modelInput.innerText = '6 GT';
                    //localStorage.clear;
                    break;
                case '7': 
                    shopImage.src = shopImageLink + '/assets/img/7.png';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '426 ??.??.';
                    confAcceleration.innerText = '5,2 ??.';
                    confFuel.innerText = '6.8??/100????';
                    modelInput.innerText = '7';
                    //localStorage.clear;
                    break;
                case '7long': 
                    shopImage.src = shopImageLink + '/assets/img/7x_.jpg';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '448 ??.??.';
                    confAcceleration.innerText = '5,5 ??.';
                    confFuel.innerText = '7.1??/100????';
                    modelInput.innerText = '7 Long';
                   // localStorage.clear;
                    break;
                case '8coupe': 
                    shopImage.src = shopImageLink + '/assets/img/8 coupe.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '456 ??.??.';
                    confAcceleration.innerText = '4,2 ??.';
                    confFuel.innerText = '6.5??/100????';
                    modelInput.innerText = '8 Coupe';
                    //localStorage.clear;
                    break;
                case '8cabrio': 
                    shopImage.src = shopImageLink + '/assets/img/8 cabrio.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '453 ??.??.';
                    confAcceleration.innerText = '4,3 ??.';
                    confFuel.innerText = '6.5??/100????';
                    modelInput.innerText = '8 Coupe';
                   // localStorage.clear;
                case '8gc': 
                    shopImage.src = shopImageLink + '/assets/img/8 gc.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '474 ??.??.';
                    confAcceleration.innerText = '4,3 ??.';
                    confFuel.innerText = '6.8??/100????';
                    modelInput.innerText = '8 Gran Coupe';
                   // localStorage.clear;
                    break;
                case 'z4': 
                    shopImage.src = shopImageLink + '/assets/img/z4.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '389 ??.??.';
                    confAcceleration.innerText = '4,8 ??.';
                    confFuel.innerText = '5.9??/100????';
                    modelInput.innerText = 'Z4';
                    //localStorage.clear;
                    break;
                case 'm240i': 
                    shopImage.src = shopImageLink + '/assets/img/2 coupe.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '322 ??.??.';
                    confAcceleration.innerText = '5,2 ??.';
                    confFuel.innerText = '5.5??/100????';
                    modelInput.innerText = 'M240i xDrive Coupe';
                   // localStorage.clear;
                    break;
                case 'm235i': 
                    shopImage.src = shopImageLink + '/assets/img/2 gc.jpeg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '346 ??.??.';
                    confAcceleration.innerText = '5,0 ??.';
                    confFuel.innerText = '5.8??/100????';
                    modelInput.innerText = 'M235i xDrive Gran Coupe';
                    //localStorage.clear;
                    break;
                case 'm3': 
                    shopImage.src = shopImageLink + '/assets/img/m3 com.jfif';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '420 ??.??.';
                    confAcceleration.innerText = '4,8 ??.';
                    confFuel.innerText = '6.5??/100????';
                    modelInput.innerText = 'M3 Competition';
                    //localStorage.clear;
                    break;
                case 'm4': 
                    shopImage.src = shopImageLink + '/assets/img/m4 coupe.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '442 ??.??.';
                    confAcceleration.innerText = '4,4 ??.';
                    confFuel.innerText = '7.5??/100????';
                    modelInput.innerText = 'M4 Competition Coupe';
                   // localStorage.clear;
                    break;
                case 'm440i': 
                    shopImage.src = shopImageLink + '/assets/img/m4 cabrio.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '476 ??.??.';
                    confAcceleration.innerText = '4,0 ??.';
                    confFuel.innerText = '7.8??/100????';
                    modelInput.innerText = 'M440i xDrive Cabrio';
                   // localStorage.clear;
                    break;
                case 'm5': 
                    shopImage.src = shopImageLink + '/assets/img/5.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '488 ??.??.';
                    confAcceleration.innerText = '4,4 ??.';
                    confFuel.innerText = '6.8??/100????';
                    modelInput.innerText = 'M5 Competition';
                    //localStorage.clear;
                    break;
                case 'm760li': 
                    shopImage.src = shopImageLink + '/assets/img/7x_.jpg';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '486 ??.??.';
                    confAcceleration.innerText = '4,8 ??.';
                    confFuel.innerText = '7.0??/100????';
                    modelInput.innerText = 'M760Li xDrive';
                    //localStorage.clear;
                    break;
                case 'm8coupe': 
                    shopImage.src = shopImageLink + '/assets/img/8 coupe.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '494 ??.??.';
                    confAcceleration.innerText = '4,0 ??.';
                    confFuel.innerText = '8.5??/100????';
                    modelInput.innerText = 'M8 Coupe';
                    //localStorage.clear;
                    break;
                case 'm8cabrio': 
                    shopImage.src = shopImageLink + '/assets/img/8 cabrio.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '494 ??.??.';
                    confAcceleration.innerText = '4,1 ??.';
                    confFuel.innerText = '8.5??/100????';
                    modelInput.innerText = 'M8 Cabrio';
                    //localStorage.clear;
                    break;
                case 'm8gc': 
                    shopImage.src = shopImageLink + '/assets/img/8 gc.jpg';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '502 ??.??.';
                    confAcceleration.innerText = '4,2 ??.';
                    confFuel.innerText = '8.7??/100????';
                    modelInput.innerText = 'M8 Gran Coupe';
                    //localStorage.clear;
                    break;
                case 'x5m': 
                    shopImage.src = shopImageLink + '/assets/img/x5 m.png';
                    shopImage.className = 'configurator__image5';
                    confPower.innerText = '462 ??.??.';
                    confAcceleration.innerText = '6,2 ??.';
                    confFuel.innerText = '8.5??/100????';
                    modelInput.innerText = 'X5 M Competition';
                    //localStorage.clear;
                    break;
                case 'x6m': 
                    shopImage.src = shopImageLink + '/assets/img/x6 m.png';
                    shopImage.className = 'configurator__image8';
                    confPower.innerText = '481 ??.??.';
                    confAcceleration.innerText = '6,0 ??.';
                    confFuel.innerText = '9.0??/100????';
                    modelInput.innerText = 'X6 M Competition';
                    //localStorage.clear;
                    break;
                case 'x7m': 
                    shopImage.src = shopImageLink + '/assets/img/x7_.jpg';
                    shopImage.className = 'configurator__image';
                    confPower.innerText = '512 ??.??.';
                    confAcceleration.innerText = '6,2 ??.';
                    confFuel.innerText = '9.5??/100????';
                    modelInput.innerText = 'X7 M50d';
                    //localStorage.clear;
                    break;
                case 'ix m 60': 
                    shopImage.src = shopImageLink + '/assets/img/ix m 60.jpg';
                    shopImage.className = 'configurator__image9';
                    confPower.innerText = '423 ??.??.';
                    confAcceleration.innerText = '5,7 ??.';
                    confFuel.innerText = '8%/100????';
                    modelInput.innerText = 'iX M 60';
                    //localStorage.clear;
                    break;
                default:
                    shopImage.src = shopImageLink + "/assets/img/4 cabrio.jpg";
                    modelInput.innerText = '4 Cabrio';
                    //localStorage.clear;
                    break;
    }