const container = document.querySelector(".container");
const signUpBox = document.querySelector(".sign-up-box");
const successMessageBox = document.querySelector(".success-message-box");
const input = document.querySelector("#email-input");
const inputTitle = document.querySelector(".input-title");
const errorText = document.querySelector(".error-text");
const subscribeBtn = document.querySelector(".btn");
const dismissBtn = document.querySelector(".dismiss-btn");

let subscribe = false;

const validateEmail = (email) => {
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (mailformat.test(email)) {
        return (true)
    } 
    return (false);
};

const handleChange = () => {
    let value = input.value;
    if (validateEmail(value)) {
        input.classList.remove("error");
        inputTitle.classList.remove("error");
        errorText.classList.remove("error");
        subscribe = true;
        subscribeBtn.style.cursor = "pointer";
        dismissBtn.style.cursor = "pointer";
    } else if (value.length === 0) {
        input.classList.remove("error");
        inputTitle.classList.remove("error");
        errorText.classList.remove("error");
    } else {
        input.classList.add("error");
        inputTitle.classList.add("error");
        errorText.classList.add("error");
        subscribe = false;
    }
}

const handleSubmit = () => {
    if (subscribe) {
        container.classList.add("success");
        signUpBox.classList.add("success");
        successMessageBox.classList.add("success");
    } 

    return;
}

const handleDismiss = () => {
    if (subscribe) {
        container.classList.remove("success");
        signUpBox.classList.remove("success");
        successMessageBox.classList.remove("success");
        subscribe = false;
        input.value = "";
        subscribeBtn.style.cursor = "not-allowed";
        dismissBtn.style.cursor = "not-allowed";
    }
}

const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleChange();
        e.preventDefault();
    }
};

input.addEventListener("change", handleChange);
input.addEventListener("keypress", handleKeyPress);
subscribeBtn.addEventListener("click", handleSubmit);
dismissBtn.addEventListener("click", handleDismiss);