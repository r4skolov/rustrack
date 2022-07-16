const productionSlider = new Swiper('.js-production-slider', {
    slidesPerView: 1.1,
    spaceBetween: 16,
    speed: 800,
    centerInsufficientSlides: true,
    loop: false,
    breakpoints: {
      320: {
        spaceBetween: 8,
        slidesPerView:2.4,
     
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 2.3,
     
      },
      1120: {
        spaceBetween: 24,
        slidesPerView: 4,
      },
    },
});