

let navElements = Array.from(document.querySelectorAll('.navigation'));
let container = document.querySelector('body');
let navUl = document.querySelector('#navbarResponsive ul');

let homePage = navElements[0];
let register = navElements[1];
let login = navElements[2];
let dashboard = navElements[3];
let details = navElements[4];
let create = navElements[5];
let footer = navElements[6];


function logedHomePage() {
    Array.from(navUl.children).map(li => { li.classList.contains('user') ? li.classList.remove('hidden') : li.classList.add('hidden') });
    hideElements();
    container.appendChild(homePage);
    container.appendChild(footer);
}

function notLogedHomePage() {
    Array.from(navUl.children).map(li => { li.classList.contains('guest') ? li.classList.remove('hidden') : li.classList.add('hidden') });
    hideElements();
    container.appendChild(homePage);
    container.appendChild(footer);
}

function registration() {
    hideElements();
    container.appendChild(register);
}

function loginForm() {
    hideElements();
    container.appendChild(login);
}

function dashboardContainer() {
    hideElements();
    container.appendChild(dashboard);
}

function detailsContainer() {
    hideElements();
    container.appendChild(details);
}

function createContainer() {
    hideElements();
    container.appendChild(create);
}

function hideElements() {
    navElements.map(e => e.remove());
}

export default {
    logedHomePage,
    notLogedHomePage,
    registration,
    loginForm,
    dashboardContainer,
    detailsContainer,
    createContainer
}