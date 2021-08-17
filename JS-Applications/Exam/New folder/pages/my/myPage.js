import authentication from "../../services/authentication.js";
import allTemplate from "./myTemplate.js";


async function view(context) {
    let userId = authentication.getUserId();
    let arr = await authentication.getMy(userId);
    let html = allTemplate.template(arr, userId);
    context.main(html);
}

export default {
    view
}