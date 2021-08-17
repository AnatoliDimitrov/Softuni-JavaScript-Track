function solve() {

    let formElement = document.getElementById('add-new');
    formElement.querySelector('button').addEventListener('click', AddMovie)
    let moviesElement = document.getElementById('movies');
    let moviesUlElement = moviesElement.querySelector('ul');
    let archiveSectionElement = document.getElementById('archive');
    let archiveUlElement = archiveSectionElement.querySelector('ul');
    let clearElementBtn = document.querySelector('#archive > button');

    clearElementBtn.addEventListener('click', function () {
        let archive = Array.from(document.querySelectorAll('#archive ul li'));
        archive.forEach(e => e.remove());
    });


    /// FUNCTIONS

    function AddMovie(e) {
        e.preventDefault();
        let InputElements = document.querySelectorAll('#add-new input');
        let name = InputElements[0].value;
        let hall = InputElements[1].value;
        let ticketPrice = Number(InputElements[2].value);
        if (name !== '' && hall !== '' && !isNaN(ticketPrice) && ticketPrice > 0) {
            let li = document.createElement('li');
            let span = document.createElement('span');
            span.textContent = name;
            let strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall}`;
            let div = document.createElement('div');
            let divStrong = document.createElement('strong');
            divStrong.textContent = ticketPrice.toFixed(2);
            let divInput = document.createElement('input');
            divInput.setAttribute('placeholder', 'Tickets Sold');
            let divButton = document.createElement('button');
            divButton.textContent = 'Archive';
            divButton.addEventListener('click', archiveButton);

            div.appendChild(divStrong);
            div.appendChild(divInput);
            div.appendChild(divButton);

            li.appendChild(span);
            li.appendChild(strong);
            li.appendChild(div);

            moviesUlElement.appendChild(li);

            InputElements[0].value = '';
            InputElements[1].value = '';
            InputElements[2].value = '';
        }
    }

    function archiveButton(e) {
        let ticketsCount = e.target.previousSibling.value;
        let tPrice = Number(e.currentTarget.previousSibling.previousSibling.textContent);
        let movieName = e.target.parentElement.previousSibling.previousSibling.textContent;
        if (ticketsCount !== '') {
            if (!isNaN(Number(ticketsCount)) && Number(ticketsCount) >= 0) {
                ticketsCount = Number(ticketsCount);
                let archiveLi = document.createElement('li');
                let archiveSpan = document.createElement('span');
                archiveSpan.textContent = movieName;
                let archiveStrong = document.createElement('strong');
                archiveStrong.textContent = `Total amount: ${(ticketsCount * tPrice).toFixed(2)}`;
                let archiveBtn = document.createElement('button');
                archiveBtn.textContent = 'Delete';
                archiveBtn.addEventListener('click', deleteLiFromArchive);

                archiveLi.appendChild(archiveSpan);
                archiveLi.appendChild(archiveStrong);
                archiveLi.appendChild(archiveBtn);
                archiveUlElement.appendChild(archiveLi);

                /// remove li
                e.target.parentElement.parentElement.remove();
            }
        }
    }

    function deleteLiFromArchive(e) {
        e.target.parentElement.remove();
    }
}