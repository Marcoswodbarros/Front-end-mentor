let introContainer = document.querySelector('.intro');
let introImg = document.querySelector('.intro-img');
let complementTwo = document.querySelector('.complement-two');

function changePics() {
    if (window.innerWidth < 768) {
        introImg.src = 'assets/images/1_mobile/img-hero.png';
        complementTwo.style.backgroundImage = 'url(assets/images/1_mobile/img-footer.jpg)';

    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        introImg.src = 'assets/images/2_tablet/img-hero.png';
        complementTwo.style.backgroundImage = 'url(assets/images/2_tablet/img-footer.jpg)';

    } else {
        let desktopImgLeft = document.createElement('img');
        let desktopImgRight = document.createElement('img');

        desktopImgLeft.src = 'assets/images/3_desktop/intro-left.png';
        desktopImgRight.src = 'assets/images/3_desktop/intro-right.png';

        desktopImgLeft.classList.add('desktopImgLeft');
        desktopImgRight.classList.add('desktopImgRight');

        introContainer.appendChild(desktopImgLeft);
        introContainer.appendChild(desktopImgRight);

        complementTwo.style.backgroundImage = 'url(assets/images/3_desktop/img-footer.jpg)';
    }
}

changePics();
window.addEventListener('resize', changePics);