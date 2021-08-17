import { html } from '../node_modules/lit-html/lit-html.js';

function createCardsTemplate(contacts, showInfo) {
    return html`${contacts.map(c => html`<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${c.name}</h2>
        <button @click=${showInfo} class="detailsBtn">Details</button>
        <div class="details" id=${c.id}>
            <p>Phone number: ${c.phoneNumber}</p>
            <p>Email: ${c.email}</p>
        </div>
    </div>
</div>`)}`;
}

export default {
    createCardsTemplate
}