import authService from "../../services/authService.js";
import catalogTemplate from "../templates/catalogTemplate.js";


async function view(context) {
    let furnitures = await authService.get();
    let html = catalogTemplate.furnitures(furnitures);
    context.main(html);
}

export default {
    view
}