import authentication from "../../services/authentication.js";
import editTemplate from "./editTemplate.js";

async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let img = formData.get('imageUrl');
        let description = formData.get('description');

        if (title && img && description) {
            try {
                let result = await authentication.put(context.params.id, { title, description, img });
                context.page.redirect(`/details/${context.params.id}`);
            } catch (error) {
                alert(error);
            }
        } else {
            alert(error);
        }
    }

    submitForm = submitForm.bind(null, context);
    let movie = await authentication.getOne(context.params.id);
    infoObj = {
        submitForm,
        movie
    }
    let html = editTemplate.template(infoObj);
    context.main(html);
}

export default {
    view
}