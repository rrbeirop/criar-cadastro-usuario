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