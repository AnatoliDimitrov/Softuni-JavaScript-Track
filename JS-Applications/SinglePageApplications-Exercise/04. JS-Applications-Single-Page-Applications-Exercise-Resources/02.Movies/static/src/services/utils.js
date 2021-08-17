import ajax from "./ajax.js";
import constants from "./constants.js";

function createElement(tag, attributes, ...params) {
    let element = document.createElement(tag);
    let firstValue = params[0];
    if (params.length === 1 && typeof (firstValue) !== 'object') {
        if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }
    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }
    return element;
}

async function likesOfCurrentUser(movieId, ownerEmail) {
    let url = `${constants.likes}?where=movieId%3D%22${movieId}%22%20and%20ownerEmail%3D%22${ownerEmail}%22`
    return await ajax.get(url)
}

async function allMovieLikes(movieId) {
    let url = `${constants.likes}?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`
    return await ajax.get(url)
} 

export default {
    createElement,
    likesOfCurrentUser,
    allMovieLikes
}