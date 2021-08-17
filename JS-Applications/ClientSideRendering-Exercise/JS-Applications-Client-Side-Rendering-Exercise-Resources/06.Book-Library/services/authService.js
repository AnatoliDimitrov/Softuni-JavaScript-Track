import constants from "./constants.js";
import { jsonRequest } from "./httpService.js";



async function get() {
    try {
        let result = await jsonRequest(constants.books);
        return result;
    } catch (err){
        alert(err);
    }
}

async function getWithId(id) {
    try {
        let result = await jsonRequest(`${constants.books}/${id}`, 'get');
        return result;
    } catch (err){
        alert(err);
    }
}

async function postWithoutAuth(body) {
    try {
        let loginResult = await jsonRequest(constants.books, 'Post', body);
    } catch (err){
        alert(err);
    }
}

async function postOne(body) {
    try {
        let loginResult = await jsonRequest(constants.books, 'Post', body, true, true);
        navigateTo.logedHomePage();
    } catch (err){
        alert(err);
    }
}

async function put(id, body) {
    try {
        await jsonRequest(`${constants.books}/${id}`, 'put', body);
    } catch(err){
        alert(err);
    }
}

async function delWithAuth(id) {
    try {
        await jsonRequest(`${constants.books}/${id}`, 'delete', undefined, true, true);
    } catch(err){
        alert(err);
    }
}

async function del(id) {
    try {
        await jsonRequest(`${constants.books}/${id}`, 'delete', undefined);
    } catch(err){
        alert(err);
    }
}

async function login(loginUser) {
    try {
        let loginResult = await jsonRequest(constants.login, 'Post', loginUser);
        localStorage.setItem('ideaAccessToken', loginResult.accessToken);
        localStorage.setItem('userId', loginResult._id);
        localStorage.setItem('userEmail', loginResult.email);
        //navigateTo.logedHomePage();
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
        //navigateTo.notLogedHomePage();
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
       // navigateTo.logedHomePage();
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
    delWithAuth,
    postOne,
    postWithoutAuth,
    put
};
export default auth;