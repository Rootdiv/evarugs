'use strict';
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  loop: true,
  speed: 400,
  spaceBetween: 70,
  centeredSlides: true,
  slideToClickedSlide: true,
  toggle: true,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
});

const body = document.querySelector('body');
const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main-display__button');

buttonModal.addEventListener('click', () => {
  modalWindow.classList.add('active');
  body.classList.add('lock');
});

modalWindow.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.closest('.modal__inner')) {
    modalWindow.classList.remove('active');
    body.classList.remove('lock');
  }
});
