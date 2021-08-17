import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

function template(arr, userId) {
    return html`
    <section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            ${arr.length !== 0
        ? html`<ul class="my-books-list">
                ${arr.map(b => single(b))}
            </ul>`
        : html`<p class="no-books">No books in database!</p>`}
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