function getArticleGenerator(articles) {
    counter = 0;
    let containerElement = document.querySelector('#content');
    return () => {
        if (counter < articles.length) {
            let articleElement = document.createElement('article');
            articleElement.textContent = articles[counter++];
            containerElement.appendChild(articleElement);
        }
    }
}
