import authentication from "../../services/authentication.js";
import mainTemplate from "./mainTemplate.js";


async function view(context) {
    let movies = await authentication.get();
    let isLoggedIn = authentication.isLoggedIn();
    let html = mainTemplate.template(movies, isLoggedIn);
    context.main(html);
}

export default {
    view
}