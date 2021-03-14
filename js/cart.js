const buttonsBuy = document.querySelectorAll(".button-buy");
const cartPopup = document.querySelector(".cart-success-popup");
const cartClose = cartPopup.querySelector(".success-close");

function showCartPopup(evt) {
  evt.preventDefault();
  cartPopup.classList.add("popup-show");
};

function hideCartPopup(evt) {
  evt.preventDefault();
  cartPopup.classList.remove("popup-show");
};

buttonsBuy.forEach(function (button) {
  button.addEventListener("click", showCartPopup);
});

cartClose.addEventListener("click", hideCartPopup);

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("popup-show");
    }
  }
});
