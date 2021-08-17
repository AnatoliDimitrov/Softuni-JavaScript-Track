import mainTemplate from "./mainTemplate.js";


async function view(context) {
    //let movies = await authentication.get();
    //let isLoggedIn = authentication.isLoggedIn();
    let html = mainTemplate.template();
    context.main(html);
}

export default {
    view
}