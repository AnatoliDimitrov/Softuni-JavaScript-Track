
import { html } from '../../node_modules/lit-html/lit-html.js';

function navTemplate(isLoggedIn, email) {
    return html`
     <nav>
        <ul>
            ${isLoggedIn
        ? html`<li>
                <a href="/create">Create new offer</a>
            </li>`
        : html`<li class="site-logo">Shoe</li>`}
            <li>
                <a href=${isLoggedIn ? '/all' : '/index'}>
                    <img src="../public/sneakers.png" alt="">
                </a>
            </li>
            ${isLoggedIn
        ? html` <li>Welcome, ${email} | 
                <a  href="/logout">Logout</a>
            </li>`
        : html`<li class="site-logo">Shelf</li>`}
        </ul>
    </nav>
    `;
}

export default {
    navTemplate
}