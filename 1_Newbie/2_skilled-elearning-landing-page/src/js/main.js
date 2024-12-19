const logo = document.querySelector('.header-logo');
const woman = document.querySelector('.intro-img');
const logoFooter = document.querySelector('.footer-container img');

function changePics () {
    if (window.innerWidth < 768) {
        logo.src = 'assets/images/header/logo.png';
        woman.src = 'assets/images/intro/mobile-woman.png';
        logoFooter.src = 'assets/images/footer/logo-skilled.png';
        
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        logo.src = 'assets/images/header/logo.png';
        woman.src = 'assets/images/intro/tablet-woman.png';
        logoFooter.src = 'assets/images/footer/logo-skilled.png';

    } else {
        logo.src = 'assets/images/header/desktop-logo.png';
        woman.src = 'assets/images/intro/desktop-woman.png';
        logoFooter.src = 'assets/images/footer/logo-skilled-desktop.png';
    }
}

changePics();
window.addEventListener('resize', changePics);