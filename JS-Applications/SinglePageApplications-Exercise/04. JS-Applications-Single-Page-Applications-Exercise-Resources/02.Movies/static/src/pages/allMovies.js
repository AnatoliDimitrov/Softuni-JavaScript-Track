import ajax from "../services/ajax.js";
import constants from "../services/constants.js";
import listeners from "../services/listeners.js";
import utils from "../services/utils.js";
let ce = utils.createElement;

async function renderMovies() {
    let moviesDeck = document.getElementById('movies-deck');
    Array.from(moviesDeck.children).forEach(e => e.remove());

    let moviesData = await ajax.get(constants.movies);

    moviesData.forEach(m => {
        moviesDeck.appendChild(createMovieElement(m));
    })
}

function createMovieElement(movie) {
    let button = ce('button', { type: 'button', id: movie._id, class: 'btn btn-info' }, 'Details');
    button.addEventListener('click', listeners.movieDetailsListener);
    let token = localStorage.getItem('movieAccessToken');
    let a = ce('a', { href: '#' }, button);
    if (!token) {
        a.classList.add('hidden');
    }
    let footerDiv = ce('div', { class: 'card - footer' }, a);
    let h4 = ce('h4', { class: 'card-title' }, movie.title);
    let bodyDiv = ce('div', { class: 'card-body' }, h4);
    let img = ce('img', {
        class: 'card-img-top', src: movie.img, alt: 'Card image cap', width: 400
    });
    let wrapper = ce('div', { class: 'card mb-4' }, img, bodyDiv, footerDiv);

    return wrapper;
}

export default {
    renderMovies
}