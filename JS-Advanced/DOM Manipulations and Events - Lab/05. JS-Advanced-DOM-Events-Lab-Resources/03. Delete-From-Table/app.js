function deleteByEmail() {

    let emailsElements = Array.from(document.querySelectorAll('tbody td:nth-child(2n)'));
    console.log(emailsElements);
    let inputElement = document.querySelector('label input');
    let isDeleted = false;

    for (let i = 0; i < emailsElements.length; i++) {
        
        if (emailsElements[i].textContent === inputElement.value) {
            emailsElements[i].parentNode.remove();
            isDeleted = true;
            break;
        }
    }

    inputElement.value = '';

    let result = document.getElementById('result');
    if (isDeleted) {
        result.textContent = 'Deleted.'
    } else {
        result.textContent = 'Not found.'
    }
}