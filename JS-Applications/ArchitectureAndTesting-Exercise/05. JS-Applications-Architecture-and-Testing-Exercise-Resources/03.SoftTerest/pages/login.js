import navigateTo from "../navigation/navigateTo.js";
import auth from "../services/authService.js";

function loginBtn() {
    let btn = document.querySelector('#login-button');
    btn.addEventListener('click', navigateTo.loginForm)
    let signUp = document.querySelector('#sign-up');
    signUp.addEventListener('click', navigateTo.registration);
}

function loginForm() {
    let form = document.getElementById('login-form');
    form.addEventListener('submit', sendLoginRequest);
}

async function sendLoginRequest(e) {
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        let loginUser = {
            email,
            password
        };

        await auth.login(loginUser);
        form.reset();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

export default {
    sendLoginRequest,
    loginBtn,
    loginForm,
}