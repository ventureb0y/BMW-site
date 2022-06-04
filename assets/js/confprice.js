const cost2 = document.querySelector('.configurator__price');
const carzValue = localStorage.getItem("value");

switch (carzValue) {
    case 'xm':
        cost2.innerText = '18 560 000₽';
        break;
    case 'x1': 
        cost2.innerText = '2 830 000₽';
        break;
    case 'x2': 
        cost2.innerText = '2 970 000₽';
        break;
    case 'x3': 
        cost2.innerText = '4 520 000₽';
        break;
    case 'x4': 
        cost2.innerText = '4 850 000₽';
        break;
    case 'x5': 
        cost2.innerText = '6 040 000₽';
        break;
    case 'x6': 
        cost2.innerText = '7 100 000₽';
        break;
    case 'x7': 
        cost2.innerText = '7 900 000₽';
        break;
    case 'ix': 
        cost2.innerText = '7 740 000₽';
        break;
    case 'ix m 60': 
        cost2.innerText = '8 270 000₽';
        break;
    case '2coupe': 
        cost2.innerText = '3 370 000₽';
        break;
    case '2gc': 
        cost2.innerText = '2 920 000₽';
        break;
    case '3': 
        cost2.innerText = '3 820 000₽';
        break;
    case '4coupe': 
        cost2.innerText = '3 740 000₽';
        break;
    case '4cabrio': 
        cost2.innerText = '4 300 000₽';
        break;
    case '4gc': 
        cost2.innerText = '3 850 000₽';
        break;
    case '5': 
        cost2.innerText = '4 250 000₽';
        break;
    case '6gt': 
        cost2.innerText = '5 040 000₽';
        break;
    case '7': 
        cost2.innerText = '7 330 000₽';
        break;
    case '7long': 
        cost2.innerText = '9 790 000₽';
        break;
    case '8coupe': 
        cost2.innerText = '8 330 000₽';
        break;
    case '8cabrio': 
        cost2.innerText = '9 370 000₽';
        break;
    case '8gc': 
        cost2.innerText = '8 000 000₽';
        break;
    case 'z4': 
        cost2.innerText = '4 280 000₽';
        break;
    case 'm240i': 
        cost2.innerText = '4 640 000₽';
        break;
    case 'm235i': 
        cost2.innerText = '4 480 000₽';
        break;
    case 'm3': 
        cost2.innerText = '7 700 000₽';
        break;
    case 'm4': 
        cost2.innerText = '7 800 000₽';
        break;
    case 'm440i': 
        cost2.innerText = '5 940 000₽';
        break;
    case 'm5': 
        cost2.innerText = '9 800 000₽';
        break;
    case 'm760li': 
        cost2.innerText = '14 040 000₽';
        break;
    case 'm8coupe': 
        cost2.innerText = '12 320 000₽';
        break;
    case 'm8cabrio': 
        cost2.innerText = '13 300 000₽';
        break;
    case 'm8gc': 
        cost2.innerText = '11 730 000₽';
        break;
    case 'x5m': 
       cost2.innerText = '11 820 000₽';
        break;
    case 'x6m': 
        cost2.innerText = '12 140 000₽';
        break;
    case 'x7m': 
        cost2.innerText = '10 590 000₽';
        break;
    default:
        break;
}