/* Burger-menu */
const burgerMenu = document.querySelector('.header__burger');
const navList = document.querySelector('.header__container__list');

burgerMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

/* Course slider */
$(document).ready(function () {
  $('.course__card').slick({
    dots:  $('.course__card > div').length > 3,
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
          slidesToScroll: 2,
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

/* Comments slider */
$(document).ready(function () {
  $('.comments__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    fade: true,
    cssEase: 'linear'
  });
});

/* Mentors slider */
$(document).ready(function () {
  $('.mentors__cards').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  });
});

/* Page navigation */
document.querySelectorAll('.header__container__list a, .header__container__logo__link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = this.getAttribute('href').substr(1);
    if (blockID === 'header') {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      const element = document.getElementById(blockID);
      const headerHeight = document.querySelector('.header').offsetHeight;
      const yOffset = -headerHeight;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    }
  });
});

/* Registration form validation */
$(document).ready(function() {
  const $RegisterName = $('#registration__name');
  const $RegisterLastname = $('#registration__surname');
  const $RegisterChoise = $('#registration__interest');
  const $RegisterPhone = $('#registration__phone');
  const $RegisterEmail = $('#registration__email');
  const $RegisterCheckBox = $('#registration__checkbox');

  function validateField($field, regex) {
    if (!regex.test($field.val().trim())) {
      $field.css({
        border: '1px solid red',
        boxShadow: 'inset 0 0 5px red'
      });
      return false;
    } else {
      $field.css({
        border: '',
        boxShadow: ''
      });
      return true;
    }
  }

  $RegisterName.blur(function() {
    validateField($RegisterName, /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]/);
  });

  $RegisterLastname.blur(function() {
    validateField($RegisterLastname, /^[А-ЩЬЮЯҐЄІЇа-щьюяґєії]/);
  });

  $RegisterChoise.blur(function() {
    validateField($RegisterChoise, /^(developer|QA)$/);
  });

  $RegisterPhone.blur(function() {
    validateField($RegisterPhone, /\+38\s\d{3}\s\d{2}\s\d{2}\s\d{3}/);
  });
});


