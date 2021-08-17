import { render } from "./../node_modules/lit-html/lit-html.js";
import townsTemplate from "./Templates/townsTemplate.js";

let formElement = document.querySelector('form');
let rootElement = document.getElementById('root');

formElement.addEventListener('submit', renderTowns);

function renderTowns(e){
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let towns = formData.get('towns').split(', ').filter(x => x);

    render(townsTemplate.allTownsTemplate(towns), rootElement);

    formElement.reset();
}

//Sofia, London, Barcelona