function validate() {
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm-password');
    let checkBoxElement = document.getElementById('company');
    let submitBtnElement = document.getElementById('submit');
    let companyInfoElement = document.getElementById('companyInfo');
    let companyNumberElement = document.getElementById('companyNumber');
    let validElement = document.getElementById('valid');

    checkBoxElement.addEventListener('change', function() {
        if (checkBoxElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
      });

    submitBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        // username validation
        let regexUsername = /^[a-zA-Z0-9]{3,20}$/;
        let isValidUsername = regexUsername.test(usernameElement.value);
        if (!isValidUsername) {
            makeRed(usernameElement);
        } else {
            removeBorder(usernameElement);
        }

        // email validation
        let regexEmail = /^.*@.*\..*$/;
        let isValidemail = regexEmail.test(emailElement.value);
        if (!isValidemail) {
            makeRed(emailElement);
        } else {
            removeBorder(emailElement);
        }

        // passwords validation
        let regexPassword = /^\w{5,15}$/;
        let isValidPassword = regexPassword.test(passwordElement.value);
        //let isValidConfirmPassword = regexPassword.test(isValidConfirmPassword.value);
        let areValidPasswords = passwordElement.value === confirmPasswordElement.value;
        //both bekome red maybe not right
        if (!isValidPassword || !areValidPasswords) {
            makeRed(passwordElement);
            makeRed(confirmPasswordElement);
        } else {
            removeBorder(passwordElement);
            removeBorder(confirmPasswordElement);
        }
        // checkbox
        
        let isChecked = checkBoxElement.checked;
        let isvalidCompanyNumber = Number(companyNumberElement.value) >= 1000 && Number(companyNumberElement.value) <= 9999;
        if (!isvalidCompanyNumber && isChecked) {
            makeRed(companyNumberElement);
        } else {
            removeBorder(companyNumberElement);
        }

        
        if (isChecked) {
            if (isValidUsername && isValidemail && isValidPassword && areValidPasswords && isvalidCompanyNumber) {
                validElement.style.display = 'block';
            }
            else {
                validElement.style.display = 'none';
            }
        } else {
            if (isValidUsername && isValidemail && isValidPassword && areValidPasswords) {
                validElement.style.display = 'block';
            }
            else {
                validElement.style.display = 'none';
            }
        }
    })

    function makeRed(element) {
        element.style.border = '2px solid red';
    }

    function removeBorder(element) {
        element.style.border = '';
    }
}
