import authentication from "../../services/authentication.js";
import teamsAuth from "../../services/teamsAuth.js";
import teamBrowserTemplate from "./teamBrowserTemplate.js";

async function view(context) {
    let teams = await teamsAuth.get();
    let members = await teamsAuth.getAllMembers();
    let isLogedIn = authentication.isLoggedIn();
    for (const team of teams) {
        let id = team._id;
        let membersCount = members.filter(m => m.teamId === id).length;
        team.membersCount = membersCount;
    }
    let html = teamBrowserTemplate.template(teams, isLogedIn);
    context.main(html);
}

export default {
    view
}