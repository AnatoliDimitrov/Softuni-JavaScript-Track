import navigateTo from "../navigation/navigateTo.js";
import auth from "../services/authService.js";

function registerBtn() {
    let btn = document.querySelector('#register-button');
    btn.addEventListener('click', navigateTo.registration);
}

function registerForm() {
    let form = document.getElementById('register-form');
    form.addEventListener('submit', sendRegisterRequest);
}

async function sendRegisterRequest(e) {
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);

        let email = formData.get('email');
        let password = formData.get('password');
        let repeatPassword = formData.get('repeatPassword');

        if (email.trim() === '' || password.trim() === '') {
            alert('Fields cannot be empty');
            return;
        }

        if (email.length < 3) {
            alert('Password must be at least 3 characters');
            return;
        }

        if (password.length < 3) {
            alert('Password must be at least 3 characters');
            return;
        }

        if (password !== repeatPassword) {
            alert('Passwords don\'t match');
            return;
        }

        let registerUser = {
            email,
            password
        };


        await auth.register(registerUser);
        form.reset();
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
}

export default {
    sendRegisterRequest,
    registerBtn,
    registerForm,
}