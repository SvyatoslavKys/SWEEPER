
const burgerButton = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); 
const body = document.body;
function toggleMenu() {
    menu.classList.toggle('active'); 
    body.classList.toggle('no-scroll'); 
}
function closeMenu() {
    menu.classList.remove('active');
    body.classList.remove('no-scroll'); 
}
burgerButton.addEventListener('click', toggleMenu);
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
