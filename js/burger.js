const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.header__nav');
const headerNavClose = document.querySelector('.header__nav-close');

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('d__block');
});


headerNavClose.addEventListener('click', () => {
    headerNav.classList.toggle('headerNavActive');
});