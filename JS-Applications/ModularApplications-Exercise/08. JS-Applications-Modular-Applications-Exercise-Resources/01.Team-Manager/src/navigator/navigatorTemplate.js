
import { html } from '../../node_modules/lit-html/lit-html.js';

function navTemplate(isLoggedIn) {
    return html`
     <a href="/index" class="site-logo">Team Manager</a>
            <nav>
                <a href="/browse-teams" class="action">Browse Teams</a>
                ${isLoggedIn
            ? html`
                <a href="/my-teams" class="action">My Teams</a>
                <a href="/logout" class="action">Logout</a>`
            : html`
                <a href="/login" class="action">Login</a>
                <a href="/register" class="action">Register</a>`}
            </nav>`;
}

export default {
    navTemplate
}