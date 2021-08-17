import { render } from "./../node_modules/lit-html/lit-html.js";
import auth from "./services/authService.js";
import optionsTemplate from "./templates/optionsTemplate.js";

let selectElement = document.getElementById('menu');
let formElement = document.querySelector('form');
formElement.addEventListener('submit', addItem);

renderOptions();

async function renderOptions() {
    let options = await getOptions();
    render(optionsTemplate.allOptionsTemplate(Object.values(options)), selectElement);
    console.log(options);
}

async function addItem(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let newOption = formData.get('option');
    if (newOption) {
        await auth.postWithoutAuth({ text: newOption })
        await renderOptions();
        form.reset();
    }
}

async function getOptions() {
    return await auth.get();
}