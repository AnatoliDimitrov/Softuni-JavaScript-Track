
fetch('http://localhost:3030/jsonstore/cookbook/recipes')
    .then(r => r.json())
    .then(d => {
        let mainElement = document.querySelector('main');
        mainElement.children[0].remove();
        for (const recipe in d) {
            //console.log(d[recipe]);
            let article = document.createElement('article');
            article.className = 'preview';
            article.setAttribute('id', d[recipe]._id);
            article.addEventListener('click', showPreparation);
            let divTitle = document.createElement('div');
            divTitle.className = 'title';
            let h2 = document.createElement('h2');
            h2.textContent = `${d[recipe].name}`;
            divTitle.appendChild(h2);
            let divImg = document.createElement('div');
            divImg.className = 'small';
            let img = document.createElement('img');
            img.src = d[recipe].img;
            divImg.appendChild(img);

            article.appendChild(divTitle);
            article.appendChild(divImg);

            mainElement.appendChild(article);
        }
    })
    .catch(e => console.log(e));

function showPreparation(e) {
    let article = e.currentTarget;
    let h2 = article.querySelector('h2');
    let img = article.querySelector('img');
    let id = article.getAttribute('id')
    article.querySelectorAll('div').forEach(e => {
        e.remove();
    });
    let divBand = document.createElement('div');
    divBand.className = 'band';
    let divThumb = document.createElement('div');
    divThumb.className = 'thumb';
    let divIngredients = document.createElement('div');
    divIngredients.className = 'ingredients';
    let h3 = document.createElement('h3');
    let ul = document.createElement('ul');
    h3.textContent = 'Ingredients:';
    divIngredients.appendChild(h3);
    divIngredients.appendChild(ul);
    divThumb.appendChild(img);
    divBand.appendChild(divThumb);
    divBand.appendChild(divIngredients);
    let divDesc = document.createElement('div');
    divDesc.className = 'description';
    let h3Prep = document.createElement('h3');
    h3Prep.textContent = 'Preparation:';

    article.appendChild(h2);
    article.appendChild(divBand);
    article.appendChild(divDesc);

    fetch(`http://localhost:3030/jsonstore/cookbook/details/${id}`)
        .then(r => r.json())
        .then(d => { {
                for (const step of d['steps']) {
                    let p = document.createElement('p');
                    p.textContent = step;
                    divDesc.appendChild(p);
                }
                for (const ingredient of d['ingredients']) {
                    let li = document.createElement('li');
                    li.textContent = ingredient;
                    ul.appendChild(li);
                }
            }
        })
        .catch(e => console.log(e));
}
