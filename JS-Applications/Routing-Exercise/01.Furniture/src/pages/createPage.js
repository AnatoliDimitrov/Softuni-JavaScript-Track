import authService from "../../services/authService.js";
import createTepmplate from "../templates/createTepmplate.js";

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
            let html = createTepmplate.template(fileds, correct, submitForm);
            context.main(html);
        } else {
            await authService.post(fileds);
            context.page.redirect('/index');
        }
    }

    submitForm = submitForm.bind(null, context);

    fileds = {
        make: '',
        model: '',
        year: '',
        description: '',
        price: '',
        img: '',
        material: '',
    }
    correct = {
        make: 'incorrect',
        model: 'incorrect',
        year: 'incorrect',
        description: 'incorrect',
        price: 'incorrect',
        img: 'incorrect',
        material: 'incorrect',
    }
    let html = createTepmplate.template(fileds, correct, submitForm);
    context.main(html);
}

export default {
    view
}