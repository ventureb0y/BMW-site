const cost = document.querySelector('.cart__price');
const carValue = localStorage.getItem("value");

switch (carValue) {
    case 'xm':
        cost.innerText = '18 560 000₽';
        break;
    case 'x1': 
        cost.innerText = '2 830 000₽';
        break;
    case 'x2': 
        cost.innerText = '2 970 000₽';
        break;
    case 'x3': 
        cost.innerText = '4 520 000₽';
        break;
    case 'x4': 
        cost.innerText = '4 850 000₽';
        break;
    case 'x5': 
        cost.innerText = '6 040 000₽';
        break;
    case 'x6': 
        cost.innerText = '7 100 000₽';
        break;
    case 'x7': 
        cost.innerText = '7 900 000₽';
        break;
    case 'ix': 
        cost.innerText = '7 740 000₽';
        break;
    case 'ix m 60': 
        cost.innerText = '8 270 000₽';
        break;
    case '2coupe': 
        cost.innerText = '3 370 000₽';
        break;
    case '2gc': 
        cost.innerText = '2 920 000₽';
        break;
    case '3': 
        cost.innerText = '3 820 000₽';
        break;
    case '4coupe': 
        cost.innerText = '3 740 000₽';
        break;
    case '4cabrio': 
        cost.innerText = '4 300 000₽';
        break;
    case '4gc': 
        cost.innerText = '3 850 000₽';
        break;
    case '5': 
        cost.innerText = '4 250 000₽';
        break;
    case '6gt': 
        cost.innerText = '5 040 000₽';
        break;
    case '7': 
        cost.innerText = '7 330 000₽';
        break;
    case '7long': 
        cost.innerText = '9 790 000₽';
        break;
    case '8coupe': 
        cost.innerText = '8 330 000₽';
        break;
    case '8cabrio': 
        cost.innerText = '9 370 000₽';
        break;
    case '8gc': 
        cost.innerText = '8 000 000₽';
        break;
    case 'z4': 
        cost.innerText = '4 280 000₽';
        break;
    case 'm240i': 
        cost.innerText = '4 640 000₽';
        break;
    case 'm235i': 
        cost.innerText = '4 480 000₽';
        break;
    case 'm3': 
        cost.innerText = '7 700 000₽';
        break;
    case 'm4': 
        cost.innerText = '7 800 000₽';
        break;
    case 'm440i': 
        cost.innerText = '5 940 000₽';
        break;
    case 'm5': 
        cost.innerText = '9 800 000₽';
        break;
    case 'm760li': 
        cost.innerText = '14 040 000₽';
        break;
    case 'm8coupe': 
        cost.innerText = '12 320 000₽';
        break;
    case 'm8cabrio': 
        cost.innerText = '13 300 000₽';
        break;
    case 'm8gc': 
        cost.innerText = '11 730 000₽';
        break;
    case 'x5m': 
       cost.innerText = '11 820 000₽';
        break;
    case 'x6m': 
        cost.innerText = '12 140 000₽';
        break;
    case 'x7m': 
        cost.innerText = '10 590 000₽';
        break;
    default:
        break;
}