import authService from "../../services/authService.js";
import editTemplate from "../templates/editTemplate.js";

let fileds = {};
let correct = {};

async function view(context) {
    async function submitForm(context, e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let make = formData.get('make');
        let model = formData.get('model');
        let year = Number(formData.get('year'));
        let description = formData.get('description');
        let price = Number(formData.get('price'));
        let img = formData.get('img');
        let material = formData.get('material');

        fileds = {
            make,
            model,
            year,
            description,
            price,
            img,
            material
        }

        correct = {
            make: 'correct',
            model: 'correct',
            year: 'correct',
            description: 'correct',
            price: 'correct',
            img: 'correct',
            material: 'correct',
        }

        if (make.length < 4) {
            correct.make = 'incorrect'
        }
        if (model.length < 4) {
            correct.model = 'incorrect'
        }
        if (year < 1950 || year > 2050) {
            correct.year = 'incorrect'
        }
        if (description.length <= 10) {
            correct.description = 'incorrect'
        }
        if (price <= 0) {
            correct.price = 'incorrect'
        }
        if (img === '') {
            correct.img = 'incorrect'
        }

        if (Object.values(correct).includes('incorrect')) {
            let html = editTemplate.template(fileds, correct, submitForm);
            context.main(html);
        } else {
            await authService.put(context.params.id, fileds);
            context.page.redirect('/index');
        }
    }

    submitForm = submitForm.bind(null, context);

    let furniture = await authService.getWithId(context.params.id);
    fileds = {
        make: furniture.make,
        model: furniture.model,
        year: furniture.year,
        description: furniture.description,
        price: furniture.price,
        img: furniture.img,
        material: furniture.material,
    }
    correct = {
        make: 'correct',
        model: 'correct',
        year: 'correct',
        description: 'correct',
        price: 'correct',
        img: 'correct',
        material: 'correct',
    }
    let html = editTemplate.template(fileds, correct, submitForm);
    context.main(html);
}

export default {
    view
}