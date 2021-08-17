import { html } from '../../node_modules/lit-html/lit-html.js';

function template(arr) {
    return html`
    <div class="shoes">
           ${arr.length !== 0
        ? arr.map(s => single(s))
    : html`<p>No shoes to display. Be the first to create a new offer...</p>`}
        </div>
`;
}

function single(e) {
    return html`<div class="shoe">
                    <img src=${e.img}>
                    <h3>${e.name}</h3>
                    <a href="/details/${e._id}" >Buy it for $${e.price}</a>
                </div>`;
}

export default {
    template
}