import { html, nothing } from '../../node_modules/lit-html/lit-html.js';

function template(element, isOwner, isLoggedIn, liked, likesCount, del, like) {
    return html`
            <section id="details-page" class="details">
            <div class="book-information">
                <h3>${element.title}</h3>
                <p class="type">Type: ${element.type}</p>
                <p class="img"><img src=${element.imageUrl}></p>
                <div class="actions">
                    ${isLoggedIn
        ? html`${isOwner
            ? html` <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    <a class="button" href="/edit/${element._id}">Edit</a>
                    <a @click=${del} class="button" href="#">Delete</a>
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likesCount}</span>
                    </div>`
            : html`${liked === 0
                ? html`<a @click=${like} class="button" href="#">Like</a>`
                : nothing}

<!-- ( for Guests and Users )  -->
<div class="likes">
    <img class="hearts" src="/images/heart.png">
    <span id="total-likes">Likes: ${likesCount}</span>`}`
                : html`<div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${likesCount}</span>
                    </div>`}
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${element.description}</p>
            </div>
        </section>
    `;
}

export default {
    template,
}