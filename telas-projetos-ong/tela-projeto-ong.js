document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide')
    const btns = document.querySelectorAll('.btns-slider button')
    let indexCorreto = 0

    function showSlide(index) {
        slides[indexCorreto].classList.remove('active')
        btns[indexCorreto].classList.remove('active')
        indexCorreto = index;
        slides[indexCorreto].classList.add('active')
        btns[indexCorreto].classList.add('active')
    }
    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            showSlide(index)
        })
    })
    showSlide(0)
})

function mudaMenu() {
    let hbgMenu = document.querySelector('#hamburger-menu');
    let btnHamburger = document.querySelector("#botao-hamburger");
    hbgMenu.style.display = 'flex';
    hbgMenu.id = 'hamburger-menu-slide';
    btnHamburger.style.opacity = 0;
}
function esqueciSenha() {
    let painelSenha = document.querySelector('#password-recovery');
    painelSenha.style.display = 'flex';
}

//Carousel//

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function changeSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * 100;

    document.querySelector('.carousel-imgs').style.transform = `translateX(${offset}%)`; // Corrigido aqui
}

setInterval(changeSlide, 3000);

//fim carousel//