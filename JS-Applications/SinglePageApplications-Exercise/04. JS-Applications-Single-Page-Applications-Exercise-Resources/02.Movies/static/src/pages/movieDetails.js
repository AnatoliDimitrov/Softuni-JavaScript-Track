import navigateTo from "../navigation/navigateTo.js"
import listeners from "../services/listeners.js";
import utils from "../services/utils.js";
import editMovie from "./editMovie.js";

function renderMovieDetails(movie) {
    let movieExample = document.querySelector('#movie-example .container');
    navigateTo.movieDetails();
    let h1 = movieExample.querySelector('h1');
    h1.textContent = movie.title;
    let img = movieExample.querySelector('img');
    img.src = movie.img;
    let divToremove = movieExample.querySelector('#details-buttons');
    divToremove.remove();
    createDiv(movie);
}

let ce = utils.createElement;

async function createDiv(movie) {
    let movieInfo = document.querySelector('#movie-example .container div');
    let delBtn = ce('button', { class: 'btn btn-danger' }, 'Delete')
    delBtn.setAttribute('data-id', movie._id);
    delBtn.addEventListener('click', listeners.deleteMovie);
    let editBtn = ce('button', { class: 'btn btn-warning' }, 'Edit')
    editBtn.addEventListener('click', editMovie.editCurrentMovie);
    editBtn.setAttribute('data-id', movie._id);
    let likeBtn = ce('button', { class: 'btn btn-primary' }, 'Like')
    likeBtn.setAttribute('data-id', movie._id);
    likeBtn.addEventListener('click', listeners.like)
    let email = localStorage.getItem('movieUserEmail');
    let userLikes = await utils.likesOfCurrentUser(movie._id, email);
    let allLikes = await utils.allMovieLikes(movie._id);
    let span = ce('span', { class: 'enrolled-span' }, `Liked ${allLikes}`)
    let p = ce('p', undefined, movie.description);
    let userId = localStorage.getItem('movieUserId');
    let wrapper = undefined;
    if (movie._ownerId === userId) {
        likeBtn.setAttribute("disabled","disabled");
        wrapper = ce('div', { id: 'details-buttons', class: 'col-md-4 text-center' }, p, delBtn, editBtn, likeBtn, span);
    } else {
        if (userLikes.length > 0) {
            wrapper = ce('div', { id: 'details-buttons', class: 'col-md-4 text-center' }, p, span);
        } else {
            span.classList.add('hidden');
            wrapper = ce('div', { id: 'details-buttons', class: 'col-md-4 text-center' }, p, likeBtn, span);
        }
    }

    movieInfo.appendChild(wrapper);
}

export default {
    renderMovieDetails
}