import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

function template(element, isOwner, isBuyer, del, buy) {
    return html`
            <div class="offer-details">
            <h1>${element.name}</h1>
            <div class="info">
                <img src=${element.img}
                    alt="">
                <div class="description">${element.description}
                    <br>
                    <p class="price">Buyers: ${element.buyers.length}</p>
                    <br>
                    <p class="price">$${element.price}</p>
                </div>
            </div>
            <div class="actions">
                ${isOwner
        ? html`<a href="/edit/${element._id}">Edit</a>
                <a @click=${del} >Delete</a>
                <a @click=${buy}>Buy</a>`
        : html`<a @click=${buy}>Buy</a>`}
            ${isBuyer
        ? html`<span>You bought it</span>`
        : nothing}    
            </div>
        </div>
    `;
}

export default {
    template,
}