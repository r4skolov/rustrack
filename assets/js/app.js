(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


  document.body.onload = () => {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        if (!preloader.classList.contains("done")) {
          preloader.classList.add("done");
          document.body.classList.remove('scroll');
        }
    }, 1000)
  }


// ========== фикс шапки
let header = document.querySelector('.header');
window.onscroll = () => {
  let Y = window.scrollY;
  if (Y>250) {
    header.classList.add('fixed-block');
    header.classList.add('header__fixed');
    document.body.style.paddingTop = 131 + 'px';
  } else if (Y < 100) {
    header.classList.remove('header__fixed');
    header.classList.remove('fixed-block');
    document.body.style.paddingTop = 0 + 'px';
  }
}
// =================================



// ==================== burger
const burgerMenu = (() => {
    function disableScroll() {
        let pagePosition = window.scrollY;
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        let headerTwo = document.querySelector('.fixed-block');
        let Y = window.scrollY;
        document.body.classList.add('scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.paddingRight = paddingOffset;
       
        if (Y > 250) {
          headerTwo.style.paddingRight = paddingOffset;
        }
      }
    
      function enableScroll() {
     
        let headerTwo = document.querySelector('.fixed-block');
        let Y = window.scrollY;
        document.body.classList.remove('scroll');

        document.body.removeAttribute('data-position');
        document.body.style.paddingRight = '0px';
        if (Y > 250) {
          headerTwo.style.paddingRight = '0px';
        }
        
      }
    
      const burger = document.querySelectorAll('.js-menu');
      const menu = document.querySelector('.header__menu');
    
     burger.forEach(function(item) {
        item.addEventListener('click', (event) => {
          let currentBtn = event.target.closest('button');
          
    
          burger.forEach(el => {
            if (el.querySelector('button') !== currentBtn) {
              el.querySelector('button').classList.remove('burger--active');
              enableScroll();
            }
          });
        
        
        if (menu.classList.contains('header__menu--active') && menu.classList.contains(event.target.closest('[data-action]').dataset.action)) {
          menu.classList.remove('header__menu--active');
          currentBtn.classList.remove('burger--active');
          menu.classList.remove(event.target.closest('[data-action]').dataset.action);
        } else {
          menu.classList.add('header__menu--active');
          currentBtn.classList.add('burger--active');
        }
      
    
          if (event.target.closest('[data-action]').dataset.action === 'about-menu') {
            menu.classList.add('about-menu');
            menu.classList.remove('media');
            menu.classList.remove('all-menu');
          }
     
          if (event.target.closest('[data-action]').dataset.action  === 'media') {
            menu.classList.add('media');
            menu.classList.remove('about-menu')
            menu.classList.remove('all');
          }
    
          if (event.target.closest('[data-action]').dataset.action === 'all') {
            menu.classList.remove('media');
            menu.classList.remove('about-menu')
            menu.classList.add('all');
          }
        
          if (currentBtn.classList.contains('burger--active')) {
            disableScroll();
          } else {
            enableScroll();
          }
        }); 
      })
})();
// =============================

// header mob accordion

document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.header__menu-item');//находим все аккардионы

    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.header__menu-item__name');//
            const content = self.querySelector('.header__menu-list');//то что будем открывать

            self.classList.toggle('open');

            // если открыт аккордеон
            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});
   

// ===================

//==================время работы в хедере
let timeName = document.querySelector('.header__timework-name');
let timeItem = document.querySelector('.header__timework-wrap')
timeName.addEventListener('click' , () => {
  timeItem.classList.toggle('active');
});
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header__timework-wrap') && !e.target.closest('.header__timework-wrap')  && !e.target.classList.contains('header__timework-name')) {
    timeItem.classList.remove('active');
  }
});
// ============================


