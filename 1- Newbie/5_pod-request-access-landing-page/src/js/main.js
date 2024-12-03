// Pics changes
let mainBg = document.querySelector('.main-bg');
let greenDots = document.querySelector('.green-dots');

function changePics () {
    if (window.innerWidth < 768) {
        mainBg.src = 'assets/images/1_mobile/image-host.jpg';
        
    } else if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        mainBg.src = 'assets/images/2_tablet/image-host.jpg';
        greenDots.src = 'assets/images/2_tablet/bg-dots.png';
        
    } else {
        mainBg.src = 'assets/images/3_desktop/image-host.jpg'
        greenDots.src = 'assets/images/3_desktop/bg-dots.png';
    }
}

changePics();
window.addEventListener('resize', changePics);




// E-mail validation
let form = document.querySelector('.main-inputs');
let inputText = document.querySelector('#main-email');
let submit = document.querySelector('#main-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = inputText.value;

    if (!regex.test(email)) {
        inputText.style.border = '2px solid red';
        
        let spanAlert = document.createElement('span');
        spanAlert.innerHTML = 'Oops! Please check your email';
        spanAlert.classList.add('spanAlert')

        form.appendChild(spanAlert);

    } else {
        form.submit();
    }
})
