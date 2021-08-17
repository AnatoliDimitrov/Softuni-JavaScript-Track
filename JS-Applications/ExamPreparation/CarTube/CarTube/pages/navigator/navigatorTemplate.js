
import { html } from '../../node_modules/lit-html/lit-html.js';

function navTemplate(isLoggedIn, username) {
    return html`
    <nav>
        <a class="active" href="#">Home</a>
        <a href="all">All Listings</a>
        <a href="/search">By Year</a>
        ${isLoggedIn
        ? html`<!-- Logged users -->
        <div id="profile">
            <a>Welcome ${username}</a>
            <a href="/my">My Listings</a>
            <a href="/create">Create Listing</a>
            <a href="/logout">Logout</a>
        </div>`
        : html`
        <!-- Guest users -->
        <div id="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
        
    </nav>
    `;
}

export default {
    navTemplate
}