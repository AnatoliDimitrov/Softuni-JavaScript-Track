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
        let email = formData.get('email');
        let password = formData.get('password');
        let repass = formData.get('repeatPass');
        let gender = formData.get('gender');
        console.log(gender);

        if (username && email && password && gender && repass && (password === repass)) {
            try {
                let result = await authentication.register({ username, email, password, gender })
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
    let html = registerTemplate.template(infoObj);
    context.main(html);
}

export default {
    view
}