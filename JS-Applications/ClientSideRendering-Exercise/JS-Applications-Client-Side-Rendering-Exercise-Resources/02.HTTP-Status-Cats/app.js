import { cats } from './catSeeder.js';
import { render } from './../node_modules/lit-html/lit-html.js';
import catsTemplate from './Templates/catsTemplate.js';

let catsSection = document.getElementById('allCats');

render(catsTemplate.allCatsTemplate(cats, statusCode), catsSection);

function statusCode(e) {
    let btn = e.currentTarget;
    let div = btn.nextElementSibling;
    if (btn.textContent.startsWith('Show')) {
        btn.textContent = 'Hide status code';
        div.style.display = 'block';
    } else {
        btn.textContent = 'Show status code';
        div.style.display = 'none';
    }
}