import authentication from "../../services/authentication.js";
import mainTemplate from "./mainTemplate.js";


async function view(context) {
    let html = mainTemplate.template(authentication.isLoggedIn())
    context.main(html);
}

export default {
    view
}