import { html } from '../../node_modules/lit-html/lit-html.js';

function template(infoObj) {
    return html`
    <h1>Create New Offer</h1>
        <p class="message"></p>
        <form @submit=${infoObj.submitForm}>
            <div>
                <input type="text" name="name" placeholder="Name...">
            </div>
            <div>
                <input type="text" name="price" placeholder="Price...">
            </div>
            <div>
                <input type="text" name="img" placeholder="Image url...">
            </div>
            <div>
                <textarea placeholder="Give us some description about this offer..." name="description"></textarea>
            </div>
            <div>
                <input type="text" name="brand" placeholder="Brand...">
            </div>
            <div>
                <button>Create</button>
            </div>
        </form>
    `;
}

export default {
    template
}