import authentication from "../../services/authentication.js";
import mainTemplate from "./mainTemplate.js";


async function view(context) {
    let articles = await authentication.get();
    let isLoggedIn = authentication.isLoggedIn();
    if (isLoggedIn) {
        let html = mainTemplate.template(articles);
        context.main(html);
    } else {
        context.page.redirect('/login');
    }
}

export default {
    view
}