export const initSwiperReviews = () => {
  const reviewsbuttonPrev = document.querySelector('[data-button="reviews-button-prev"]');
  const reviewsbuttonNext = document.querySelector('[data-button="reviews-button-next"]');
  const slides = document.querySelectorAll('.reviews__item');
  const slidesArr = [...slides];
  const swiper = new window.Swiper('[data-reviews="reviews-slider"]', {
    loop: false,
    navigation: {
      nextEl: reviewsbuttonNext,
      prevEl: reviewsbuttonPrev,
    },
    breakpoints: {
      1366: {
        slidesPerView: 1,
        spaceBetween: 40,
        allowTouchMove: true,
        tabindex: 0,
      },
      768: {
        slidesPerView: 1,
        allowTouchMove: true,
        initialSlide: 2,
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

