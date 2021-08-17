import authentication from "../../services/authentication.js";
import navigatorTemplate from "./navigatorTemplate.js";


function view(context, next) {
    let isLogedIn = authentication.isLoggedIn();
    let html = navigatorTemplate.navTemplate(isLogedIn);
    context.navigator(html);
    next();
}

export default {
    view
}