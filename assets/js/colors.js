const colors = document.querySelectorAll('.color');
const color1 = document.querySelector('.configurator__color1');
const color2 = document.querySelector('.configurator__color2');
const color3 = document.querySelector('.configurator__color3');
const color4 = document.querySelector('.configurator__color4');

document.addEventListener('click', function(e){
    switch (e.target) {
        case color1: 
        color1.classList.add('color-active');
        color2.classList.remove('color-active');
        color3.classList.remove('color-active');
        color4.classList.remove('color-active');

        break;
        case color2: 
        color1.classList.remove('color-active');
        color2.classList.add('color-active');
        color3.classList.remove('color-active');
        color4.classList.remove('color-active');
        break;
        case color3: 
        color1.classList.remove('color-active');
        color2.classList.remove('color-active');
        color3.classList.add('color-active');
        color4.classList.remove('color-active');
        break;
        case color4: 
        color1.classList.remove('color-active');
        color2.classList.remove('color-active');
        color3.classList.remove('color-active');
        color4.classList.add('color-active');
        break;
        default:
            break;
    }
    
});

