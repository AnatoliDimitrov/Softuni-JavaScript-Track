import authService from "../../services/authService.js";
import registerTemplate from "../templates/registerTemplate.js";



async function view(context) {
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('rePass');
        if (email && password && (password == rePass)) {
            try {
                let registerResult = await authService.register({ email, password })
                authService.fillLocaleStorage(registerResult);
                context.page.redirect('/index');
            } catch (err) {
                alert(err);
            }
        }
    }
    submitForm = submitForm.bind(null, context)
    let html = registerTemplate.template(submitForm);
    context.main(html);
}

export default {
    view
}