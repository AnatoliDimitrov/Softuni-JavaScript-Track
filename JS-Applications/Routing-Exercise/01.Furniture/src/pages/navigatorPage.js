import navigatorTemplate from "../templates/navigatorTemplate.js"

function view(context, next) {
    let html = navigatorTemplate.navTemplate(context.pathname);
    context.navigator(html);
    next();
}

export default {
    view
}