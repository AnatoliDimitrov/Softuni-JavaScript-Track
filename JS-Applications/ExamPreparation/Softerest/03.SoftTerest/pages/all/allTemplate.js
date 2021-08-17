import { html } from '../../node_modules/lit-html/lit-html.js';

function template(arr) {
    return html`
    <div id="dashboard-holder">
        ${arr.length !== 0
            ? html`${arr.map(e => single(e))}`
                    : html`<h1>No ideas yet! Be the first one :)</h1>`}
        
    </div>
                    `;
}

function single(e) {
    return html`
    <!-- Display all records -->
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
            <p class="card-text">${e.title}</p>
        </div>
        <img class="card-image" src=${e.img} alt="Card image cap">
        <a class="btn" href="/details/${e._id}">Details</a>
    </div>
                    `;
}

export default {
    template
}