function loadCommits() {
    let username = document.querySelector('body input').value;
    let repo = document.querySelectorAll('body input')[1].value;
    let commitsElement = document.getElementById('commits');

    let url = `https://api.github.com/repos/${username}/${repo}/commits`;

    fetch(url)
        .then(r => {
            if (r.ok) {
                return r.json();
            } else {
                throw new Error(r.status);
            }
        })
        .then(d => {
            d.forEach(e => {
                let li = document.createElement('li');
                li.textContent = `${e.commit.author.name}: ${e.commit.message}`;
                commitsElement.appendChild(li);
            });
        })
        .catch(e => {
            let li = document.createElement('li');
                li.textContent = `${e} (Not Found)`;
                commitsElement.appendChild(li);
        });
}