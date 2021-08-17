import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

function template(element, isOwner, del) {
    return html`
           <div class="container home some">
        <img class="det-img" src=${element.img} />
        <div class="desc">
            <h2 class="display-5">${element.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${element.description}</p>
        </div>
        ${isOwner
        ? html` <div class="text-center">
            <a @click=${del} class="btn detb" href="">Delete</a>
        </div>`
    : nothing}
    </div>
    `;
}

export default {
    template,
}