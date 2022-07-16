// табы на главной странице
let tabsBtn = document.querySelectorAll('.benefits__list-item');
let tabsItems = document.querySelectorAll('.tabs-item');
    tabsBtn.forEach(function(item) {
        item.addEventListener("click", function() {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId); 
            if (! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach (function(item) {
                item.classList.remove('active');
            });
            currentBtn.classList.add('active');
            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });
            currentTab.classList.add('active');
            }
        });
    });
// ================


// swiper главный
const posterSlider = new Swiper('.js-hero-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
        spaceBetween: 0,
        slidesPerView: 1,
        },
    },
});
// =============================


// swiper категории 
const categorySlider = new Swiper('.js-category-slider', {
    slidesPerView: 1.25,
    spaceBetween: 16,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-category-next",
      prevEl: ".swiper-button-category-prev",
    },
    breakpoints: {

      320: {
        spaceBetween: 16,
        slidesPerView: 1.25,
     
      },

      414: {
        spaceBetween: 16,
        slidesPerView: 1.6,
     
      },
      494: {
        spaceBetween: 18,
        slidesPerView: 2,
     
      },
      600: {
        spaceBetween: 18,
        slidesPerView: 3,
     
      },
      768: {
        spaceBetween: 18,
        slidesPerView: 3,
     
      },
      920: {
        spaceBetween: 32,
        slidesPerView: 4,
      },
    },
  });
// ==============================

// swiper рекомендации 
const recommendSlider = new Swiper('.js-recommended-slider', {
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 800,
    centerInsufficientSlides: true,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-recommended-next",
      prevEl: ".swiper-button-recommended-prev",
    },
    breakpoints: {

      320: {
        spaceBetween: 16,
        slidesPerView: 2,
     
      },

      414: {
        spaceBetween: 16,
        slidesPerView: 2,
     
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
     
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 4,
      },
    },
  });
// =====================

// swiper новости на главной 
const newsSlider = new Swiper('.js-news-slider', {
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-news-next",
      prevEl: ".swiper-button-news-prev",
    },
    breakpoints: {

      320: {
        spaceBetween: 16,
        slidesPerView: 2,
     
      },

      414: {
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
// =====================================

// swiper бренды на главной 
const brandsSlider = new Swiper('.js-brands-slider', {
    slidesPerView: 3.3,
    spaceBetween: 16,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 13,
        slidesPerView: 3.3,
     
      },

      414: {
        spaceBetween: 16,
        slidesPerView: 4,
     
      },
      768: {
        spaceBetween: 21,
        slidesPerView: 5,
     
      },
      1024: {
        spaceBetween: 21,
        slidesPerView: 9,
      },
    },
  });
// ================================