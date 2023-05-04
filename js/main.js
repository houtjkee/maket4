const burgerMenu = document.querySelector('.header__burger');
const navList = document.querySelector('.header__container__list');

burgerMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

$(document).ready(function () {
  $('.course__card').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });
});
