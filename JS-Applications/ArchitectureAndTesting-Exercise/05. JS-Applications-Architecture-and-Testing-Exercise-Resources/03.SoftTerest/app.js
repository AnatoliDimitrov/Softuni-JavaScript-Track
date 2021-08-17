import navigateTo from "./navigation/navigateTo.js";
import create from "./pages/create.js";
import dashboard from "./pages/dashboard.js";
import login from "./pages/login.js";
import logout from "./pages/logout.js";
import registration from "./pages/registration.js";

let homeBtn = document.getElementById('home-button');
homeBtn.addEventListener('click', renderHome);

const token = localStorage.getItem('ideaAccessToken');
registration.registerBtn();
registration.registerForm();
login.loginBtn();
login.loginForm();
logout.logoutBtn();
dashboard.dashBoardBtn();
create.createBtn();
create.createForm();

function renderHome() {
    token ? navigateTo.logedHomePage() : navigateTo.notLogedHomePage()
}

renderHome();