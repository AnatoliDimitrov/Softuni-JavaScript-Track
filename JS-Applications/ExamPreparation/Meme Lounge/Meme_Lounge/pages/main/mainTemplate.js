import { html } from '../../node_modules/lit-html/lit-html.js';

function template() {
    return html`
    <section id="welcome">
            <div id="welcome-container">
                <h1>Welcome To Meme Lounge</h1>
                <img src="/images/welcome-meme.jpg" alt="meme">
                <h2>Login to see our memes right away!</h2>
                <div id="button-div">
                    <a href="/login" class="button">Login</a>
                    <a href="/register" class="button">Register</a>
                </div>
            </div>
        </section>
`;
}

// function movieCard(movie, isLoggedIn) {
//     return html`
//     <div class="card mb-4">
//                         <img class="card-img-top"
//                              src=${movie.img}
//                              alt="Card image cap" width="400">
//                         <div class="card-body">
//                             <h4 class="card-title">${movie.title}</h4>
//                         </div>
//                         <div class="card-footer">
//                             ${isLoggedIn
//                              ? html` <a href="/details/${movie._id}">
//                                 <button type="button" class="btn btn-info">Details</button>
//                             </a>`
//                             : html``}
//                         </div>

//                     </div>
//                     `;
// }

export default {
    template
}