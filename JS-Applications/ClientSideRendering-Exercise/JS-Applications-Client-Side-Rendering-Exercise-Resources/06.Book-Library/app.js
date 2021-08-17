import { render } from "./../node_modules/lit-html/lit-html.js";
import auth from "./services/authService.js";
import mainTemplate from "./templates/mainTemplate.js";

let body = document.body;

render(mainTemplate.createMainTemplate(saveBook, createBook), body)

let createForm = document.getElementById('add-form');
let editForm = document.getElementById('edit-form');

let loadBooksBtn = document.getElementById('loadBooks');
loadBooksBtn.addEventListener('click', getBooks);

let tbodyElement = document.querySelector('tbody');



async function editBook(e) {
    let inputs = Array.from(editForm.querySelectorAll('input'));
    let bookToEdit = await auth.getWithId(e.target.getAttribute('edit-id'));
    inputs[0].value = e.target.getAttribute('edit-id');
    inputs[1].value = bookToEdit.title;
    inputs[2].value = bookToEdit.author;
    createForm.className = 'hidden';
    editForm.className = '';
}

async function deleteBook(e) {
    let id = e.target.getAttribute('del-id');
    await auth.del(id);

    getBooks();
    
}

async function saveBook(e) {
    e.preventDefault();
    let form = e.target.closest('form');
    let formData = new FormData(form);
    let id = formData.get('id');
    let title = formData.get('title');
    let author = formData.get('author');

    if (title && author) {
        await auth.put(id, { author, title })
    
        getBooks();
    
        createForm.className = '';
        editForm.className = 'hidden';
    } else {
        alert('No empty fields are allowed!');
    }
}

async function createBook(e) {
    e.preventDefault();
    let formData = new FormData(createForm);
    let title = formData.get('title');
    let author = formData.get('author');
    if (title && author) {
    await auth.postWithoutAuth({ author, title })
    getBooks();
    } else {
        alert('No empty fields are allowed!');
    }
}

async function getBooks() {
    let booksRawData = await auth.get();
    for (const book in booksRawData) {
        booksRawData[book].id = book;
    }
    render(mainTemplate.tbodyTemplate(Object.values(booksRawData), editBook, deleteBook), tbodyElement)
}