import authentication from "../../services/authentication.js";
import teamsAuth from "../../services/teamsAuth.js";
import myTeamsTemplate from "./myTeamsTemplate.js";

async function view(context) {
    let id = authentication.getUserId();
    let members = await teamsAuth.getAllMembers();
    let myMembers = await teamsAuth.getMyMemberships(id);

    let teams = [];
    for (const member of myMembers) {
        let teamId = member.team._id;
        teams.push(await teamsAuth.getOneTeam(teamId));
    }
    for (const team of teams) {
        let id = team._id;
        let membersCount = members.filter(m => m.teamId === id).length;
        team.membersCount = membersCount;
    }
    let html = myTeamsTemplate.template(teams);
    context.main(html);
}

export default {
    view
}