document.addEventListener('DOMContentLoaded',() => {
    const slides = document.querySelectorAll('.slide')
    let indexCorreto = 0

    function showSlide(index) {
        slides[indexCorreto].classList.remove('active')
        slides[indexCorreto].classList.add('previous')
        indexCorreto = index;
        slides[indexCorreto].classList.remove('active')
        slides[indexCorreto].classList.add('previous')
    }
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => {
            showSlide(index)
        })
    })

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


