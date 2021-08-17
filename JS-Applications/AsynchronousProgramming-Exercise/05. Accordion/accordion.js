function solution() {
    let mainElement = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/articles/list')
        .then(r => r.json())
        .then(d => {
            d.forEach(e => {
                mainElement.appendChild(creatElement(e));
            });
        })
        .catch(e => {
            let div = document.createElement('div');
            div.className = 'accordion';
            div.textContent = 'Error';
            mainElement.appendChild(div);
        })

    function creatElement(e) {
        let accordeon = document.createElement('div');
        accordeon.className = 'accordion';
        let head = document.createElement('div');
        head.className = 'head';
        let extra = document.createElement('div');
        extra.className = 'extra';
        extra.id = `__${e._id}__`;
        let span = document.createElement('span');
        span.textContent = `${e.title}`;
        let button = document.createElement('button');
        button.className = 'button';
        button.id = e._id;
        button.textContent = 'More';
        button.addEventListener('click', moreLess)
        let p = document.createElement('p');

        fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${e._id}`)
            .then(r => r.json())
            .then(d => {
                p.textContent = d.content;
            })
            .catch(e => {
                p.textContent = 'Unable to load content!';
            })

        head.appendChild(span);
        head.appendChild(button);

        extra.appendChild(p);

        accordeon.appendChild(head);
        accordeon.appendChild(extra);

        return accordeon;
    }

    function moreLess(e) {
        let id = e.target.id;
        let extra = document.getElementById(`__${id}__`);

        if (extra.style.display === 'block') {
            extra.style.display = 'none';
            e.target.textContent = 'More';
        } else {
            extra.style.display = 'block';
            e.target.textContent = 'Less';
        }
    }
}

solution();