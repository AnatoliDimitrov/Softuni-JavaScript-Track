import { html } from './../../node_modules/lit-html/lit-html.js'

function allTownsTemplate(towns) {
    return html`<ul>${towns.map(t => singleTownTemplate(t))}</ul>`;
}

function singleTownTemplate(town) {
    return html`<li>${town}</li>`
}

export default {
    allTownsTemplate
}