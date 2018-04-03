
var link = document.querySelector(".button-write");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".button-modal-close");
var name = popup.querySelector("[name=name]");
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
    storageName = localStorage.getItem("name");
} catch (err) {
    isStorageSupportName = false;
}

try {
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isStorageSupportEmail = false;
} 

try {
    storageText = localStorage.getItem("text");
} catch (err) {
    isStorageSupportText = false;
}            

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    
    if (storageName) {
        name.value = storageName;
        email.focus();
    }
    else if (storageEmail) {
        email.value = storageEmail;
        text.focus();
    }
    else if (storageText) {
        text.value = storageText;
        text.focus();
    } else {
        name.focus();
    }            
    name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    if (!name.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;                        
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupportName) {
            localStorage.setItem("name", name.value);
        }
        if (isStorageSupportEmail) {
            localStorage.setItem("email", email.value);
        }
        if (isStorageSupportText) {
            localStorage.setItem("text", text.value);
        }                
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }   
});

