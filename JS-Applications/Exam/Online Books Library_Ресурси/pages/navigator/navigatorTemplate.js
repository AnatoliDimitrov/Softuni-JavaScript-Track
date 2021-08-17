
import { html } from '../../node_modules/lit-html/lit-html.js';

function navTemplate(isLoggedIn, email) {
    return html`
    <nav class="navbar">
                <section class="navbar-dashboard">
                    <a href="/index">Dashboard</a>
                    ${isLoggedIn
        ? html`
                    <!-- Logged-in users -->
                    <div id="user">
                        <span>Welcome, ${email}</span>
                        <a class="button" href="/my">My Books</a>
                        <a class="button" href="/create">Add Book</a>
                        <a class="button" href="/logout">Logout</a>
                    </div>`
                : html`
                    <!-- Guest users -->
                    <div id="guest">
                        <a class="button" href="/login">Login</a>
                        <a class="button" href="/register">Register</a>
                    </div>`}
                </section>
            </nav>
    `;
}

export default {
    navTemplate
}