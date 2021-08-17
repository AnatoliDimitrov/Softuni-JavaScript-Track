import { html } from "./../../node_modules/lit-html/lit-html.js";

function allOptionsTemplate(options) {
    return html`${options.map(option => html`<option .value=${option._id}>${option.text}</option>`)}`;
}

export default {
    allOptionsTemplate
}