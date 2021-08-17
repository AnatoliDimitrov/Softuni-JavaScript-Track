import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import createPage from './src/pages/createPage.js';
import detailsPage from './src/pages/detailsPage.js';
import editPage from './src/pages/editPage.js';
import loginPage from './src/pages/loginPage.js';
import logoutPage from './src/pages/logoutPage.js';
import mainPage from './src/pages/mainPage.js';
import myFurnituresPage from './src/pages/myFurnituresPage.js';
import navigatorPage from './src/pages/navigatorPage.js';
import registerPage from './src/pages/registerPage.js';

let navContainer = document.getElementById('nav-container');
let mainContainer = document.getElementById('main-container');

page('/', '/index.html');
page('/index.html', '/index');
page('/index', expandPageContext, navigatorPage.view, mainPage.view);
page('/create', expandPageContext, navigatorPage.view, createPage.view);
page('/my-furniture', expandPageContext, navigatorPage.view, myFurnituresPage.view);
page('/details/:id', expandPageContext, navigatorPage.view, detailsPage.view);
page('/edit/:id', expandPageContext, navigatorPage.view, editPage.view);
page('/login', expandPageContext, navigatorPage.view, loginPage.view);
page('/register', expandPageContext, navigatorPage.view, registerPage.view);
page('/logout', logoutPage.logout);

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
