function hideAllSections() {
    let allSections = document.querySelectorAll('section');
    Array.from(allSections).forEach(e => e.classList.add('hidden'));
}

function hideElement(content) {
    let element = document.getElementById(content);
    element.classList.add('hidden');
}

function showYear(content) {
    let element = document.getElementById(content);
    element.addEventListener('click', (e) => {
        let tag = e.target.tagName;
        let id = e.currentTarget.id;
        let content;
        Array.from(e.target.children).length
            ? content = e.target.lastElementChild.textContent
            : content = e.target.textContent

        if (e.target.textContent && tag !== 'CAPTION') {
            showMonth(`month-${id.split('-')[1]}-${monthsToNumber[content]}`);
            hideElement(e.currentTarget.id);
        }
        if (tag === 'CAPTION') {
            let year = e.target.textContent.split(' ')[1];
        }
    })
    element.classList.remove('hidden');
}

function showMonth(content) {
    let element = document.getElementById(content);
    element.classList.remove('hidden');
    element.querySelector('caption').addEventListener('click', () => {
        console.log('clicked');
    })
}

let monthsToNumber = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sept: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
}

export default {
    hideAllSections,
    hideElement,
    showYear
};