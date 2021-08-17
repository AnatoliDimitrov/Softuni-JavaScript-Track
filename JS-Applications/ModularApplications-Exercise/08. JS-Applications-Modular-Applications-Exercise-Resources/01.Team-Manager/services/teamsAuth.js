import constants from "./constants.js";
import { jsonRequest } from "./http.js";



async function get() {
    try {
        let result = await jsonRequest(constants.ALL_TEAMS);
        return result;
    } catch (err) {
        alert(err);
    }
}

async function getOneTeam(id) {
    try {
        let result = await jsonRequest(`${constants.ALL_TEAMS}/${id}`);
        return result;
    } catch (err) {
        alert(err);
    }
}

async function putTeam(id, body) {
    try {
        await jsonRequest(`${constants.ALL_TEAMS}/${id}`, 'put', body, true, true);
    } catch (err) {
        alert(err);
    }
}

async function deleteMember(id) {
    try {
        await jsonRequest(`${constants.MEMBERS}/${id}`, 'delete', undefined, true);
    } catch (err) {
        alert(err);
    }
}

async function getAllMembers() {
    try {
        let result = await jsonRequest(constants.ALL_MEMBERS);
        return result;
    } catch (err) {
        alert(err);
    }
}
async function getMyMemberships(userId) {
    try {
        let result = await jsonRequest(`http://localhost:3030/data/members?where=_ownerId%3D%22${userId}%22%20AND%20status%3D%22member%22&load=team%3DteamId%3Ateams`);
        return result;
    } catch (err) {
        alert(err);
    }
}

async function getTeamMemberships(teamId) {
    try {
        let result = await jsonRequest(`http://localhost:3030/data/members?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`);
        return result;
    } catch (err) {
        alert(err);
    }
}

async function postTeam(body) {
    try {
       return await jsonRequest(constants.BASE, 'Post', body, true);
    } catch (err) {
        alert(err);
    }
}

async function postMember(body) {
    try {
       return await jsonRequest(constants.MEMBERS, 'Post', body, true);
    } catch (err) {
        alert(err);
    }
}

async function approveMember(id, body) {
    try {
       return await jsonRequest(`${constants.MEMBERS}/${id}`, 'put', body, true, true);
    } catch (err) {
        alert(err);
    }
}


export default {
    get,
    getAllMembers,
    postTeam,
    postMember,
    approveMember,
    getMyMemberships,
    getOneTeam,
    getTeamMemberships,
    putTeam,
    deleteMember
};