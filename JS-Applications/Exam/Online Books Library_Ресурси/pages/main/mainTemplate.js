import { html } from '../../node_modules/lit-html/lit-html.js';

function template(arr) {
    return html`
    <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
            <ul class="other-books-list">
             ${arr.length !== 0
        ? html`${arr.map(b => single(b))}`
        : html`<p class="no-books">No books in database!</p>`}
            </ul>
            
        </section>
`;
}

function single(e) {
    return html`
   <li class="otherBooks">
                    <h3>${e.title}</h3>
                    <p>Type: ${e.type}</p>
                    <p class="img"><img src=${e.imageUrl}></p>
                    <a class="button" href="/details/${e._id}">Details</a>
                </li>
                    `;
}

export default {
    template
}