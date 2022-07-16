
// счетчик в корзине
window.addEventListener('click', function(event){

    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

      const counterWrapper = event.target.closest('.product-card__counter');

      counter = counterWrapper.querySelector('[data-action="counter"]');
    }

    if (event.target.dataset.action === 'plus') {
      counter.value = ++counter.value;
    }

    if (event.target.dataset.action === 'minus') {
      if (parseInt(counter.value) > 1) {
        counter.value = --counter.value;
      }
    }
});



const deleteItem = () => {
  let arrBtnsClose = document.querySelectorAll(".basket-delete");
  let card = document.querySelectorAll('.product-card');
  for (let btnClose of arrBtnsClose) {
    btnClose.addEventListener("click", function (el) {
      el = el.target;
      console.log(card);
      el.closest(".product-card").remove();
      
    });
  }
};
deleteItem();
