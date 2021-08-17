import navigateTo from "../navigation/navigateTo.js";
import constants from "./constants.js";
import { jsonRequest } from "./httpService.js";

async function login(loginUser) {
    try {
        let loginResult = await jsonRequest(constants.login, 'Post', loginUser);
        localStorage.setItem('ideaAccessToken', loginResult.accessToken);
        localStorage.setItem('userId', loginResult._id);
        localStorage.setItem('userEmail', loginResult.email);
        navigateTo.logedHomePage();
    } catch (err){
        alert(err);
    }
}

async function postIdea(body) {
    try {
        let loginResult = await jsonRequest(constants.ideas, 'Post', body, true, true);
        navigateTo.logedHomePage();
    } catch (err){
        alert(err);
    }
}

async function get() {
    try {
        let result = await jsonRequest(constants.allIdeas, 'get');
        return result;
    } catch (err){
        alert(err);
    }
}
async function getWithId(id) {
    try {
        let result = await jsonRequest(`${constants.ideas}/${id}`, 'get');
        return result;
    } catch (err){
        alert(err);
    }
}

async function logout() {
    try {
        let logoutResult = await jsonRequest(constants.logout, 'Get', undefined, true, true);
        localStorage.removeItem('ideaAccessToken');
        localStorage.removeItem('userId');
        localStorage.removeItem('userEmail');
        navigateTo.notLogedHomePage();
    } catch(err){
        alert(err);
    }
}

async function del(id) {
    try {
        await jsonRequest(`${constants.ideas}/${id}`, 'delete', undefined, true, true);
    } catch(err){
        alert(err);
    }
}

async function register(newUser) {
    try {
        let registerResult = await jsonRequest(constants.register, 'Post', newUser);
        localStorage.setItem('ideaAccessToken', registerResult.accessToken);
        localStorage.setItem('userId', registerResult._id);
        localStorage.setItem('userEmail', registerResult.email);
        navigateTo.logedHomePage();
    } catch (err){
        alert(err);
    }
}

function cleanStorage(){
    localStorage.clear();
}

function isLoggedIn() {
    return localStorage.getItem('ideaAccessToken') !== null &&
        localStorage.getItem('ideaAccessToken') !== undefined;
}

function getUserName() {
    return localStorage.getItem('userEmail');
}

function getUserId(){
    return localStorage.getItem('userId');
}

function getAuthToken() {
    return localStorage.getItem('ideaAccessToken');
}



let auth = {
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
    postIdea
};
export default auth;