
import { html } from '../../node_modules/lit-html/lit-html.js';

function navTemplate(isLoggedIn, email) {
    return html`
      <h1><a class="home" href="/index">SoftWiki</a></h1>
        <nav class="nav-buttons">
            ${isLoggedIn
        ? html`
            <a href="/create">Create</a>
            <a href="/logout">Logout</a>`
        : html`
            <a href="/login">Login</a>
            <a href="/register">Register</a>`}
        </nav>
    `;
}

export default {
    navTemplate
}