import heplperFunctions from "./helperFunctions.js";
import renderPost from "./renderPost.js";

let topicContainer = document.querySelector('.topic-container');

async function renderTopics() {
    try {
        let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts');
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        let result = await response.json();
    
        Array.from(topicContainer.children).forEach(e => e.remove());
    
        for (const key in result) {
            topicContainer.appendChild(createTopicElement(key, result[key]));
        }
    } catch (error) {
        alert(error)
    }
}
let ce = heplperFunctions.createElement;

function createTopicElement(id, post) {
    let span = ce('span', undefined, post.user);
    let p = ce('p', undefined, 'Username: ', span);
    let nickNameDiv = ce('div', { class: 'nick-name' }, p);
    let time = ce('time', undefined, post.time);
    let dateP = ce('p', undefined, 'Date: ', time);
    let infoDiv = ce('div', undefined, dateP, nickNameDiv);
    let columnsDiv = ce('div', {class: 'columns'}, infoDiv)
    let h2 = ce('h2', undefined, post.name);
    let a = ce('a', { href: '#', class: 'normal' }, h2);
    let topicNameDiv = ce('div', { class: 'topic-name' }, a, columnsDiv);
    let wrapper = ce('div', { id: id, class: 'topic-name-wrapper' }, topicNameDiv);
    wrapper.addEventListener('click', renderPost.getPost)

    return wrapper;
}

export default {
    renderTopics
}