//============кнопка поиска в моб меню
let btnSearch = document.querySelector('.btn__search');
let mobSearch = document.querySelector('.header__search');
btnSearch.addEventListener('click' , () => {
  mobSearch.classList.add('active');
});
document.addEventListener('click', (e) => {
  if (!e.target.classList.contains('header__search') && !e.target.closest('.header__search')  && !e.target.classList.contains('btn__search')) {
    mobSearch.classList.remove('active');
  }
});
// =============================

//=======================попапы
const showPopupBtns = document.querySelectorAll('.js-show-popup');
const popups = document.querySelectorAll('.js-popup');
const body = document.body;
const overlay = document.querySelector('.js-overlay');

const CLASS_ACTIVE = 'active';
const CLASS_OVERFLOW = '_scroll-disabled';


 
  const showPopup = (event) => {
    const openBtn = event.target.closest('.js-show-popup');
    const activePopup = document.querySelector('.js-popup.active');
    const targetPopup = document.querySelector(`[data-popup=${openBtn.dataset.trigger}]`);


    if (activePopup) {
      activePopup.classList.remove(CLASS_ACTIVE);
    
    }

    if (openBtn.dataset.tab) {
      targetPopup.querySelector(`[data-tab="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTIVE);
      targetPopup.querySelector(`[data-content="${openBtn.dataset.tab}"]`).classList.add(CLASS_ACTIVE);
     
    }

    targetPopup.classList.add(CLASS_ACTIVE);
    body.classList.add(CLASS_OVERFLOW);
    overlay.classList.add(CLASS_ACTIVE);
    
  };

  const hidePopup = (activePopup) => {
    if (!activePopup) {
      return;
    }
    body.classList.remove(CLASS_OVERFLOW);
    overlay.classList.remove(CLASS_ACTIVE);
    activePopup.classList.remove(CLASS_ACTIVE);
    document.body.style.paddingRight = '0px';

    if (document.querySelector('.active[data-content]') && document.querySelector('.active[data-tab]')) {
      document.querySelector('.active[data-content]').classList.remove(CLASS_ACTIVE);
      document.querySelector('.active[data-tab]').classList.remove(CLASS_ACTIVE);
    }
  };

  const showPopupInit = () => {
    if (showPopupBtns.length) {
      showPopupBtns.forEach((opener) => {
        opener.addEventListener('click', (event) => {
          let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
          document.body.style.paddingRight = paddingOffset;
          let headerTwo = document.querySelector('.fixed-block');
          let Y = window.scrollY;
          if (Y > 250) {
            headerTwo.style.paddingRight = paddingOffset;
          }
          showPopup(event);
        });
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        hidePopup(document.querySelector('.js-popup.active'));
        let headerTwo = document.querySelector('.fixed-block');
          let Y = window.scrollY;
          if (Y > 250) {
            headerTwo.style.paddingRight = '0px';
          }
      });
    }
    if (popups.length) {
      popups.forEach((popup) => {
        popup.addEventListener('click', (event) => {
          const closeBtn = event.target.closest('.js-popup-close');
          
          if (!closeBtn) {
            return;
          }
          hidePopup(popup);
          let headerTwo = document.querySelector('.fixed-block');
          let Y = window.scrollY;
          if (Y > 250) {
            headerTwo.style.paddingRight = '0px';
          }
        });
      });
    }
  };

    if (popups.length) {
        showPopupInit();
    }
// ============================

// inputmask
Inputmask({
    mask: '+7 (999) 999-99-99',
  }).mask('input[data-mask="tel"]');

  Inputmask({
    mask: '*{3,20}@*{3,20}.*{2,7}',
  }).mask('input[data-mask="email"]');
// ========================

// footer mobile accordion
 
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.footer__nav-item');
    accordions.forEach(el => {
        el.addEventListener('click', (e) => {
            const self = e.currentTarget;
            const control = self.querySelector('.footer__nav-control');//
            const content = self.querySelector('.footer__nav-list');

            self.classList.toggle('open');

            if (self.classList.contains('open')) {
                control.setAttribute('aria-expanded', true);
                content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                control.setAttribute('aria-expanded', false);
                content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
            }
        });
    });
});

// =============

// добавить в фовариты клик 
const btnFavorite = document.querySelectorAll('.btn-favorite');
if (btnFavorite) {
    btnFavorite.forEach(function(item) {
        item.addEventListener("click", function() {
            
            item.classList.toggle('active');
        });
    });
}
// ==========================


// swiper похожие товар 
const alikeSlider = new Swiper('.js-alike-slider', {
    slidesPerView: 1.4,
    spaceBetween: 24,
    speed: 800,
    centerInsufficientSlides: true,
    loop: true,
    breakpoints: {
      320: {
        spaceBetween: 24,
        slidesPerView: 1.4,
     
      },
      414: {
        spaceBetween: 24,
        slidesPerView: 1.8,
      },
      533: {
        spaceBetween: 24,
        slidesPerView: 2.5,
     
      },

      617: {
        spaceBetween: 24,
        slidesPerView: 3,
     
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 3.5,
     
      },
      850: {
        spaceBetween: 24,
        slidesPerView: 4,
     
      },
      1024: {
        spaceBetween: 24,
        slidesPerView: 5,
      },
      1300: {
        spaceBetween: 24,
        slidesPerView: 6,
      },
    },
  });
// ============================

// селекты
const SELECT_SELECTOR = '.js-select';
const BTN_SELECTOR = '.js-select-btn';
const LIST_SELECTOR = '.js-select-list';
const OPTION_SELECTOR = '.js-select-option';



const SELECTS = document.querySelectorAll('.js-select');

const initSelects = () => {
  const CLASS_ACTIVE = 'active';
  if (!SELECTS.length) return;

  function closeAllSelect() {
    const btnList = document.querySelectorAll(BTN_SELECTOR);
    const selectList = document.querySelectorAll(LIST_SELECTOR);

    btnList.forEach((el) => el.classList.remove(CLASS_ACTIVE));
    selectList.forEach((el) => el.classList.remove(CLASS_ACTIVE));
  }

  SELECTS.forEach((select) => {
    const btn = select.querySelector(BTN_SELECTOR);
    const selectList = select.querySelector(LIST_SELECTOR);
    const optionList = selectList.querySelectorAll(OPTION_SELECTOR);

    btn.addEventListener('click', (e) => {
      const target = e.target.closest(BTN_SELECTOR);

      if (target.classList.contains(CLASS_ACTIVE)) {
        target.classList.remove(CLASS_ACTIVE);
        selectList.classList.remove(CLASS_ACTIVE);
      } else {
        closeAllSelect();
        target.classList.add(CLASS_ACTIVE);
        selectList.classList.add(CLASS_ACTIVE);
      }
    });

    selectList.addEventListener('click', (e) => {
      const target = e.target.closest(OPTION_SELECTOR);

      if (target) {
        const value = target.getAttribute('data-value');
        const content = target.innerHTML;

        optionList.forEach((option) => option.classList.remove(CLASS_ACTIVE));

        target.classList.add(CLASS_ACTIVE);
        btn.classList.remove(CLASS_ACTIVE);
        btn.innerHTML = content;
        btn.setAttribute('data-value', value);
        selectList.classList.remove(CLASS_ACTIVE);
      }
    });
  });

  document.addEventListener('click', (e) => {
    const target = e.target;

    if (target && !target.closest(SELECT_SELECTOR)) {
      closeAllSelect();
    }
  });
};

initSelects();
// ======================



const scrollTopFunc = (() => {
  const TOP_BTN = document.querySelector('.btn-top');
  const scrollFunc = () => {
    const y = window.scrollY - 300;

    if (y > 0) {
      TOP_BTN.className = 'btn-top show';
    } else {
      TOP_BTN.className = 'btn-top hide';
    }
  };

  window.addEventListener('scroll', scrollFunc);

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  };

  const init = () => {
  
    TOP_BTN.addEventListener('click', () => {
      scrollToTop();
    });
  };

  return {
    init,
  };
})();
scrollTopFunc.init();

"use strict";

},{}]},{},[1]);
