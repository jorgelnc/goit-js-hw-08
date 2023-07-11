const form = document.querySelector(".feedback-form");
const email = document.getElementsByName("email")[0];
const message = document.getElementsByName("message")[0];
const localStorageKey = "feedback-form-state";


 updateOutput();
form.addEventListener("submit", saveMessage);

function saveMessage(e) {
    e.preventDefault();
    let emailInput = email.value;
    let messageInput = message.value;
    const result = { "email": emailInput, "message": messageInput };
    localStorage.setItem(localStorageKey, JSON.stringify(result));
     updateOutput();
    form.reset();
    console.log(result);
   
}

function updateOutput() {
   let formValue = JSON.parse(localStorage.getItem(localStorageKey));
    let emailOutput = formValue["email"];
    let messageOutput = formValue["message"];
    email.value = emailOutput;
    message.value = messageOutput;
}