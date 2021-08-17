import { html } from '../../node_modules/lit-html/lit-html.js';

function template(movie, isOwner, likesCount, liked, del, like) {
    return html`
            <section id="movie-example">
                <div class="container">
                    <div class="row bg-light text-dark">
                        <h1>Movie title: ${movie.title}</h1>

                        <div class="col-md-8">
                            <img class="img-thumbnail" src=${movie.img}
                                 alt="Movie">
                        </div>
                        <div class="col-md-4 text-center">
                            <h3 class="my-3 ">Movie Description</h3>
                            <p>${movie.description}</p>
                            ${isOwner
            ? html`
                                    <a @click=${del} class="btn btn-danger" href="#">Delete</a>
                                    <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>
                                    <span class="enrolled-span">Liked ${likesCount}</span>`
            : html`
                                ${liked.length !== 0
                    ? html`<span class="enrolled-span">Liked ${likesCount}</span>`
                    : html`<a @click=${like} class="btn btn-primary" href="#">Like</a>`
                }
                            `}
                        </div>
                    </div>
                </div>
            </section>
    `;
}

export default {
    template,
}