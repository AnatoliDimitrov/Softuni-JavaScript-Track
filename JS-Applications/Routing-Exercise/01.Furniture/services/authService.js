import constants from "./constants.js";
import { jsonRequest } from "./httpService.js";



async function get() {
    try {
        let result = await jsonRequest(constants.BASE);
        return result;
    } catch (err) {
        alert(err);
    }
}

async function getWithId(id) {
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

async function login(loginUser) {
    try {
        let loginResult = await jsonRequest(constants.LOGIN, 'Post', loginUser);
        fillLocaleStorage(loginResult);
    } catch (err) {
        alert(err);
    }
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
    return localStorage.getItem('furniture_token') !== null &&
        localStorage.getItem('furniture_token') !== undefined;
}

function getUserName() {
    return localStorage.getItem('userEmail');
}

function getUserId() {
    return localStorage.getItem('userId');
}

function getAuthToken() {
    return localStorage.getItem('furniture_token');
}

function fillLocaleStorage(loginResult) {
    localStorage.setItem('furniture_token', loginResult.accessToken);
    localStorage.setItem('userId', loginResult._id);
    localStorage.setItem('userEmail', loginResult.email);
}

export default {
    login,
    register,
    logout,
    isLoggedIn,
    getUserName,
    getAuthToken,
    getUserId,
    cleanStorage,
    get,
    getWithId,
    del,
    post,
    postWithoutAuth,
    put,
    filterByUserId,
    fillLocaleStorage
};