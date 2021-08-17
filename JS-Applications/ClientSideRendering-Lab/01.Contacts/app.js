import { render } from './node_modules/lit-html/lit-html.js';
import { contacts } from './contacts.js';
import phoneCardTemplates from './templates/phoneCardTemplates.js';

let contactsContainer = document.getElementById('contacts');

render(phoneCardTemplates.createCardsTemplate(contacts, showInfo), contactsContainer);

function showInfo(e) {
    let infoDiv = e.currentTarget.nextElementSibling;
    if (infoDiv.style.display == 'block') {
        e.currentTarget.textContent = 'details';
        infoDiv.style.display = 'none';
    } else {
        e.currentTarget.textContent = 'hide';
        infoDiv.style.display = 'block';
    }
}