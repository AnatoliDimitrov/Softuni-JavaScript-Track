import authentication from "../../services/authentication.js";
import teamsAuth from "../../services/teamsAuth.js";
import modalTemplate from "../modal/modalTemplate.js";
import teamDetailsTemplate from "./teamDetailsTemplate.js";

let router = undefined;

async function joinToTeam(teamId) {
    let _ownerId = authentication.getUserId();
    await teamsAuth.postMember({ teamId, _ownerId });
    router.page.redirect(`/team-details/${teamId}`);
}

async function cancelRequestToTeam(teamId, id) {
    let confirmObj = {
        confirm,
        id,
        teamId
    }
    let html = modalTemplate.template(confirmObj);
    router.modal(html);
}

async function approveRequestToTeam(teamId, member) {
    member.status = 'member';
    await teamsAuth.approveMember(member._id, member);

    router.page.redirect(`/team-details/${teamId}`);
}

async function confirm(confirmed, teamId, id) {
   if (confirmed) {
    await teamsAuth.deleteMember(id);
    }
    router.removeModal();
    router.page.redirect(`/team-details/${teamId}`);
}

async function view(context) {
    let html = undefined;

    let team = await teamsAuth.getOneTeam(context.params.id);
    let username = authentication.getUserName();
    let myId = authentication.getUserId();
    let isOwner = team._ownerId === myId;
    let allTeamMembers = await teamsAuth.getTeamMemberships(context.params.id);
    let teamMember = allTeamMembers.find(m => m._ownerId === myId);

    let info = {
        team,
        isOwner,
        username,
        teamMember,
        allTeamMembers,
        joinToTeam,
        cancelRequestToTeam,
        approveRequestToTeam
    }

    if (authentication.isLoggedIn()) {
        html = teamDetailsTemplate.template(info);
    } else {
        html = teamDetailsTemplate.notLoggedInTemplate(info);
    }
    router = context;
    context.main(html);
}

export default {
    view
}