// Section - Intro
const cellphone = document.querySelector('.intro-cellphone');
const cellphoneLeftCircle = document.querySelector('.circles-left-tablet');
const cellphoneRightCircle = document.querySelector('.circles-right-tablet');



// Section - Test
const louis = document.querySelector('.test__img--person');
const circles = document.querySelector('.test__img--circles');


// Function
function changePics() {

    if (window.innerWidth < 768) {
        cellphone.src = '/src/assets/images/Intro/mobile-cellphone.png';
        cellphone.style.bottom = '-5.7rem';

        cellphoneLeftCircle.src = '';
        cellphoneRightCircle.src = '';

        louis.src = '/src/assets/images/Test/louis.png';
        circles.src = '/src/assets/images/Test/tablet-circles.png';
        
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        cellphone.src = '/src/assets/images/Intro/tablet-cellphone.png';
        cellphone.style.bottom = '-9rem';

        cellphoneLeftCircle.src = '/src/assets/images/Intro/circles-left-tablet.png';
        cellphoneRightCircle.src = '/src/assets/images/Intro/circles-right-tablet.png';
        cellphoneRightCircle.style.top = '8.5rem';

        louis.src = '/src/assets/images/Test/louis.png';
        circles.src = '/src/assets/images/Test/tablet-circles.png';
        
    } else {
        cellphone.src = '/src/assets/images/Intro/desktop-cellphone.png';
        cellphone.style.bottom = '-10rem';

        cellphoneLeftCircle.src = '/src/assets/images/Intro/circles-left-desktop.png';
        cellphoneRightCircle.src = '/src/assets/images/Intro/circles-right-desktop.png';
        cellphoneRightCircle.style.top = '10rem';

        louis.src = '/src/assets/images/Test/desktop-louis.png';
        circles.src = '/src/assets/images/Test/desktop-circles.png';
    }
}


// Calling function after the page start
changePics();


// Window Event
window.addEventListener('resize', changePics);
