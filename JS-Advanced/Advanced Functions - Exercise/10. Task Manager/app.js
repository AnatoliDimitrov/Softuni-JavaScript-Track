function solve() {
    let addBtnElement = document.getElementById('add');
    let openSectionDivElement = document.querySelector('.wrapper section:nth-child(2) div:nth-child(2)');
    let inProgrssSectionDivElement = document.querySelector('#in-progress');
    let completeSectionDivElement = document.querySelector('.wrapper section:nth-child(4) div:nth-child(2)');

    addBtnElement.addEventListener('click', function (e) {
        e.preventDefault();
        let formAddElement = e.currentTarget.parentElement;
        let taskElement = document.getElementById('task');
        let descriptElement = document.getElementById('description');
        let dateElement = document.getElementById('date');

        //clear fields if needed

        if (taskElement.value !== '' &&
        descriptElement.value !== '' &&
        dateElement.value !== '') {
            let article = document.createElement('article');
            let h3 = document.createElement('h3');
            h3.textContent = taskElement.value;
            let p1 = document.createElement('p');
            p1.textContent = `Description: ${descriptElement.value}`;
            let p2 = document.createElement('p');
            p2.textContent = `Due Date: ${dateElement.value}`;
            let div = document.createElement('div');
            div.className = 'flex';
            let greenBtn = document.createElement('button');
            let redBtn = document.createElement('button');
            greenBtn.className = 'green';
            greenBtn.textContent = 'Start';
            greenBtn.addEventListener('click', moveInProgress);
            redBtn.className = 'red';
            redBtn.textContent = 'Delete';
            redBtn.addEventListener('click', function (e) {
                let articletoDelete = e.currentTarget.parentElement.parentElement;
                articletoDelete.remove();
            });

            div.appendChild(greenBtn);
            div.appendChild(redBtn);

            article.appendChild(h3);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(div);

            openSectionDivElement.appendChild(article);

            taskElement.value = '';
            descriptElement.value = '';
            dateElement.value = '';
        }
    })

    function moveInProgress(e) {
        let artElement = e.currentTarget.parentElement.parentElement;
        let clonedArticle = artElement.cloneNode(true);
        artElement.remove();
        let buttonElemetsfromCA = Array.from(clonedArticle.querySelectorAll('button'));
        buttonElemetsfromCA[0].className = 'red';
        buttonElemetsfromCA[0].textContent = 'Delete';
        buttonElemetsfromCA[0].addEventListener('click', function (e) {
            let articletoDeleteFromInProgress = e.currentTarget.parentElement.parentElement;
                articletoDeleteFromInProgress.remove();
        });
        buttonElemetsfromCA[1].className = 'orange';
        buttonElemetsfromCA[1].textContent = 'Finish';
        buttonElemetsfromCA[1].addEventListener('click', moveInDone);
        
        inProgrssSectionDivElement.appendChild(clonedArticle);
    }

    function moveInDone(e) {
        let doneElement = e.currentTarget.parentElement.parentElement;
        let cloned = doneElement.cloneNode(true);
        doneElement.remove();
        let divFromClone = cloned.querySelector('.flex');
        divFromClone.remove();
        
        completeSectionDivElement.appendChild(cloned);
    }
}

