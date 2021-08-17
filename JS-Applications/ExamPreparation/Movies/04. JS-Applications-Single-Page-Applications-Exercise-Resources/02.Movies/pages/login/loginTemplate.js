import { html } from '../../node_modules/lit-html/lit-html.js';

function template(infoObj) {
    return html`
    <section id="login">
    <section id="form-login">
    <form @submit=${infoObj.submitForm} class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    </section>
    `;
}

export default {
    template
}