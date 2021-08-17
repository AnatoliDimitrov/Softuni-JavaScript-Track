import authentication from "../../services/authentication.js";
import loginTemplate from "./loginTemplate.js";


async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let username = formData.get('username');
        let password = formData.get('password');
        if (username && password) {
            try {
                let result = await authentication.login({ username, password})
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
    let html = loginTemplate.template(infoObj);
    context.main(html);
}

export default {
    view
}