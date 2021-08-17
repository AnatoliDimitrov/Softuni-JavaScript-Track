import authentication from "../../services/authentication.js";
import editTemplate from "./editTemplate.js";

async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let category = formData.get('category');
        let content = formData.get('content');
        let _ownerId = authentication.getUserId();

        if (title && category && content) {
            try {
                let result = await authentication.put(context.params.id, { title, category, content, _ownerId});
                context.page.redirect(`/index`);
            } catch (error) {
                alert(error);
            }
        } else {
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