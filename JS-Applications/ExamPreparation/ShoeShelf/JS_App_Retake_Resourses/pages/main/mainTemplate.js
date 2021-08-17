import { html } from '../../node_modules/lit-html/lit-html.js';

function template() {
    return html`
    <div class="container">
            <div class="about-us">
                <div>
                    <img src="../public/shoes.jpg" alt="">
                    <img src="../public/shoes2.jpg" alt="">
                </div>
                <p>
                    <a href="/register">Register Now</a> and Try it!
                </p>
            </div>
        </div>
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