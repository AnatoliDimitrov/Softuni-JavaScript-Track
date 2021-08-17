import allMovies from "../pages/allMovies.js";

let navElements = Array.from(document.querySelectorAll('.navigation'));
let navUl = document.querySelector('#container ul');

let homePage = navElements[0];
let h1 = navElements[1];
let addBtn = navElements[2];
let movie = navElements[3];
let addMovie = navElements[4];
let movieDescription = navElements[5];
let editMovie = navElements[6];
let login = navElements[7];
let register = navElements[8];

function logedHomePage() {
    allMovies.renderMovies();
    Array.from(navUl.children).map(li => { li.classList.contains('user') ? li.classList.remove('hidden') : li.classList.add('hidden') });
    let welcome = navUl.children[0].querySelector('.nav-link');
    welcome.textContent = `Welcome, ${localStorage.getItem('movieUserEmail')}`;
    hideElements();
    homePage.classList.remove('hidden');
    h1.classList.remove('hidden');
    addBtn.classList.remove('hidden');
    movie.classList.remove('hidden');
}

function notLogedHomePage() {
    allMovies.renderMovies();
    Array.from(navUl.children).map(li => { li.classList.contains('user') ? li.classList.add('hidden') : li.classList.remove('hidden') });
    hideElements();
    homePage.classList.remove('hidden');
    h1.classList.remove('hidden');
    movie.classList.remove('hidden');
}

function registration() {
    hideElements();
    register.classList.remove('hidden');
}

function loginForm() {
    hideElements();
    login.classList.remove('hidden');
}

function addMovieForm() {
    hideElements();
    addMovie.classList.remove('hidden');
}

function movieDetails() {
    hideElements();
    movieDescription.classList.remove('hidden');
}

function editMovieForm() {
    hideElements();
    editMovie.classList.remove('hidden');
}

function hideElements() {
    navElements.map(e => e.classList.add('hidden'));
}

export default {
    logedHomePage,
    notLogedHomePage,
    registration,
    loginForm,
    addMovieForm,
    movieDetails,
    editMovieForm,
}