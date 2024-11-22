let mainBg = document.querySelector('.main-bg');

function changePics () {
    if (window.innerWidth < 768) {
        mainBg.src = 'assets/images/1_mobile/image-host.jpg';
        
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        mainBg.src = 'assets/images/2_tablet/image-host.jpg';
    }
}

changePics();
window.addEventListener('resize', changePics);