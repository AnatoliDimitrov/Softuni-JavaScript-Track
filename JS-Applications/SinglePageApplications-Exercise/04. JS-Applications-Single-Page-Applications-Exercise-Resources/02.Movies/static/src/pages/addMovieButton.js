import listeners from "../services/listeners.js";

function addBtn() {
    let addBtn = document.getElementById('add-movie-button');
    addBtn.addEventListener('click', listeners.addMovieBtn);
}

async function addMovieForm() {
    let addForm = document.querySelector('#add-movie form');
    addForm.addEventListener('submit', await listeners.addMovie);
}

export default {
    addBtn,
    addMovieForm
}