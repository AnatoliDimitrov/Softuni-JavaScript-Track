let form = document.getElementById('login-form');
form.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = (formData.get('email'));
    let password = (formData.get('password'));

        let loginResponse = await fetch('http://localhost:3030/users/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                email,
                password
            })
        });
    
        let loginResult = await loginResponse.json();
        console.log(loginResult);
        localStorage.setItem('token', loginResult.accessToken);
        localStorage.setItem('user_id', loginResult._id);

        window.location.assign('./index.html');
}