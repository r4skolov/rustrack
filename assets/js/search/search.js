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