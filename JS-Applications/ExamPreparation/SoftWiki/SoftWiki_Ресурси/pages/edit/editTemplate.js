import { html } from '../../node_modules/lit-html/lit-html.js';

function template(infoObj) {
    return html`
    <div class="container">

<form @submit=${infoObj.submitForm}>
    <fieldset>
        <legend>Edit article</legend>
        <p class="field title">
            <input type="text" name="title" id="title" placeholder="Arrays" .value=${infoObj.e.title}>
            <label for="title">Title:</label>
        </p>

        <p class="field category">
            <input type="text" name="category" id="category" placeholder="JavaScript" .value=${infoObj.e.category}>
            <label for="category">Category:</label>
        </p>
        <p class="field content">
            <textarea name="content" id="content">${infoObj.e.content}</textarea>
            <label for="content">Content:</label>
        </p>

        <p class="field submit">
            <button class="btn submit" type="submit">Edit</button>
        </p>

    </fieldset>
</form>
</div>
    `;
}

export default {
    template
}