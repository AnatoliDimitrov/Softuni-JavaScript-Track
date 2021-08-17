function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', (e) => {

        const regex = new RegExp('^[a-z]+@[a-z]+.[a-z]+$', 'g');

        if (!regex.test(inputElement.value)) {
            inputElement.className = 'error';
        } else {
            inputElement.className = '';
        }
    });
}