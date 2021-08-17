import authentication from "../../services/authentication.js";
import createTeamTepmplate from "./createTemplate.js";



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
                let result = await authentication.post({ title, description, img });
                context.page.redirect(`/index`);
            } catch (error) {
                alert(error);
            }
        } else {
            alert(error);
        }
    }

    submitForm = submitForm.bind(null, context);

    infoObj = {
        submitForm,
    }
    let html = createTeamTepmplate.template(infoObj);
    context.main(html);
}

export default {
    view
}