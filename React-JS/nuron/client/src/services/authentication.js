import constants from "./constants.js";
import { jsonRequest } from "./http.js";



function getNfts(parameter) {
    try {
        let result = jsonRequest(`${constants.NFTS}`);
        return result;
    } catch (err) {
        return err;
    }
}

async function getMostRecent() {
    try {
        let result = await jsonRequest(constants.MOST_RECENT, `get`);
        return result;
    } catch (err) {
        return err;
    }
}

async function getMy(userId) {
    try {
        let result = await jsonRequest(`${constants.NFTS}${`?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`}`);
        return result;
    } catch (err) {
        return err;
    }
}


async function getOne(id) {
    try {
        let result = await jsonRequest(`${constants.NFTS}/${id}`, 'get');
        return result;
    } catch (err) {
        return err;
    }
}

async function getOneUser(id) {
    try {
        let result = await jsonRequest(`${constants.USERS}/${id}`, 'get');
        return result;
    } catch (err) {
        return err;
    }
}


async function getLikesCount(bookId) {
    try {
        let result = await jsonRequest(`${constants.LIKES}${`?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`}`);
        return result;
    } catch (err) {
        return err;
    }
}
async function getSpecificLike(bookId, userId) {
    try {
        let result = await jsonRequest(`${constants.LIKES}${`?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`}`);
        return result;
    } catch (err) {
        return err;
    }
}

async function like(nftId, body) {
    try {
        await jsonRequest(`${constants.NFTS}/like/${nftId}`, 'put', body, true);
    } catch (err) {
        return err;
    }
}

async function dislike(nftId, body) {
    try {
        await jsonRequest(`${constants.NFTS}/like/${nftId}`, 'put', body, true);
    } catch (err) {
        return err;
    }
}

async function filterByUserId(id) {
    try {
        let result = await jsonRequest(`${constants.NFTS}?where=_ownerId%3D%22${id}%22`, 'get');
        return result;
    } catch (err) {
        return err;
    }
}

async function filterByYear(year) {
    try {
        let result = await jsonRequest(`${constants.NFTS}?where=year%3D${year}`, 'get', undefined, true);
        return result;
    } catch (err) {
        return err;
    }
}

async function postWithoutAuth(body) {
    try {
        await jsonRequest(constants.NFTS, 'Post', body);
    } catch (err) {
        return err;
    }
}

async function post(body) {
    try {
        return await jsonRequest(constants.NFTS, 'Post', body, true, false);
    } catch (err) {
        return err;
    }
}

async function put(id, body) {
    try {
        await jsonRequest(`${constants.NFTS}/${id}`, 'put', body, true, true);
    } catch (err) {
        return err;
    }
}

async function del(id) {
    try {
        await jsonRequest(`${constants.NFTS}/${id}`, 'delete', undefined, true);
    } catch (err) {
        return err;
    }
}

async function deleteUser(id) {
    try {
        await jsonRequest(`${constants.USERS}/${id}`, 'delete', undefined, true);
    } catch (err) {
        return err;
    }
}

async function login(loginUser) {
       return await jsonRequest(constants.LOGIN, 'Post', loginUser);
}

async function logout() {
    try {
        await jsonRequest(constants.LOGOUT, undefined, undefined, true, true);
    } catch (err) {
        return err;
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

function getUserGender() {
    return localStorage.getItem('gender');
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
    // getters
    getNfts,
    getOne,
    getOneUser,
    getMostRecent,
    getMy,
    getLikesCount,
    getSpecificLike,
    like,
    dislike,

    // authentication
    login,
    register,
    logout,
    
    // delete
    del,
    deleteUser,

    //post
    post,
    postWithoutAuth,

    //put
    put,

    //filters
    filterByUserId,
    fillLocaleStorage,
    filterByYear,
    
    // helpers that do NOT use the server
    getUserName,
    getAuthToken,
    getUserId,
    getUserEmail,
    getUserGender,
    isLoggedIn,
    cleanStorage,
};