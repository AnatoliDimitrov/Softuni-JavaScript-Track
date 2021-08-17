function validate() {
    let emailElement = document.getElementById('email');
    emailElement.addEventListener('change', () => {
        let email = emailElement.value;
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (!regex.test(email)) {
            emailElement.className = 'error';
        } else {
            emailElement.className = '';
        }
    })
}