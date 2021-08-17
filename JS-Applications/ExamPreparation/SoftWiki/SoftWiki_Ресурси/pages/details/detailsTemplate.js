import { html } from '../../node_modules/lit-html/lit-html.js';

function template(element, isOwner, del) {
    return html`
            <div class="container details">
        <div class="details-content">
            <h2>Title</h2>
            <strong>Category</strong>
            <p>Content</p>
            <div class="buttons">
                ${isOwner
                    ? html`
                <a @click=${del} href="#" class="btn delete">Delete</a>
                <a href="/edit/${element._id}" class="btn edit">Edit</a>`
                    : html`
                <a href="/index" class="btn edit">Back</a>`}
            </div>
        </div>
    </div>
    `;
}

export default {
    template,
}