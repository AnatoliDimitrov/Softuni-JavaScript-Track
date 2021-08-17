import { html } from '../../node_modules/lit-html/lit-html.js';

function template(infoObj) {
    return html`
    <section id="edit-page" class="edit">
        <form @submit=${infoObj.submitForm} id="edit-form" action="#" method="">
            <fieldset>
                <legend>Edit my Book</legend>
                <p class="field">
                    <label for="title">Title</label>
                    <span class="input">
                        <input type="text" name="title" id="title" .value=${infoObj.e.title}>
                    </span>
                </p>
                <p class="field">
                    <label for="description">Description</label>
                    <span class="input">
                        <textarea name="description" id="description">${infoObj.e.description}</textarea>
                    </span>
                </p>
                <p class="field">
                    <label for="image">Image</label>
                    <span class="input">
                        <input type="text" name="imageUrl" id="image" .value=${infoObj.e.imageUrl}>
                    </span>
                </p>
                <p class="field">
                    <label for="type">Type</label>
                    <span class="input">
                        <select id="type" name="type" value="Fiction">
                            ${infoObj.e.type === 'Fiction'
                                ? html`<option value="Fiction" selected>Fiction</option>`
                                : html`<option value="Fiction"></option>Fiction</option>`}
                            ${infoObj.e.type === 'Romance'
                                ? html`<option value="Romance" selected>Romance</option>`
                                : html`<option value="Romance"></option>Romance</option>`}
                            ${infoObj.e.type === 'Mistery'
                                ? html`<option value="Mistery" selected>Mistery</option>`
                                : html`<option value="Mistery"></option>Mistery</option>`}
                            ${infoObj.e.type === 'Classic'
                                ? html`<option value="Classic" selected>Classic</option>`
                                : html`<option value="Classic"></option>Classic</option>`}
                            ${infoObj.e.type === 'Other'
                                ? html`<option value="Other" selected>Other</option>`
                                : html`<option value="Other"></option>Other</option>`}
                        </select>
                    </span>
                </p>
                <input class="button submit" type="submit" value="Save">
            </fieldset>
        </form>
    </section>
    `;
}

export default {
    template
}