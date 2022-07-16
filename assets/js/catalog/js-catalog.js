// смена сетки каталога
const filtersBtn = document.querySelectorAll('.btn-filter');
if (filtersBtn) {
    const catalogItem = document.querySelectorAll('.catalog-products');
    
    filtersBtn.forEach(function(item) {
        item.addEventListener("click", function() {
    
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId); 
    
            if (! currentBtn.classList.contains('active') ) {
    
              filtersBtn.forEach (function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
          
            catalogItem.forEach(function(item){
                item.classList.remove('active');
            });
            currentTab.classList.add('active');
            }
        });
    });
}
// ===========================





// range-slider для фильтра 
const range = (() => {
    
    const rangeSlider = document.getElementById('range-slider');
    
    if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [0, 100000],
        connect: true,
        step:1,
        range: {
            'min': [0],
            'max': [500000]
        }
    });
    
    const input0 = document.getElementById('input-0');
    const input1 = document.getElementById('input-1');
    const inputs = [input0, input1];
    
    rangeSlider.noUiSlider.on('update', function(values, handle){
        inputs[handle].value = Math.round(values[handle]);
    });
    
        const setRangeSlider = (i, value) => {
            let arr = [null, null]
            arr[i] = value;
    
            console.log(arr);
    
            rangeSlider.noUiSlider.set(arr);
        };
    
        inputs.forEach((el, index) => {
            el.addEventListener('change', (e) => {
                console.log(index);
                setRangeSlider(index, e.currentTarget.value);
            });
        });
    }
    
    
    const init = () => {};
    
    return  {
        init,
    }
})();

// ===========================



// открыть фильтр в моб 
const filterOpen = (() => {
  
    let filtersMenu = document.querySelector(".catalog-filters");
    let closeFilters = document.querySelector(".catalog-filters__close-btn");
    if (filtersMenu) {
        document.addEventListener("click", (e) => {
            if (e.target.closest(".filters-open")) {
              filtersMenu.classList.add("catalog-filters--visible");
              document.body.classList.add("scroll");
            }
            if ((!e.target.closest(".catalog-filters__top")) && (e.target.closest(".catalog-filters")) && !e.target.closest(".catalog-filters__wrap")) {
              filtersMenu.classList.remove("catalog-filters--visible");
              document.body.classList.remove("scroll");
            }
         });

         closeFilters.addEventListener("click", () => {
          filtersMenu.classList.remove("catalog-filters--visible");
          document.body.classList.remove("scroll");
         })
    }


  
    const init = () => {};
      
    return  {
        init,
    }
})();
// =================================