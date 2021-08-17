import { html } from '../../node_modules/lit-html/lit-html.js';

function template(arr, userId, email, gender, username) {
    return html`
     <section id="user-profile-page" class="user-profile">
            <article class="user-info">
                <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
                <div class="user-content">
                    <p>Username: ${username}</p>
                    <p>Email: ${email}</p>
                    <p>My memes count: ${arr.length}</p>
                </div>
            </article>
            <h1 id="user-listings-title">User Memes</h1>
            <div class="user-meme-listings">
            ${arr.length !== 0
        ? html`<!-- Display : All created memes by this user (If any) --> 
                ${arr.map(m => html`${single(m)}`)}`
        : html` <!-- Display : If user doesn't have own memes  --> 
                <p class="no-memes">No memes in database.</p>`}
            </div>
        </section>
`;
}

function single(e) {
    return html`
     <div class="user-meme">
                    <p class="user-meme-title">${e.title}</p>
                    <img class="userProfileImage" alt="meme-img" src=${e.imageUrl}>
                    <a class="button" href="/details/${e._id}">Details</a>
                </div>
                    `;
}

export default {
    template
}