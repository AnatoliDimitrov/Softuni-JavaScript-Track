import { html } from '../../node_modules/lit-html/lit-html.js';

function template(confirmObj) {
    return html`
    <div class="overlay">
        <div class="modal">
            <p>Are you sure?</p>
            <a href="#" @click=${() => confirmObj.confirm(true, confirmObj.teamId, confirmObj.id)} class="action">Yes</a>
            <a href="#" @click=${() => confirmObj.confirm(false, confirmObj.teamId, confirmObj.id)} class="action">No</a>
        </div>
    </div>`;
}

export default {
    template
}