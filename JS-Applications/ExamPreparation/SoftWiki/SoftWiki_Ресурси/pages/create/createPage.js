import authentication from "../../services/authentication.js";
import createTeamTepmplate from "./createTemplate.js";



async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let category = formData.get('category');
        let content = formData.get('content');

        if (title && category && content) {
            try {
                let result = await authentication.post({ title, category, content, 'creator-email': authentication.getUserEmail() });
                context.page.redirect(`/index`);
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
    let html = createTeamTepmplate.template(infoObj);
    context.main(html);
}

export default {
    view
}