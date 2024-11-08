let priceBg = document.querySelector('.price-bg');
let priceCellphone = document.querySelector('.price-cellphone');

function resizePics () {
    
    if (window.innerWidth < 768) {
        priceCellphone.src = 'assets/images/2_Price/bg-mobile.png';
        priceCellphone.src = 'assets/images/2_Price/cellphone-mobile.png';
        
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440){
        priceBg.src = 'assets/images/2_Price/bg-tablet.svg';
        priceCellphone.src = 'assets/images/2_Price/cellphone-tablet.png';
        
    } else {
        priceCellphone.src = 'assets/images/2_Price/bg-desktop.png';
        priceCellphone.src = 'assets/images/2_Price/cellphone-desktop.png';
    }
}

resizePics();
window.addEventListener('resize', resizePics);