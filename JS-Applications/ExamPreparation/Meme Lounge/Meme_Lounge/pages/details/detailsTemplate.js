import { html } from '../../node_modules/lit-html/lit-html.js';

function template(element, isOwner, del) {
    return html`
            <section id="meme-details">
            <h1>Meme Title: ${element.title}</h1>
            <div class="meme-details">
                <div class="meme-img">
                    <img alt="meme-alt" src="${element.imageUrl}">
                </div>
                <div class="meme-description">
                    <h2>Meme Description</h2>
                    <p>${element.description}</p>
                    ${isOwner
                        ? html`
                            <a class="button warning" href="/edit/${element._id}">Edit</a>
                            <button @click=${del} class="button danger">Delete</button>`
                        : html``}
                </div>
            </div>
        </section>
    `;
}

export default {
    template,
}