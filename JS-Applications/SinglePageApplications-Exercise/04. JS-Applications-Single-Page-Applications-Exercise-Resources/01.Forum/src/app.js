import fetchPosts from "./fetchPosts.js";

let home = document.querySelector('header a');
home.addEventListener('click', () => window.location.assign('index.html'));

async function render() {
    let newTopicBorder = document.querySelector('.new-topic-border');
    let topicTitle = document.querySelector('.topic-title');

    let form = newTopicBorder.querySelector('form');

    form.addEventListener('click', craeteTopic);

    fetchPosts.renderTopics();

    async function craeteTopic(e) {
        e.preventDefault();
        try {
            if (e.target.className === 'cancel') {
                form.reset();

            } else if (e.target.className === 'public') {
                let [topicName, username] = form.querySelectorAll('input');
                let postText = form.querySelector('textarea');

                if (topicName.value && username.value && postText.value) {
                    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
                        headers: { 'Content-Type': 'application/json' },
                        method: 'post',
                        body: JSON.stringify({
                            name: topicName.value,
                            user: username.value,
                            content: postText.value,
                            time: new Date()
                        })
                    })
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    form.reset();
                    fetchPosts.renderTopics();
                }
            }
        } catch (error) {
            alert(error);
        }
    }
}

render();