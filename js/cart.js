
const buttonsBuy = document.querySelectorAll(".button-buy");
const cartPopup = document.querySelector(".cart-success-popap");
const cartClose = cartPopup.querySelector(".success-close");

function showCartPopup(evt){
    evt.preventDefault();
    cartPopup.classList.add("popap-show");
};

function hideCartPopup(evt){
    evt.preventDefault();
    cartPopup.classList.remove("popap-show");
};


buttonsBuy.forEach(function(button) {
     button.addEventListener("click", showCartPopup);
});

cartClose.addEventListener("click", hideCartPopup);

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (cartPopup.classList.contains("popap-show")) {
        evt.preventDefault();
        cartPopup.classList.remove("popap-show");
      }
    }
  });