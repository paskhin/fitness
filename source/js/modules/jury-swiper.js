export const initSwiper = () => {
  const buttonNext = document.querySelector('[data-button="jury-button-prev"]');
  const buttonPrev = document.querySelector('[data-button="jury-button-next"]');
  const slides = document.querySelectorAll('[data-jury="jury-item"]');
  const slidesArr = [...slides];
  const swiper = new window.Swiper('[data-jury="jury-slider"]', {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
        tabindex: 0,
      },
      768: {
        initialSlide: 2,
        slidesPerView: 2,
        spaceBetween: '5.7%',
        allowTouchMove: true,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: true,
      },
    },
  });
  slidesArr.forEach((slide) => {
    slide.setAttribute('tabindex', '0');
  });

};

