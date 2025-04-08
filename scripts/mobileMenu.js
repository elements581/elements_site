document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.header__burger-button');
    const menuCloseBtn = document.querySelector('.close-menu');
    const menu = document.querySelector('.mobile__menu');

    if (burgerButton && menuCloseBtn && menu) {
        burgerButton.addEventListener('click', () => {
            menu.classList.toggle('is-open'); 
        });

        menuCloseBtn.addEventListener('click', () => {
            menu.classList.remove('is-open');
        });
    } else {
        console.error('Некоторые элементы не найдены!', { burgerButton, menuCloseBtn, menu });
    }
});