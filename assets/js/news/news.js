const onlyNewsSlider = new Swiper('.js-onlynews-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


const newsMoreSlider = new Swiper('.js-newsmore-slider', {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 16,
        slidesPerView: 2,
      },
      420: {
        spaceBetween: 16,
        slidesPerView: 2,
      },
      768: {
        spaceBetween: 18,
        slidesPerView: 3,
     
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 4,
      },
    },
  });