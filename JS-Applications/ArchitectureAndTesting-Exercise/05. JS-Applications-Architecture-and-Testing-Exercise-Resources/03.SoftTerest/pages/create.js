import navigateTo from "../navigation/navigateTo.js";
import auth from "../services/authService.js";
import dashboard from "./dashboard.js";

function createBtn() {
    let btn = document.querySelector('#create-button');
    btn.addEventListener('click', navigateTo.createContainer);
}

function createForm() {
    let form = document.querySelector('#create-idea form');
    form.addEventListener('submit', sendCreateRequest);
}

async function sendCreateRequest(e) {
    e.preventDefault();
    try {
        let form = e.target;
        let formData = new FormData(form);

        let title = formData.get('title');
        let description = formData.get('description');
        let img = formData.get('imageURL');
        if (title.length < 6 || description.length < 10 || img.length < 5) {
            throw new Error(`The title should be at least 6 characters long.
            The description should be at least 10 characters long.
            The image should be at least 5 characters long.`);
        }
        let idea = {
            title,
            description,
            img,
            _ownerId: localStorage.getItem('userId')
        };

        await auth.postIdea(idea);
        form.reset();
        dashboard.dashBoardBtn();
        navigateTo.dashboardContainer();
    } catch (err) {
        console.error(err);
        alert(err);
    }
}

export default {
    createBtn,
    createForm
}