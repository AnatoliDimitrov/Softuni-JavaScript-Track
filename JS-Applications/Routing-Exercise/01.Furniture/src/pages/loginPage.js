import authService from "../../services/authService.js";
import loginTemplate from "../templates/loginTemplate.js";



async function view(context) {
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
    
        await authService.login({ email, password })
        context.page.redirect('/index');
    }

    submitForm = submitForm.bind(null, context);
    let html = loginTemplate.template(submitForm);
    context.main(html);
}

export default {
    view
}