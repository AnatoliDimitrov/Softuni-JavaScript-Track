import { render } from './node_modules/lit-html/lit-html.js';
import page from './node_modules/page/page.mjs';
import createTeamPage from './src/createTeam/createTeamPage.js';
import editPage from './src/editTeam/editPage.js';
import loginPage from './src/login/loginPage.js';
import logoutPage from './src/logout/logoutPage.js';
import mainPage from './src/main/mainPage.js';
import myTeamsPage from './src/myTeams/myTeamsPage.js';
import navigatorPage from './src/navigator/navigatorPage.js';
import registerPage from './src/register/registerPage.js';
import teamBrowserPage from './src/teamBrowser/teamBrowserPage.js';
import teamDetailsPage from './src/teamDetails/teamDetailsPage.js';

let navContainer = document.getElementById('titlebar');
let mainContainer = document.getElementById('main-container');
let modalContainer = document.getElementById('modal-container');

page('/', '/index.html');
page('/index.html', '/index');

page(expandPageContext);
page(navigatorPage.view);

page('/index', mainPage.view);
page('/create-team', createTeamPage.view);
page('/browse-teams', teamBrowserPage.view);
page('/my-teams', myTeamsPage.view);
page('/team-details/:id', teamDetailsPage.view);
page('/edit-team/:id', editPage.view);
page('/login', loginPage.view);
page('/register', registerPage.view);
page('/logout', logoutPage.logout);

page.start();

function expandPageContext(context, next) {
    function navigator(nav) {
        render(nav, navContainer);
    }

    function main(main) {
        render(main, mainContainer);
    }

    function modal(modal) {
        render(modal, modalContainer);
    }

    function removeModal() {
        render('', modalContainer);
    }

    context.navigator = navigator;
    context.main = main;
    context.modal = modal;
    context.removeModal = removeModal;

    next();
}
