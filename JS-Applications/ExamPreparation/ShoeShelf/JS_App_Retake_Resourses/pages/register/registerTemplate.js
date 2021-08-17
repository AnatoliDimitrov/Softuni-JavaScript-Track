import { html } from '../../node_modules/lit-html/lit-html.js';

function template(infoObj) {
    return html`
    <h1>Register</h1>
        <p class="form-info">Already registered?
            <a href="/login">Login now</a> and have some fun!
        </p>

        <form @submit=${infoObj.submitForm} action="">
            <div>
                <input type="email" name="email" placeholder="Email...">
            </div>
            <div>
                <input type="password" name="password" placeholder="Password">
            </div>
            <div>
                <input type="password" name="repeatPass" placeholder="Re-password">
            </div>
            <div>
                <p class="message"></p>
                <button>Register</button>
            </div>
        </form>
    `;
}

export default {
    template
}