import navigateTo from "../navigation/navigateTo.js";
import movieDetails from "../pages/movieDetails.js";
import ajax from "./ajax.js";
import constants from "./constants.js";

function registrationBtn() {
    navigateTo.registration();
}

function loginBtn() {
    navigateTo.loginForm();
}

function addMovieBtn() {
    navigateTo.addMovieForm();
}

async function register(e) {
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');
    let repass = formData.get('repeatPassword');

    if (password.length < 6 || password !== repass) {
        alert('Password mist be atleast 6 symbols and the two passwords must natch!');
        return;
    }

    let result = await ajax.post(constants.register, { email, password });
    localStorage.setItem('movieAccessToken', result.accessToken);
    localStorage.setItem('movieUserEmail', result.email);
    localStorage.setItem('movieUserId', result._id);

    form.reset();

    navigateTo.logedHomePage();
}

async function addMovie(e) {
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);

    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageUrl');

    if (title && description && img) {
        let result = await ajax
            .postWithAuth(constants.movies,
                {
                    title,
                    description,
                    img, _ownerId: localStorage.getItem('movieUserId')
                });

        form.reset();

        navigateTo.logedHomePage();
    }
    else {
        alert('All fields must not be empty!');
    }
}

async function deleteMovie(e) {
    e.preventDefault()
    let id = e.currentTarget.getAttribute('data-id');
    let result = await ajax.del(`${constants.movies}/${id}`);

    navigateTo.logedHomePage();
}

async function login(e) {
    e.preventDefault()
    let form = e.currentTarget;
    let formData = new FormData(form);

    let email = formData.get('email');
    let password = formData.get('password');

    let result = await ajax.post(constants.login, { email, password });
    localStorage.setItem('movieAccessToken', result.accessToken);
    localStorage.setItem('movieUserEmail', result.email);
    localStorage.setItem('movieUserId', result._id);

    form.reset();

    navigateTo.logedHomePage();
}

async function logout() {
    ajax.getLogout(constants.logout);
    localStorage.removeItem('movieUserId');
    localStorage.removeItem('movieUserEmail');
    localStorage.removeItem('movieAccessToken');
    navigateTo.notLogedHomePage();
}

async function movieDetailsListener(e) {
    e.preventDefault();
    let id = e.target.id;
    let movie = await ajax.get(constants.movies + `/${id}`)
    movieDetails.renderMovieDetails(movie);
}

async function editMovie(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let id = form.getAttribute('data-movie-id');
    let formData = new FormData(form);
    let title = formData.get('title');
    let description = formData.get('description');
    let img = formData.get('imageUrl');
    console.log(id);
    if (title && description && img) {
        let result = await ajax.put(constants.movies + `/${id}`, {
            title,
            description,
            img
        })
        let movie = await ajax.get(constants.movies + `/${id}`)
        movieDetails.renderMovieDetails(movie);
    } else {
        alert('All fields must not be empty!');
    }
}

async function like(e) {
    e.preventDefault()

    let result = await ajax.postWithAuth(constants.likes,
        {
            movieId: e.currentTarget.getAttribute('data-id'),
            ownerEmail: localStorage.getItem('movieUserEmail')
        });

    e.target.setAttribute('style', 'display: none;')
    let span = e.target.nextElementSibling;
    let textSpan = span.textContent;
    console.log(textSpan);
    let likesInfo = textSpan.split(' ').filter(x => x);
    let likesCount = Number(likesInfo[1]);
    span.textContent = `${likesInfo[0]} ${++likesCount}`;
    span.classList.remove('hidden');
}

export default {
    registrationBtn,
    register,
    logout,
    loginBtn,
    login,
    addMovieBtn,
    addMovie,
    movieDetailsListener,
    deleteMovie,
    editMovie,
    like
}