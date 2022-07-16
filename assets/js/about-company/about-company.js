const aboutSlider = document.querySelector('.js-about-slider');

  let mySwiper;

  function mobileSwiper() {
    if (window.innerWidth >= 768 && aboutSlider.dataset.mobile == 'false') {
      mySwiper = new Swiper (aboutSlider, {
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 800,
        centerInsufficientSlides: true,
        navigation: {
          nextEl: ".swiper-button-about-next",
          prevEl: ".swiper-button-about-prev",
        },
        breakpoints: {
          320: {
            spaceBetween: 0,
            slidesPerView: 1,
            loop: false,
          },
          768: {
            spaceBetween: 18,
            slidesPerView: 3,
            loop: true,
          },
          1024: {
            spaceBetween: 24,
            slidesPerView: 4,
            loop: true,
          },
        },
      });
      aboutSlider.dataset.mobile = 'true';
    }
  
    if (window.innerWidth < 768) {
      aboutSlider.dataset.mobile = 'false';
  
      if (aboutSlider.classList.contains('swiper-container-initialized')) {
        mySwiper.destroy();
      }
    }
  };
  
  mobileSwiper();
  
  window.addEventListener('resize', () => {
    mobileSwiper();
  });