import authentication from "../../services/authentication.js";
import teamsAuth from "../../services/teamsAuth.js";
import createTeamTepmplate from "./createTeamTepmplate.js";



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
                let result = await teamsAuth.postTeam({ name, logoUrl, description, _ownerId })
                let member = await teamsAuth.postMember({ teamId: result._id, _ownerId });
                await teamsAuth.approveMember(member._id, {_id: member._id, _ownerId, teamId: result._id, status: "member" })

                context.page.redirect(`/team-details/${result._id}`);
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

    infoObj = {
        submitForm,
    }
    let html = createTeamTepmplate.template(infoObj);
    context.main(html);
}

export default {
    view
}