import listeners from "../services/listeners.js";

function loginBtn() {
    let loginBtn = document.getElementById('login-button');
    loginBtn.addEventListener('click', listeners.loginBtn);
}

async function loginForm() {
    let loginForm = document.querySelector('#form-login form');
    loginForm.addEventListener('submit', await listeners.login);
}

export default {
    loginBtn,
    loginForm
}