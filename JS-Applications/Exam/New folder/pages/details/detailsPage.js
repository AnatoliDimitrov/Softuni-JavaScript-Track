import authentication from "../../services/authentication.js";
import detailsTemplate from "./detailsTemplate.js";

async function view(context) {

    async function like(context, e) {
        let bookId = context.params.id;
        await authentication.like({bookId})
        context.page.redirect(`/details/${bookId}`);
    }

    async function del(context, e) {
        let confirmation = confirm('Are you sure?');
        if (confirmation) {
            await authentication.del(context.params.id)
            context.page.redirect(`/all`);
        }
    }
    let likesCount = await authentication.getLikesCount(context.params.id);
    let liked = await authentication.getSpecificLike(context.params.id, authentication.getUserId());

    like = like.bind(null, context);
    del = del.bind(null, context);

    let element = await authentication.getOne(context.params.id);
    let isOwner = element._ownerId === authentication.getUserId();
    let isLoggedIn = authentication.isLoggedIn();

    let html = detailsTemplate.template(element, isOwner, isLoggedIn, liked, likesCount, del, like);
    context.main(html);
}

export default {
    view
}