const mailLink = document.querySelector(".button-map");
const mailPopup = document.querySelector(".mail-popap");
const mailClose = mailPopup.querySelector(".mail-button-close");
const mailName = mailPopup.querySelector(".mail-name");
const mailEmail = mailPopup.querySelector(".mail-email");
const mailText = mailPopup.querySelector(".mail-text");

const mapLink = document.querySelector(".contacts-map");
const mapPopup = document.querySelector(".map-popap");
const mapClose = mapPopup.querySelector(".map-button-close");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user-name");
  storageEmail = localStorage.getItem("user-email");
} catch (err) {
  isStorageSupport = false;
}

mailLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mailPopup.classList.add("popap-show");

    if(storage) {
        mailName.value = storage;
        mailEmail.focus();
    } else {
    mailName.focus();
    }

    if(storageEmail) {
        mailEmail.value = storageEmail;
        mailText.focus();
    } else {
        mailEmail.focus();
    }
});

mailPopup.addEventListener("submit", function(evt) {
    if(!mailName.value || !mailEmail.value || !mailText.value){
    evt.preventDefault();
    mailPopup.classList.add("mail-error");
} else {
    if (isStorageSupport) {
        localStorage.setItem("user-name", mailName.value);
        localStorage.setItem("user-email", mailEmail.value);
}
  }
});

mailClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mailPopup.classList.remove("popap-show");
    mailPopup.classList.remove("mail-error");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mailPopup.classList.contains("popap-show")) {
        evt.preventDefault();
        mailPopup.classList.remove("popap-show");
        mailPopup.classList.add("mail-error");
      }
    }
  });


mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("popap-show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("popap-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("popap-show")) {
        evt.preventDefault();
        mapPopup.classList.remove("popap-show");
      }
    }
  });