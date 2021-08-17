import authentication from "../../services/authentication.js";
import editTemplate from "./editTemplate.js";

async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');
        let _ownerId = authentication.getUserId();

        if (title && imageUrl && description) {
            try {
                let result = await authentication.put(context.params.id, { title, description, imageUrl, _ownerId});
                context.page.redirect(`/details/${context.params.id}`);
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
    let e = await authentication.getOne(context.params.id);
    infoObj = {
        submitForm,
        e
    }
    let html = editTemplate.template(infoObj);
    context.main(html);
}

export default {
    view
}