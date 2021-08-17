import functions from './functionality.js';

functions.hideAllSections();
let yearsSection = document.getElementById('years');
yearsSection.classList.remove('hidden');
yearsSection.addEventListener('click', (e) => {
    let tag = e.target.tagName;
    let content;
    Array.from(e.target.children).length
        ? content = e.target.lastElementChild.textContent 
        : content = e.target.textContent
    
    if (e.target.textContent && tag !== 'CAPTION') {
    functions.showYear(`year-${content}`);
    functions.hideElement(e.currentTarget.id);
}
})
