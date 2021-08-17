import navigateTo from "../navigation/navigateTo.js";
import auth from "../services/authService.js";
import { html, render } from '/node_modules/lit-html/lit-html.js';

let id = undefined;
let detailsContainer = document.getElementById('details-container');

async function dashBoardBtn() {
    let btn = document.querySelector('#dashboard-button');
    let dashboard = document.querySelector('#dashboard-holder');
    let children = Array.from(dashboard.children);
    let noIdeas = document.querySelector('#no-ideas');
    children.map(e => e.remove());
    let ideas = await sendGetIdeasRequest();
    render(ideas.map(e => createHTMLIdea(e)), dashboard);
    if (ideas.length === 0) {
        dashboard.appendChild(noIdeas);
    }
    btn.addEventListener('click', navigateTo.dashboardContainer);
}

async function sendGetIdeasRequest() {
    try {
        return await auth.get();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

function createHTMLIdea(idea) {
    return html`
    <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
        <div class="card-body">
            <p class="card-text">${idea.title}</p>
        </div>
        <img class="card-image" src="${idea.img}" alt="Card image cap">
        <a id="${idea._id}" @click=${detailsInfo} class="btn" href="#">Details</a>
    </div>`;
}

async function detailsInfo(e) {
    e.preventDefault()
    localStorage.setItem('detailsId', e.currentTarget.id);
    let details = await auth.getWithId(e.currentTarget.id);
    console.log(details);
    render(creatHTMLDetails(details), detailsContainer);
    navigateTo.detailsContainer();
}

function creatHTMLDetails(details) {
    let result = html`<img class="det-img" src="${details.img}" />
    <div class="desc">
        <h2 class="display-5">${details.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${details.description}</p>
    </div>`;
    let token = localStorage.getItem('ideaAccessToken');
    let userId = localStorage.getItem('userId');
    let ownerId = details._ownerId;

    if (token && ownerId === userId) {
        return html`${result}<div class="text-center">
            <a id="${details._id}" @click=${deleteIdea} class="btn detb" href="#">Delete</a>
        </div>`;
    }

    return result;
}

async function deleteIdea(e) {
    let id = e.currentTarget.id;
    try {
        await auth.del(id);
        dashBoardBtn();
        navigateTo.dashboardContainer();
    } catch (err) {
        console.error(err);
        alert(err);
    }


}

export default {
    dashBoardBtn
}