import authentication from "../../services/authentication.js";
import loginTemplate from "./loginTemplate.js";


async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let email = formData.get('email');
        let password = formData.get('password');
        if (email && password) {
            try {
                let result = await authentication.login({ email, password})
                authentication.fillLocaleStorage(result);
                context.page.redirect('/all');
            } catch (error) {
                let notification = document.getElementById('notification');
                let span = notification.querySelector('span');
                span.textContent = error;
                notification.style.display = 'block';
                setTimeout(() => { notification.style.display = 'none'; }, 3000);

                alert(error);
            }
        } else {
            let notification = document.getElementById('errorBox');
            let span = notification.querySelector('span');
            span.textContent = 'Fields cannot be empty!';
            notification.style.display = 'block';
            setTimeout(() => { notification.style.display = 'none'; }, 3000);

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