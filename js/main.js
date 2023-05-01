const burgerMenu = document.querySelector('.header__burger');
const navList = document.querySelector('.header__container__list');

burgerMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});
