import authentication from "../../services/authentication.js";
import registerTemplate from "./registerTemplate.js";

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    return (false)
}

async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let erDiv = e.target.querySelector('.error');
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let username = formData.get('username');
        let password = formData.get('password');
        let repass = formData.get('repass');

        let isValidEmail = ValidateEmail(email);

        if (isValidEmail && username.length >= 3 && password.length >= 3 && (password === repass)) {
            try {
                let result = await authentication.register({ email, password, username })
                authentication.fillLocaleStorage(result);
                context.page.redirect('/my-teams');
            } catch (error) {
                erDiv.classList.remove('hidden');
                erDiv.textContent = error;
            }
        } else {
            erDiv.classList.remove('hidden');
                erDiv.textContent = `e-mail: required, valid e-mail;
                username: required, at least 3 characters;
                password: required, at least 3 characters/digits.`;
        }
    }

    submitForm = submitForm.bind(null, context);

    infoObj = {
        submitForm,
    }
    let html = registerTemplate.template(infoObj);
    context.main(html);
}

export default {
    view
}