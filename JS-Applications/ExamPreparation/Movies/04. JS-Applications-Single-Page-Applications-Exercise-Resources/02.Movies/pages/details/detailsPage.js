import authentication from "../../services/authentication.js";
import detailsTemplate from "./detailsTemplate.js";

async function view(context) {

    async function like(context, e) {
        let _ownerId = authentication.getUserId();
        let movieId = context.params.id;
        await authentication.like({movieId, _ownerId})
        context.page.redirect(`/details/${movieId}`);
    }

    async function del(context, e) {
        let confirmation = confirm('Are you sure?');
        if (confirmation) {
            await authentication.del(context.params.id)
            context.page.redirect(`/index`);
        }
    }

    let likesCount = await authentication.getLikesCount(context.params.id);
    let liked = await authentication.getSpecificLike(context.params.id, authentication.getUserId());

    like = like.bind(null, context);
    del = del.bind(null, context);

    let movie = await authentication.getOne(context.params.id);
    let isOwner = movie._ownerId === authentication.getUserId();

    let html = detailsTemplate.template(movie, isOwner, likesCount, liked, del, like);
    context.main(html);
}

export default {
    view
}