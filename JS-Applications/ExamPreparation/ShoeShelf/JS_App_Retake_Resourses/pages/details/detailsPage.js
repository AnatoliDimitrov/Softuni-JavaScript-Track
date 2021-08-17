import authentication from "../../services/authentication.js";
import detailsTemplate from "./detailsTemplate.js";

let shoes = undefined;

async function view(context) {

    async function del(context, e) {
        let confirmation = confirm('Are you sure?');
        if (confirmation) {
            await authentication.del(context.params.id)
            context.page.redirect(`/all`);
        }
    }

    async function buy(context, e) {
        let confirmation = confirm('Are you sure?');
        let id = context.params.id;
        if (confirmation) {
            shoes.buyers.push(authentication.getUserEmail());
            await authentication.put(id, { name: shoes.name, price: shoes.price, img: shoes.img, brand: shoes.brand, description: shoes.description, buyers: shoes.buyers });
            context.page.redirect(`/details/${id}`);
        }
    }

    del = del.bind(null, context);
    buy = buy.bind(null, context);
    
    shoes = await authentication.getOne(context.params.id);

    let isBuyer = shoes.buyers.some(e => authentication.getUserEmail() === e);

    let element = await authentication.getOne(context.params.id);
    let isOwner = element._ownerId === authentication.getUserId();

    let html = detailsTemplate.template(element, isOwner, isBuyer, del, buy);
    context.main(html);
}

export default {
    view
}