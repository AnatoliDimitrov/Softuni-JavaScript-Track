let form = document.getElementById('registration-form');
form.addEventListener('submit', register);

async function register(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let email = (formData.get('email'));
    let password = (formData.get('password'));
    let repass = (formData.get('rePass'));

    if (password === repass) {
        let regResponse = await fetch('http://localhost:3030/users/register', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({
                email,
                password
            })
        });
        let regResult = await regResponse.json();
        console.log(regResult);
        localStorage.setItem('token', regResult.accessToken);
        localStorage.setItem('user_id', regResult._id);

        window.location.assign('./index.html');
    }
}