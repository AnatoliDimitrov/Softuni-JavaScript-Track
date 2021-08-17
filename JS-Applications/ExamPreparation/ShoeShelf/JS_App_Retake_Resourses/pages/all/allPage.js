import authentication from "../../services/authentication.js";
import allTemplate from "./allTemplate.js";


async function view(context) {
    let arr = await authentication.get();
    arr.sort((a, b) => b.buyers.length - a.buyers.length)
    let html = allTemplate.template(arr);
    context.main(html);
}

export default {
    view
}