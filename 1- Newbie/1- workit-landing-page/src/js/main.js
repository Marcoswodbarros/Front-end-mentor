const louis = document.querySelector('.test__img--person');
const circles = document.querySelector('.test__img--circles');

function changePic() {

    if (window.innerWidth >= 1440) {
        louis.src = '/src/assets/images/Test/desktop-louis.png';
        circles.src = '/src/assets/images/Test/desktop-circles.png';

    } else {
        louis.src = '/src/assets/images/Test/louis.png';
        circles.src = '/src/assets/images/Test/circles.png';

    }
}

window.addEventListener('resize', changePic);
