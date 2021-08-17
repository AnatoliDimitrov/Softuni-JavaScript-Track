import listeners from "../services/listeners.js";

function registerBtn() {
    let regBtn = document.getElementById('register-button');
    regBtn.addEventListener('click', listeners.registrationBtn);
}

async function registerForm() {
    let regForm = document.querySelector('#form-sign-up form');
    regForm.addEventListener('submit', await listeners.register);
}

export default {
    registerBtn,
    registerForm
}