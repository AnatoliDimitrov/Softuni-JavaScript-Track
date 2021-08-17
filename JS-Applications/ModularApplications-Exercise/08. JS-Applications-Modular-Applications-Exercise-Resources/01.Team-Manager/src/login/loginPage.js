import authentication from "../../services/authentication.js";
import loginTemplate from "./loginTemplate.js";



async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        try {
            let result = await authentication.login({ email, password })
            authentication.fillLocaleStorage(result);
            context.page.redirect('/my-teams');
        } catch (error) {
            let erDiv = e.target.querySelector('.error');
            erDiv.classList.remove('hidden');
            erDiv.textContent = error;
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