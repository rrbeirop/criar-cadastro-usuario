
//pop up busca //

const btn_busca = document.getElementById('btn-busca');
const busca = document.getElementById('busca');
const icon_busca = document.getElementById('icon-busca');
btn_busca.addEventListener('click', () => {
    busca.classList.toggle('ativo');
    if (busca.classList.contains('ativo')) {
        icon_busca.classList = 'fa-solid fa-close';
    } else {
        icon_busca.classList = 'fa-solid fa-search';
    }
});
// pop fim pop up busca //
w   

// pop up erro403 //
// const openPopup = document.getElementById('btn-popup'); somente id para abrir o popup
const abrirPopup = document.getElementById('fundo-popup');

// openPopup.addEventListener('click', () => {
//     fundoPopup.classList.add('ativo');
// });

function abrirPopup() {
    fundoPopup.classList.add('ativo');
}

function fecharPopup(){
    fundoPopup.classList.remove('ativo');

}

// popup erro403 


// popup login //
const openPopup = document.getElementById('btn-login');
const fundoPopup = document.getElementById('fundo-popup');

openPopup.addEventListener('click', () => {
    fundoPopup.classList.add('ativo');
});

fundoPopup.addEventListener('click', (event) => {
    if (event.target === fundoPopup) {
        fundoPopup.classList.remove('ativo');
    }
});

//fim popup login//


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
