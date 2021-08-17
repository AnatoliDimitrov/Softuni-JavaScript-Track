import authentication from "../../services/authentication.js";
import teamsAuth from "../../services/teamsAuth.js";
import editTemplate from "./editTemplate.js";


let fileds = {};
let correct = {};

async function view(context) {
    let infoObj = undefined;
    async function submitForm(context, e) {
        e.preventDefault();
        let erDiv = e.target.querySelector('.error');
        let formData = new FormData(e.currentTarget);
        let name = formData.get('name');
        let logoUrl = formData.get('logoUrl');
        let description = formData.get('description');
        let _ownerId = authentication.getUserId();

        if (name.length >= 3 && logoUrl && description.length >= 10) {
            try {
                let result = await teamsAuth.putTeam(context.params.id, { name, logoUrl, description, _ownerId });
                context.page.redirect(`/team-details/${context.params.id}`);
            } catch (error) {
                erDiv.classList.remove('hidden');
                erDiv.textContent = error;
            }
        } else {
            erDiv.classList.remove('hidden');
                erDiv.textContent = `name (Team name): required, at least 4 characters,
                logoUrl: required,
                description: required, at least 10 characters
                `;
        }
    }

    submitForm = submitForm.bind(null, context);

    let team = await teamsAuth.getOneTeam(context.params.id);

    infoObj = {
        submitForm,
        team
    }
    let html = editTemplate.template(infoObj);
    context.main(html);
}

export default {
    view
}