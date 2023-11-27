const slidesList = document.querySelectorAll('[data-jury="jury-item"]');

export const slideClick = () => {
  slidesList.forEach((item) => {
    item.addEventListener('click', () => {
      slidesList.forEach((el) => {
        el.classList.remove('slide-active');
      });
      item.classList.add('slide-active');
    });
  });
};


export const removeClass = () => {
  window.addEventListener('click', (e) => {

    const checkedSlide = document.querySelector('.slide-active');
    const target = e.target;

    if (checkedSlide && !target.closest('.jury__list') && !target.closest('.jury__button--next') && !target.closest('.jury__button--prev')) {
      checkedSlide.classList.remove('slide-active');
    }
  });
};

