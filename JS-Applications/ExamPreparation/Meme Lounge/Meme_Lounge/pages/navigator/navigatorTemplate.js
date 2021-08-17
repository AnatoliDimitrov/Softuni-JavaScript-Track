
import { html } from '../../node_modules/lit-html/lit-html.js';

function navTemplate(isLoggedIn, email) {
    return html`
     <nav>
            <a href="/all">All Memes</a>
            ${isLoggedIn
        ? html`<!-- Logged users -->
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, ${email}</span>
                    <a href="/my">My Profile</a>
                    <a href="/logout">Logout</a>
                </div>
            </div>`
        : html`<!-- Guest users -->
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/index">Home Page</a>
            </div>`}
        </nav>
    `;
}

export default {
    navTemplate
}