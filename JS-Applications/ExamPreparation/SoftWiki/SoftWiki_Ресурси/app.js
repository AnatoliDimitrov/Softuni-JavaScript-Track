import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import createPage from './pages/create/createPage.js';
import detailsPage from './pages/details/detailsPage.js';
import editPage from './pages/edit/editPage.js';
import loginPage from './pages/login/loginPage.js';
import logoutPage from './pages/logout/logoutPage.js';
import mainPage from './pages/main/mainPage.js';
// import allPage from './pages/all/allPage.js';
// import myPage from './pages/my/myPage.js';
import navigatorPage from './pages/navigator/navigatorPage.js';
import registerPage from './pages/register/registerPage.js';

let navContainer = document.getElementById('nav-container');
let mainContainer = document.getElementById('main-container');

page('/', '/index.html');
page('/index.html', '/index');

page(expandPageContext);
page(navigatorPage.view);

page('/index', mainPage.view);
page('/login', loginPage.view);
page('/register', registerPage.view);
page('/logout', logoutPage.logout);
// page('/all', allPage.view);
// page('/my', myPage.view);
page('/create', createPage.view);
page('/details/:id', detailsPage.view);
page('/edit/:id', editPage.view);

page.start();

function expandPageContext(context, next) {
    function navigator(nav) {
        render(nav, navContainer);
    }

    function main(main) {
        render(main, mainContainer);
    }

    context.navigator = navigator;
    context.main = main;

    next();
}
