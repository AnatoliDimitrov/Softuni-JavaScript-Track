let registerForm = document.getElementById('register-form');
let loginForm = document.getElementById('login-form');

registerForm.addEventListener('submit', registerUser);
loginForm.addEventListener('submit', loginUser);


async function registerUser(e) {
    e.preventDefault();
    let formData = new FormData(registerForm);
    let email = formData.get('email');
    let password = formData.get('password');
    let repass = formData.get('rePass');
    if (password === repass) {
        try {
            let response = await fetch('http://localhost:3030/users/register', {
                headers: { 'Content-Type': 'application/json' },
                method: 'Post',
                body: JSON.stringify({ email, password })
            })
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            let result = await response.json();
            console.log(result);
            localStorage.setItem('token_catch', result.accessToken);
            localStorage.setItem('user_id_catch', result._id);
            window.location.assign('./index.html')
        } catch (error) {
            alert(error);
        }
    } else {
        return;
    }
}



async function loginUser(e) {
    e.preventDefault();
    let formData = new FormData(loginForm);
    let email = formData.get('email');
    let password = formData.get('password');
    try {
        let response = await fetch('http://localhost:3030/users/login', {
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        let result = await response.json();
        console.log(result);
        localStorage.setItem('token_catch', result.accessToken);
        localStorage.setItem('user_id_catch', result._id);
        window.location.assign('./index.html')
    } catch (error) {
        alert(error);
    }
}