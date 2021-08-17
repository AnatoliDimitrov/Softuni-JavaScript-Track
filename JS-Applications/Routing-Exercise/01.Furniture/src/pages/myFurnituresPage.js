import authService from "../../services/authService.js";
import catalogTemplate from "../templates/catalogTemplate.js";


async function view(context) {
    let id = authService.getUserId();
    let furnitures = await authService.filterByUserId(id);
    console.log(furnitures);
    let html = catalogTemplate.furnitures(furnitures);
    context.main(html);
}

export default {
    view
}