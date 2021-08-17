import { html } from '../../node_modules/lit-html/lit-html.js';

function template(arr) {
    return html`
    <section id="meme-feed">
            <h1>All Memes</h1>
            <div id="memes">
				<!-- Display : All memes in database ( If any ) -->
                ${arr.length > 0
        ? html`${arr.map(m => html`${single(m)}`)}`
            : html`<p class="no-memes">No memes in database.</p>`}
				<!-- Display : If there are no memes in database -->
				
			</div>
        </section>
`;
}

function single(e) {
    return html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${e.title}</p>
                <img class="meme-image" alt="meme-img" src=${e.imageUrl}>
            </div>
            <div id="data-buttons">
                <a class="button" href="details/${e._id}">Details</a>
            </div>
        </div>
    </div>
                    `;
}

export default {
    template
}