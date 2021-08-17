import { html } from '../../node_modules/lit-html/lit-html.js';

function template(info) {
    return html`
    <section id="edit">
                <article class="narrow">
                    <header class="pad-med">
                        <h1>Edit Team</h1>
                    </header>
                    <form @submit=${info.submitForm} id="edit-form" class="main-form pad-large">
                        <div class="error hidden">Error message.</div>
                        <label>Team name: <input type="text" name="name" .value=${info.team.name}></label>
                        <label>Logo URL: <input type="text" name="logoUrl" .value=${info.team.logoUrl}></label>
                        <label>Description: <textarea name="description" .value=${info.team.description}></textarea></label>
                        <input class="action cta" type="submit" value="Save Changes">
                    </form>
                </article>
            </section>`;
}

export default {
    template
}