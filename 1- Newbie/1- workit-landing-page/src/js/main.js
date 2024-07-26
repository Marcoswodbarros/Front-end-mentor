// Section - Intro
const cellphone = document.querySelector('.intro-cellphone');



// Section - Test
const louis = document.querySelector('.test__img--person');
const circles = document.querySelector('.test__img--circles');

function changePic() {

    if (window.innerWidth >= 1440) {

        cellphone.src = '/src/assets/images/Intro/desktop-cellphone.png';
        
        
        louis.src = '/src/assets/images/Test/desktop-louis.png';
        circles.src = '/src/assets/images/Test/desktop-circles.png';
        
    } else {
        cellphone.src = '/src/assets/images/Intro/mobile-cellphone.png';

        louis.src = '/src/assets/images/Test/louis.png';
        circles.src = '/src/assets/images/Test/tablet-circles.png';

    }
}


function changeCellphonePic() {

    if (window.innerWidth < 768) {
        cellphone.src = '/src/assets/images/Intro/mobile-cellphone.png';
        cellphone.style.bottom = '-5.7rem';
        
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        cellphone.src = '/src/assets/images/Intro/tablet-cellphone.png';
        cellphone.style.bottom = '-9rem';
        
    } else {
        cellphone.src = '/src/assets/images/Intro/desktop-cellphone.png';
        cellphone.style.bottom = '-10rem';
    }
}

changeCellphonePic();

window.addEventListener('resize', changeCellphonePic);
