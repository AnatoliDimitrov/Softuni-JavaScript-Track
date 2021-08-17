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
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('repeatPassword');

        let isValidEmail = ValidateEmail(email);

        if (isValidEmail && password.length >= 6 && (password === repass)) {
            try {
                let result = await authentication.register({ email, password})
                authentication.fillLocaleStorage(result);
                context.page.redirect('/index');
            } catch (error) {
                alert(error);
            }
        } else {
            alert();
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