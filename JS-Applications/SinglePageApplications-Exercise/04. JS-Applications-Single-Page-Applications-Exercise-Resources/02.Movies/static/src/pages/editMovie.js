import navigateTo from "../navigation/navigateTo.js";
import listeners from "../services/listeners.js";

function editCurrentMovie(e) {
    e.preventDefault();
    let id = e.currentTarget.getAttribute('data-id');
    let form = document.querySelector('#edit-movie form');
    form.setAttribute('data-movie-id', id);
    form.addEventListener('submit', listeners.editMovie)
    form.reset();
    navigateTo.editMovieForm();
}

export default {
    editCurrentMovie,
}