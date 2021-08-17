import heplperFunctions from "./helperFunctions.js";
let ce = heplperFunctions.createElement;

let themeContent = ce('div', { class: 'theme-content' });

async function getPost(e) {
    let postId = e.currentTarget.id;
    let container = document.querySelector('.container');
    container.id = postId;
    Array.from(container.children).forEach(e => e.remove());

    try {
        let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${postId}`);

        if (!response.ok) {
            throw new Error('Error');
        }
        let commentDiv = document.querySelector('.comment');
        if (commentDiv) {
            commentDiv.remove()
        }
        themeContent.appendChild(createThemePostElement(await response.json()));
        let comments = await putCommentsToHTML(postId);
        if (comments !== '') {
            themeContent.appendChild(comments);
        }
        themeContent.appendChild(await createAnswerForm(postId));
        container.appendChild(themeContent);
    } catch (error) {
        alert(error);
    }

}

function createThemePostElement(post) {
    let pContent = ce('p', { class: 'post-content' }, post.content);
    let time = ce('time', undefined, post.time);
    let span = ce('span', undefined, ' posted on ', time);
    let pName = ce('p', undefined, post.user, span);
    let img = ce('img', { src: './static/profile.png', alt: 'avatar' })
    let headerDiv = ce('div', { class: 'header' }, img, pName, pContent);
    let h2 = ce('h2', undefined, post.name);
    let a = ce('a', { href: '#', class: 'normal' }, h2);
    let divTopicName = ce('div', { class: 'topic-name' }, a, headerDiv);
    let topicNameWrapper = ce('div', { class: 'topic-name-wrapper' }, divTopicName);
    let topicContainer = ce('div', { class: 'topic-container' }, topicNameWrapper);
    return topicContainer;
}

function createCommentElement(comment) {
    let p = ce('p', undefined, comment.text);
    let contentDiv = ce('div', { class: 'post-content' }, p);
    let strong = ce('strong', undefined, comment.username);
    let parsedTime = new Date(comment.time);
    let time = ce('time', undefined, parsedTime.toLocaleString('en-US', { hour12: true }));
    let infoP = ce('p', undefined, strong, ' commented on ', time);
    let topicNameDiv = ce('div', { class: 'topic-name' }, infoP, contentDiv);
    let topicNameWrapperDiv = ce('div', { class: 'topic-name-wrapper' }, topicNameDiv);
    let wrapper = ce('div', { class: 'user-comment' }, topicNameWrapperDiv);
    return wrapper;
}

async function createAnswerForm(id) {
    let span = ce('span', { class: 'red' }, '*');
    let button = ce('button', undefined, 'Post');
    let label = ce('label', { for: 'username' }, 'Username', span);
    let input = ce('input', { type: 'text', name: 'username', id: 'username' });
    let inputDivContainer = ce('div', undefined, label, input);
    let textarea = ce('textarea', { name: 'postText', id: 'comment', cols: "30", rows: "10" });
    let form = ce('form', { 'data-id': id }, textarea, inputDivContainer, button);
    form.addEventListener('submit', await addComent);
    let divFormContainer = ce('div', { class: 'answer' }, form);
    let spanUsername = ce('span', undefined, 'currentUser');
    let p = ce('p', undefined, spanUsername, ' Comment:');
    let acDiv = ce('div', { class: 'answer-comment' }, p, divFormContainer);

    return acDiv;
}

async function putCommentsToHTML(postId) {
    try {
        let commentsResponse = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`);
        let commentsResult = await commentsResponse.json();
        let commentDiv = ce('div', { class: 'comment' });
        let haveComments = false;
        for (const key in commentsResult) {
            if (commentsResult[key].postId == postId) {
                commentDiv.appendChild(createCommentElement(commentsResult[key]))
                haveComments = true;
            }
        }
        if (haveComments) {
            return commentDiv;
        } else {
            return '';
        }
    } catch (error) {
        alert(error);
    }
    return commentDiv;
}

async function addComent(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let formData = new FormData(form);
    let text = formData.get('postText');
    let username = formData.get('username');
    let postId = form.getAttribute('data-id');
    try {
        let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify({
                text, username, postId, time: new Date()
            })
        })
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        let newComment = createCommentElement(await response.json());
        let commentDiv = document.querySelector('.comment')
        if (commentDiv) {
            commentDiv.appendChild(newComment);
        } else {
            let answer = themeContent.querySelector('.answer-comment');
            answer.remove();
            themeContent.appendChild(await putCommentsToHTML(postId));
            themeContent.appendChild(answer);
        }
        form.reset();
    } catch (error) {
        alert(error);
    }
}
export default {
    getPost
}