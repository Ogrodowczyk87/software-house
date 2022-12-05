const menuOverlay = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.mobile-menu__vsg');
const openMenuBtn = document.querySelector('.header-nav__icon');

openMenuBtn.addEventListener('click', e => {
    menuOverlay.classList.remove('d-none');
});

closeMenuButton.addEventListener('click', e => {
    menuOverlay.classList.add('d-none');
});