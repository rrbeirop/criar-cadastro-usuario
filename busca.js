
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

//popup.js//
// const openPopup = document.getElementById('btn-popup'); somente id para abrir o popup
const fundoPopup = document.getElementById('fundo-popup');

// openPopup.addEventListener('click', () => {
//     fundoPopup.classList.add('ativo');
// });

function abrirPopup() {
    fundoPopup.classList.add('ativo');
}

function fecharPopup(){
    fundoPopup.classList.remove('ativo');

}
fundoPopup.addEventListener('click', (event) => {
    if (event.target === fundoPopup) {
        fundoPopup.classList.remove('ativo');
    }
});

// fim popup js//