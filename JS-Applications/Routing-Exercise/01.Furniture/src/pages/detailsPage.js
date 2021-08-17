import authService from "../../services/authService.js";
import detailsTemplate from "../templates/detailsTemplate.js";

async function view(context) {

    async function del(context, e) {
        let id = e.target.getAttribute('data-id');
        let confirmation = confirm('Are you sure?');
        if (confirmation) {
            await authService.del(id)
            context.page.redirect(`/index`);
        }
    }

    del = del.bind(null, context);
    let furniture = await authService.getWithId(context.params.id)
    let isOwner = furniture._ownerId === authService.getUserId();
    let html = detailsTemplate.template(furniture, isOwner, del);
    context.main(html);
}

export default {
    view
}