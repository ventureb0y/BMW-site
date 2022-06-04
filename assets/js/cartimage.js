const cartImage = document.querySelector('.cart__image');
const cartValue = localStorage.getItem("value");
const cartImageLink='http://u124675.test-handyhost.ru/wp-content/themes/bmw';
const carsValue = localStorage.getItem("value");

switch (carsValue) {
    case 'xm': 
        cartImage.src = cartImageLink+"/assets/img/bmw iX offer.jpg";
        cartImage.className = 'configurator__image';
        break;
    case 'x1': 
        cartImage.src = cartImageLink+"/assets/img/x1_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'x2': 
        cartImage.src = cartImageLink+"/assets/img/x2_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'x3': 
        cartImage.src = cartImageLink+"/assets/img/x3_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'x4': 
        cartImage.src = cartImageLink+"/assets/img/x4_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'x5': 
        cartImage.src = cartImageLink+"/assets/img/x5.jpg"
        cartImage.className = 'configurator__image8';
        break;
    case 'x6': 
        cartImage.src = cartImageLink+"/assets/img/x6_.png";
        cartImage.className = 'configurator__image8';
        break;
    case 'x7': 
        cartImage.src = cartImageLink+"/assets/img/x7_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'ix': 
        cartImage.src = cartImageLink+"/assets/img/ix m 60.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'ix m 60': 
        cartImage.src = cartImageLink+"/assets/img/ix m 60.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case '2coupe': 
        cartImage.src = cartImageLink+"/assets/img/2 coupe.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case '2gc': 
        cartImage.src = cartImageLink+"/assets/img/2 gc.jpeg";
        cartImage.className = 'configurator__image8';
        break;
    case '3': 
        cartImage.src = cartImageLink+"/assets/img/3.png";
        cartImage.className = 'configurator__image8';
        break;
    case '4coupe': 
        cartImage.src = cartImageLink+"/assets/img/4.png";
        cartImage.className = 'configurator__image8';
        break;
    case '4 cabrio': 
        cartImage.src = cartImageLink+"/assets/img/4 cabrio.png";
        cartImage.className = 'configurator__image8';
        break;
    case '4gc': 
        cartImage.src = cartImageLink+"/assets/img/4 gc.png";
        cartImage.className = 'configurator__image8';
        break;
    case '5': 
        cartImage.src = cartImageLink+"/assets/img/5.png";
        cartImage.className = 'configurator__image8';
        break;
    case '6gt': 
        cartImage.src = cartImageLink+"/assets/img/6 gt.png";
        cartImage.className = 'configurator__image8';
        break;
    case '7': 
        cartImage.src = cartImageLink+"/assets/img/7.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case '7long': 
        cartImage.src = cartImageLink+"/assets/img/7x_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case '8coupe': 
        cartImage.src = cartImageLink+"/assets/img/8 coupe.png";
        cartImage.className = 'configurator__image8';
        break;
    case '8cabrio': 
        cartImage.src = cartImageLink+"/assets/img/8 cabrio.png";
        cartImage.className = 'configurator__image8';
        break;
    case '8gc': 
        cartImage.src = cartImageLink+"/assets/img/8 gc.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'z4': 
        cartImage.src = cartImageLink+"/assets/img/z4.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'm240i': 
        cartImage.src = cartImageLink+"/assets/img/2 coupe.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'm235i': 
        cartImage.src = cartImageLink+"/assets/img/2 gc.jpeg";
        cartImage.className = 'configurator__image8';
        break;
    case 'm3': 
        cartImage.src = cartImageLink+"/assets/img/m3 com.jfif";
        cartImage.className = 'configurator__image8';
        break;
    case 'm4': 
        cartImage.src = cartImageLink+"/assets/img/m4 coupe.png";
        cartImage.className = 'configurator__image8';
        break;
    case 'm440i': 
        cartImage.src = cartImageLink+"/assets/img/m4 cabrio.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'm5': 
        cartImage.src = cartImageLink+"/assets/img/5.png";
        cartImage.className = 'configurator__image8';
        break;
    case 'm760li': 
        cartImage.src = cartImageLink+"/assets/img/7x_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'm8coupe': 
        cartImage.src = cartImageLink+"/assets/img/8 coupe.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'm8cabrio': 
        cartImage.src = cartImageLink+"/assets/img/8 cabrio.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'm8gc': 
        cartImage.src = cartImageLink+"/assets/img/8 gc.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'x5m': 
       cartImage.src = cartImageLink+"/assets/img/x5 m.png";
        cartImage.className = 'configurator__image8';
        break;
    case 'x6m': 
        cartImage.src = cartImageLink+"/assets/img/x6 m.jpg";
        cartImage.className = 'configurator__image8';
        break;
    case 'x7m': 
        cartImage.src = cartImageLink+"/assets/img/x7_.jpg";
        cartImage.className = 'configurator__image8';
        break;
    default:
}