let introPic = document.querySelector('.intro-img-hero');
let readPic = document.querySelector('.read-img');
let averagePic = document.querySelector('.not-img');

function changePics () {
    if (window.innerWidth < 768) {
        introPic.src = 'assets/images/mobile/image-hero-mobile.webp';
        readPic.src = 'assets/images/mobile/image-read-together-mobile.webp';
        averagePic.src = 'assets/images/mobile/image-not-average-mobile.webp';

    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        introPic.src = 'assets/images/tablet/image-hero-tablet.webp';
        readPic.src = 'assets/images/tablet/image-read-together-tablet.webp';
        averagePic.src = 'assets/images/tablet/image-not-average-tablet.webp';

    } else {
        introPic.src = 'assets/images/desktop/image-hero-desktop.webp';
        readPic.src = 'assets/images/desktop/image-read-together-desktop.webp';
        averagePic.src = 'assets/images/desktop/image-not-average-desktop.webp';
    }
}

changePics();
window.addEventListener('resize', changePics);