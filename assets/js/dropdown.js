const btnDrop = document.querySelector('#menu-btn-dropdown');
const menuDrop = document.querySelector('#menu-navegacao');

btnDrop.addEventListener('click', () => {
    menuDrop.classList.toggle('header__navegacao-ativo');
})