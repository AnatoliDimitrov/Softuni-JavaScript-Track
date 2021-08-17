
import { html } from '../../node_modules/lit-html/lit-html.js';

function navTemplate(isLoggedIn, email) {
    return html`
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a class="navbar-brand text-light" href="/index">Movies</a>
        <ul class="navbar-nav ml-auto ">
            ${isLoggedIn
        ? html`
        <li class="nav-item">
                <a class="nav-link">Welcome, ${email}</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/logout">Logout</a>
            </li>`
        : html`<li class="nav-item">
                <a class="nav-link" href="/login">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/register">Register</a>
            </li>`}
        </ul>
    </nav>
    `;
}

export default {
    navTemplate
}