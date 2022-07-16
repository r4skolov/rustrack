// swiper товара 
const navProductSlider = new Swiper('.js-nav-slider', {
    slidesPerView: 10,
    spaceBetween: 15,
    loopedSlides: 10,
    freeMode:true,
    autoHeight: false,
    loop: false,
    direction: 'vertical',
    slideToClickedSlide: false,
    navigation: {
      nextEl: ".swiper-button-next",
    },
    breakpoints: {
      320: {
        spaceBetween: 5,
        slidesPerView: 4,
        loopedSlides: 4,
      },
      414: {
        spaceBetween: 5,
        slidesPerView: 4,
        loopedSlides: 4,
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 5,
        loopedSlides: 5,
      },
    },
  });

const productSlider = new Swiper('.js-product-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 800,
    centerInsufficientSlides: false,
    loopedSlides: 1,
    loop: false,
    thumbs: {
      swiper:navProductSlider,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
//======================

// кнопка поделиться 
const share = (() => {
    let shareOpen = document.querySelector('.share');
    let shareLink = document.querySelectorAll ('.share-link');
    if (shareOpen) {
        document.addEventListener("click", (e) => {
          if (!e.target.closest(".share") || e.target.closest('.share-close') && e.target.closest('.share')) {
            shareOpen.classList.remove("active");
          }
          if (e.target.closest(".product--share")) {
            shareOpen.classList.add("active");
          }

          shareLink.forEach(function(item) {
            item.addEventListener("click", (e) => {
              shareOpen.classList.remove('active');
            });
          })

       });
    }
    const init = () => {};
      
    return  {
        init,
    }
  })();
// ===============================


// добавить в избранное
let favoriteProduct = document.querySelector(".product--favorite");

if(favoriteProduct) {
  favoriteProduct.addEventListener('click', () => {
    favoriteProduct.classList.toggle('active');
  });
}
//=====================================


// добавить в корзину 
const btnAddCartShow = (() => {
    const btnAddCartShow = document.querySelector('.js-add-cart');
    if (btnAddCartShow) {
        const btnAddCartHide = document.querySelector('.primary--add');
        
        btnAddCartShow .addEventListener("click", function() { 
            btnAddCartShow .classList.remove('active');
            btnAddCartHide.classList.add('active');
        });
        
    }
    const init = () => {};
      
    return  {
        init,
    }
})();
// ======================================


// смотреть характеристики скролл 
    

const smoothScroll = () => {
    const scroll = function (targetEl, duration) {
      const targets = document.querySelector(targetEl)
      const targetsPosition = targets.getBoundingClientRect().top - 131;
      const startsPosition = window.pageYOffset
      let startTime = null
  
      const ease = function (t, b, c, d) {
        t /= d / 2
        if (t < 1) return (c / 2) * t * t + b
        t -= 1
        return (-c / 2) * (t * (t - 2) - 1) + b
      }
  
      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = ease(timeElapsed, startsPosition, targetsPosition, duration)
        window.scrollTo(131, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }
      requestAnimationFrame(animation)
    }
  
    const scrollTo = function () {
      const links = document.querySelectorAll('.js-smooth-scroll')
      links.forEach((each) => {
        each.addEventListener('click', function () {
          const currentTarget = this.getAttribute('href')
          scroll(currentTarget, 1000)
        })
      })
    }
    scrollTo()
  }
  smoothScroll()
  
// ===================================


// скопировать код 
const copy = (() => {
    const copyTextareaBtn = document.querySelector('.js-textareacopybtn');
    if (copyTextareaBtn) {
    
      copyTextareaBtn.addEventListener('click', function(event) {
        const copyTextarea = document.querySelector('.js-copytextarea');
        copyTextarea.focus();
        copyTextarea.select();
    
        try {
          const successful = document.execCommand('copy');
          const msg = successful ? 'successful' : 'unsuccessful';
          console.log('Код скопирова ' + msg);
        } catch (err) {
          console.log('Что-то пошло не так');
        }
      });
    }
    const init = () => {};
      
    return  {
        init,
    }
  })();
// ===========================================


// показать еще текс 
const ReadMore = (() => {
    let s;
 
    return {
 
      settings() {
        return {
          content: document.querySelectorAll('.js-read-more'),
          originalContentArr: [],
          truncatedContentArr: [],
          moreLink: "Читать полностью",
          lessLink: "Свернуть",
        }
      },
 
      init() {
        s = this.settings();
        this.bindEvents();
      },
 
      bindEvents() {
        ReadMore.truncateText();
      },
 
      /**
       * Count Words
       * Helper to handle word count.
       * @param {string} str - Target content string.
       */
      countWords(str) {
        return str.split(/\s+/).length;
      },
 
      /**
       * Ellpise Content
       * @param {string} str - content string.
       * @param {number} wordsNum - Number of words to show before truncation.
       */
      ellipseContent(str, wordsNum) {
        return str.split(/\s+/).slice(0, wordsNum).join(' ') + '...';
      },
 
      /**
       * Truncate Text
       * Truncate and ellipses contented content
       * based on specified word count.
       * Calls createLink() and handleClick() methods.
       */
      truncateText() {
 
        for (let i = 0; i < s.content.length; i++) {
          //console.log(s.content)
          const originalContent = s.content[i].innerHTML;
          const numberOfWords = s.content[i].dataset.rmWords;
          const truncateContent = ReadMore.ellipseContent(originalContent, numberOfWords);
          const originalContentWords = ReadMore.countWords(originalContent);
 
          s.originalContentArr.push(originalContent);
          s.truncatedContentArr.push(truncateContent);
 
          if (numberOfWords < originalContentWords) {
            s.content[i].innerHTML = s.truncatedContentArr[i];
            let self = i;
            ReadMore.createLink(self)
          }
        }
        ReadMore.handleClick(s.content);
      },
 
      /**
       * Create Link
       * Creates and Inserts Read More Link
       * @param {number} index - index reference of looped item
       */
      createLink(index) {
        const linkWrap = document.createElement('span');
 
        linkWrap.className = 'read-more__link-wrap';
 
        linkWrap.innerHTML = `<a id="read-more_${index}"
                                 class="read-more__link"
                                 style="cursor:pointer;">
                                 ${s.moreLink}
                             </a>`;
 
        // Inset created link
        s.content[index].parentNode.insertBefore(linkWrap, s.content[index].nextSibling);
 
      },
 
      /**
       * Handle Click
       * Toggle Click eve
       */
      handleClick(el) {
        const readMoreLink = document.querySelectorAll('.read-more__link');
 
        for (let j = 0, l = readMoreLink.length; j < l; j++) {
 
          readMoreLink[j].addEventListener('click', function() {
 
            const moreLinkID = this.getAttribute('id');
            const content = document.querySelector('.about__text');
            let index = moreLinkID.split('_')[1];
 
            el[index].classList.toggle('is-expanded');
 
            if (this.dataset.clicked !== 'true') {
               el[index].innerHTML = s.originalContentArr[index];
               this.innerHTML = s.lessLink;
               this.dataset.clicked = true;
              //  content.style.maxHeight = content.scrollHeight + 'px';
            } else {
              el[index].innerHTML = s.truncatedContentArr[index];
              this.innerHTML = s.moreLink;
              this.dataset.clicked = false;
              // content.style.maxHeight = null;
            }
          });
        }
      },
 
      /**
       * Open All
       * Method to expand all instances on the page.
       * Will probably be useful with a destroy method.
       */
      openAll() {
        const instances = document.querySelectorAll('.read-more__link');
          for (let i = 0; i < instances.length; i++) {
            content[i].innerHTML = s.truncatedContentArr[i];
            instances[i].innerHTML = s.moreLink;
          }
        }
      }
  })();
 ReadMore.init();

// =======================


// табы перключения схемы 
const schemeBtn = document.querySelectorAll('.scheme__nav-button');
const tabScheme = document.querySelectorAll('.scheme__main');

schemeBtn.forEach(function(item) {
    item.addEventListener("click", function() {

        let currentBtn = item;//переменная самой кнопки
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId); 

        if (! currentBtn.classList.contains('active') ) {

        schemeBtn.forEach (function(item) {
            item.classList.remove('active');
        });

        currentBtn.classList.add('active');
      
        tabScheme.forEach(function(item){
            item.classList.remove('active');
        });
        currentTab.classList.add('active');
        }
    });
});

// ===============================