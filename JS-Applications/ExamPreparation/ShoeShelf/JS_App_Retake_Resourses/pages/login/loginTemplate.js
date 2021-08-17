import { html } from '../../node_modules/lit-html/lit-html.js';

function template(infoObj) {
    return html`
    <h1>Login</h1>
        <p class="form-info">Don't have account?
            <a href="/register">Register now</a> and fix that!
        </p>
        <form @submit=${infoObj.submitForm} action="">
            <div>
                <input type="email" name="email" placeholder="Email...">
            </div>

            <div>
                <input type="password" name="password" placeholder="Password...">
            </div>
            <div> 
                <button>Login</button>
            </div>
        </form>
    `;
}

export default {
    template
}