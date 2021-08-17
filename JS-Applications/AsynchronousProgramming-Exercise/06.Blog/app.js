function attachEvents() {
    let selectElement = document.getElementById('posts');
    let loadPostsElement = document.getElementById('btnLoadPosts');
    let viewPostElement = document.getElementById('btnViewPost');
    let titleElement = document.getElementById('post-title');
    let bodyElement = document.getElementById('post-body');
    let commentsElement = document.getElementById('post-comments');

    loadPostsElement.addEventListener('click', loadPosts);
    viewPostElement.addEventListener('click', loadPost);

    function loadPosts() {
        fetch('http://localhost:3030/jsonstore/blog/posts')
            .then(r => r.json())
            .then(d => {
                for (const key in d) {
                    selectElement.appendChild(createOption(d[key]));
                }
            })
            .catch(e => {
                let option = document.createElement('option')
                option.textContent = 'Please try again later!';
                selectElement.appendChild(option);
                loadPostsElement.desabled = true;
                viewPostElement.desabled = true;
            });
    }

    function createOption(e) {
        let option = document.createElement('option')
        option.value = e.id;
        option.textContent = e.title;

        return option;
    }

    function loadPost() {
        let id = selectElement.value;
        Array.from(commentsElement.children).forEach(e => e.remove());

        fetch(`http://localhost:3030/jsonstore/blog/posts/${id}`)
            .then(r => r.json())
            .then(d => {
                titleElement.textContent = d.title;
                bodyElement.textContent = d.body;

                fetch(`http://localhost:3030/jsonstore/blog/comments`)
                    .then(r => r.json())
                    .then(d => {
                        for (const key in d) {
                            if (d[key].postId === id) {
                                let li = document.createElement('li');
                                li.textContent = d[key].text;
                                commentsElement.appendChild(li)
                            }
                        }
                    })
                    .catch(e => {
                        let li = document.createElement('li');
                        li.textContent = 'Error';
                        commentsElement.appendChild(li)
                    })
            })
            .catch(e => {
                let li = document.createElement('li');
                li.textContent = 'Error';
                commentsElement.appendChild(li)
            })
    }
}

attachEvents();