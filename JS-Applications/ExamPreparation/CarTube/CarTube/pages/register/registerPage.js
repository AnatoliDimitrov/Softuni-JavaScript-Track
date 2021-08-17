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
        let username = formData.get('username');
        let password = formData.get('password');
        let repass = formData.get('repeatPass');

        if (username && password && repass && (password === repass)) {
            try {
                let result = await authentication.register({ username, password })
                authentication.fillLocaleStorage(result);
                context.page.redirect('/all');
            } catch (error) {

                alert(error);
            }
        } else {

            alert('Fields cannot be empty!');
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