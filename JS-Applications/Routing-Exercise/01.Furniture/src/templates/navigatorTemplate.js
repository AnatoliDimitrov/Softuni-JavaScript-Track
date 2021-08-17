import { html } from './../../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';
import authService from '../../services/authService.js';

function navTemplate(currentLocation) {
    return html`
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="/index" class=${ifDefined(currentLocation.startsWith('/index') ? 'active' : undefined)}>Dashboard</a>
        ${authService.isLoggedIn()
        ? html`
        <div id="user">
            <a id="createLink" href="/create" class=${ifDefined(currentLocation.startsWith('/create') ? 'active' : undefined)}>Create Furniture</a>
            <a id="profileLink" href="/my-furniture" class=${ifDefined(currentLocation.startsWith('/my-furniture') ? 'active' : undefined)} >My Publications</a>
            <a id="logoutBtn" href="/logout"}>Logout</a>
        </div>`
        : html`
        <div id="guest">
            <a id="loginLink" href="/login" class=${ifDefined(currentLocation.startsWith('/login')?'active':undefined)}>Login</a>
            <a id="registerLink" href="/register" class=${ifDefined(currentLocation.startsWith('/register')?'active':undefined)}>Register</a>
        </div>`}
    </nav>`;
}

export default {
    navTemplate
}