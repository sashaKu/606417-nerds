
var link = document.querySelector(".button-write");
var popup = document.querySelector(".modal");
var error = document.querySelector(".modal-write");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".button-modal-close");
var nickname = popup.querySelector("[name=nickname]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var form = popup.querySelector("form");
var isStorageSupportName = true;
var storageName = "";
var isStorageSupportEmail = true;
var storageEmail = "";
var isStorageSupportText = true;
var storageText = "";

try {
    storageName = localStorage.getItem("nickname");
    storageEmail = localStorage.getItem("email");
    storageText = localStorage.getItem("text");
} catch (err) {
    isStorageSupportName = false;
    isStorageSupportEmail = false;
    isStorageSupportText = false;
}            

link.addEventListener("click", function(evt) {
    evt.preventDefault();
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");
    popup.classList.add("modal-show");
    overlay.classList.add("modal-show-overlay");
    if (storageName && !storageEmail && !storageText) {
        nickname.value = storageName;
        email.focus();
    }
    else if (storageName && storageEmail && !storageText) {
        nickname.value = storageName;
        email.value = storageEmail;
        text.focus();
    }
    else if (storageName && storageEmail && storageText) {
        nickname.value = storageName;
        email.value = storageEmail;        
        text.value = storageText;
        text.focus();
    } else {
        nickname.focus();
    }            
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    error.classList.remove("modal-error");
    error.classList.remove("valid-form-text");
    error.classList.remove("valid-form-email");
    error.classList.remove("valid-form");
    overlay.classList.remove("modal-show-overlay");
});

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!nickname.value && !email.value && !text.value) {
        error.classList.remove("modal-error");
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");
        error.offsetWidth = error.offsetWidth;
        error.classList.add("modal-error");
        error.classList.add("valid-form-text");
        error.classList.add("valid-form-email");
        error.classList.add("valid-form");
    }
    else if (!nickname.value && !email.value) {
        error.classList.remove("modal-error");
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");        
        error.offsetWidth = error.offsetWidth;
        error.classList.add("modal-error");
        error.classList.add("valid-form-text");
        error.classList.add("valid-form-email");      
    }
    else if (!nickname.value && !text.value) {
        error.classList.remove("modal-error");
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");
        error.offsetWidth = error.offsetWidth;
        error.classList.add("modal-error");
        error.classList.add("valid-form-text");
        error.classList.add("valid-form");        
    }    
    else if (!email.value && !text.value) {
        error.classList.remove("modal-error");
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");
        error.offsetWidth = error.offsetWidth;
        error.classList.add("modal-error");
        error.classList.add("valid-form-email");
        error.classList.add("valid-form");
    }
    else if (!nickname.value) {
        error.classList.remove("modal-error");
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");
        error.offsetWidth = error.offsetWidth;
        error.classList.add("modal-error");
        error.classList.add("valid-form-text");       
    }
    else if (!email.value) {
        error.classList.remove("modal-error");
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");      
        error.offsetWidth = error.offsetWidth;
        error.classList.add("modal-error");
        error.classList.add("valid-form-email");       
    }    
    else if (!text.value) {
        error.classList.remove("modal-error");        
        error.classList.remove("valid-form-text");
        error.classList.remove("valid-form-email");        
        error.classList.remove("valid-form");
        error.offsetWidth = error.offsetWidth;
        error.classList.add("modal-error");
        error.classList.add("valid-form");        
    } else {
            error.classList.remove("valid-form-text");
            error.classList.remove("valid-form-email");        
            error.classList.remove("valid-form");
            localStorage.setItem("nickname", nickname.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("text", text.value);              
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            error.classList.remove("modal-error");
            error.classList.remove("valid-form-text");
            error.classList.remove("valid-form-email");
            error.classList.remove("valid-form");
            overlay.classList.remove("modal-show-overlay");
        }
    }   
});

