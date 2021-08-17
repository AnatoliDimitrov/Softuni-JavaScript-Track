import authentication from "../../services/authentication.js";
import mainTemplate from "./mainTemplate.js";


async function view(context) {
    let arr = await authentication.getMostRecent();
    // let isLoggedIn = authentication.isLoggedIn();
    let html = mainTemplate.template(arr);
    context.main(html);
}

export default {
    view
}