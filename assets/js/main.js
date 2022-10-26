window.addEventListener("DOMContentLoaded", function() {
  const swiper = new Swiper('.site-header-slider__content', {
    loop: true,
    navigation: {
      nextEl: '.site-header-slider__arrow'
    },
    slidesPerView: "auto"
  });

  const cardSlider = new Swiper('.card-slider .swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    },
  });

  const goodsSlider = new Swiper('.goods-slider .swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper__next',
      prevEl: '.swiper__prev',
    },

    breakpoints: {
      900: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      1320: {
        slidesPerView: 3
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 30
      }

    }
  });

  
});