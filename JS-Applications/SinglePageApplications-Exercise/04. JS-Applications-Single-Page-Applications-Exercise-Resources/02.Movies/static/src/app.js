import navigateTo from "./navigation/navigateTo.js";
import addMovieButton from "./pages/addMovieButton.js";
import login from "./pages/login.js";
import registration from "./pages/registration.js";
import listeners from "./services/listeners.js";
const token = localStorage.getItem('movieAccessToken');
registration.registerBtn();
registration.registerForm();
login.loginBtn();
login.loginForm();
addMovieButton.addBtn();
addMovieButton.addMovieForm();
let logoutElement = document.getElementById('logout');
logoutElement.addEventListener('click', await listeners.logout)
let homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', renderHome)

function renderHome() {
    token ? navigateTo.logedHomePage() : navigateTo.notLogedHomePage()
}

renderHome();