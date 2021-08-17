import constants from "./constants.js";
import { jsonRequest } from "./http.js";



async function get() {
    try {
        let result = await jsonRequest(constants.BASE);
        return result;
    } catch (err) {
        alert(err);
    }
}

async function getLikesCount(movieId) {
    try {
        let result = await jsonRequest(`${constants.LIKES}${`?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`}`);
        return result;
    } catch (err) {
        alert(err);
    }
}
async function getSpecificLike(movieId, userId) {
    try {
        let result = await jsonRequest(`${constants.LIKES}${`?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`}`);
        return result;
    } catch (err) {
        alert(err);
    }
}

async function getOne(id) {
    try {
        let result = await jsonRequest(`${constants.BASE}/${id}`, 'get');
        return result;
    } catch (err) {
        alert(err);
    }
}

async function filterByUserId(id) {
    try {
        let result = await jsonRequest(`${constants.BASE}?where=_ownerId%3D%22${id}%22`, 'get');
        return result;
    } catch (err) {
        alert(err);
    }
}

async function postWithoutAuth(body) {
    try {
        await jsonRequest(constants.BASE, 'Post', body);
    } catch (err) {
        alert(err);
    }
}

async function post(body) {
    try {
        await jsonRequest(constants.BASE, 'Post', body, true, true);
    } catch (err) {
        alert(err);
    }
}

async function put(id, body) {
    try {
        await jsonRequest(`${constants.BASE}/${id}`, 'put', body, true, true);
    } catch (err) {
        alert(err);
    }
}

async function del(id) {
    try {
        await jsonRequest(`${constants.BASE}/${id}`, 'delete', undefined, true);
    } catch (err) {
        alert(err);
    }
}

async function like(body) {
    try {
        await jsonRequest(`${constants.LIKES}`, 'post', body, true);
    } catch (err) {
        alert(err);
    }
}

async function login(loginUser) {
       return await jsonRequest(constants.LOGIN, 'Post', loginUser);
}

async function logout() {
    try {
        await jsonRequest(constants.LOGOUT, 'Get', undefined, true, true);
    } catch (err) {
        alert(err);
    }
}

async function register(newUser) {
    return await jsonRequest(constants.REGISTER, 'Post', newUser);
}

function cleanStorage() {
    localStorage.clear();
}

function isLoggedIn() {
    return localStorage.getItem('userToken') !== null &&
        localStorage.getItem('userToken') !== undefined;
}

function getUserEmail() {
    return localStorage.getItem('userEmail');
}

function getUserName() {
    return localStorage.getItem('username');
}

function getUserId() {
    return localStorage.getItem('userId');
}

function getAuthToken() {
    return localStorage.getItem('userToken');
}

function fillLocaleStorage(loginResult) {
    localStorage.setItem('userToken', loginResult.accessToken);
    localStorage.setItem('userId', loginResult._id);
    localStorage.setItem('userEmail', loginResult.email);
    localStorage.setItem('username', loginResult.username);
}

export default {
    get,
    getOne,
    getLikesCount,
    getSpecificLike,

    login,
    register,
    logout,
    

    del,

    post,
    postWithoutAuth,

    put,

    filterByUserId,
    fillLocaleStorage,
    like,
    
    getUserName,
    getAuthToken,
    getUserId,
    getUserEmail,
    isLoggedIn,
    cleanStorage,
};