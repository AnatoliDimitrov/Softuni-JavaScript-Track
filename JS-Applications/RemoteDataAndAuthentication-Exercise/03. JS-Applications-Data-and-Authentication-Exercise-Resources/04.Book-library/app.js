let tbodyElement = document.getElementById('books');
let loadBooksBtn = document.getElementById('loadBooks');
loadBooksBtn.addEventListener('click', loadBooks);
let createForm = document.querySelector('.createForm');
createForm.addEventListener('submit', createBook);
let editForm = document.querySelector('.editForm');
editForm.addEventListener('click', saveBook);

async function loadBooks() {
    Array.from(tbodyElement.children).forEach(e => e.remove());
    try {
        let response = await fetch('http://localhost:3030/jsonstore/collections/books');
        let result = await response.json();
        Object.keys(result).forEach(b => tbodyElement.appendChild(createBookElement(b, result[b])));

    } catch (error) {
        alert(error);
    }
}

async function createBook(e) {
    e.preventDefault();
    let formData = new FormData(createForm);
    let author = formData.get('author');
    let title = formData.get('title');
    try {
        await fetch('http://localhost:3030/jsonstore/collections/books', {
                headers: { 'Content-Type': 'applicatio/json' },
                method: 'post',
                body: JSON.stringify({ author, title })
        })
        loadBooks();
        createForm.reset();
    } catch (error) {
        alert(error);
    }
}

async function saveBook(e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.value === 'Cancel') {
        createForm.style.display = 'block';
        editForm.style.display = 'none';
    } if (e.target.textContent === 'Save') {
        let id = editForm.id;
        let formData = new FormData(editForm);
        let author = formData.get('author');
        let title = formData.get('title');
        console.log(author);
        console.log(title);
        try {
            await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
                headers: { 'Content-Type': 'applicatio/json' },
                method: 'put',
                body: JSON.stringify({ author, title })
            })
            loadBooks()
            createForm.style.display = 'block';
            editForm.style.display = 'none';
        } catch (error) {
            alert(error);
        }
    }
}

function editBook(e) {
    let tr = e.target.closest('tr');
    let trChildren = tr.children;
    createForm.style.display = 'none';
    editForm.style.display = 'block';
    editForm.id = tr.id;
    console.log(editForm.id);
    let formTitle = editForm.querySelector('input[name="title"]')
    formTitle.value = trChildren[0].textContent;
    let formAuthor = editForm.querySelector('input[name="author"]')
    formAuthor.value = trChildren[1].textContent;
}

async function deletBook(e) {
    let id = e.target.closest('tr').id;
    try {
        await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
            headers: { 'Content-Type': 'applicatio/json' },
            method: 'delete',
        })
        loadBooks();
    } catch (error) {
        alert(error);
    }
}

function createBookElement(id, book) {
    let tdTitle = createElement('td', undefined, book.title);
    let tdAuthor = createElement('td', undefined, book.author);
    let delBtn = createElement('button', undefined, 'Delete');
    delBtn.addEventListener('click', deletBook);
    let editBtn = createElement('button', undefined, 'Edit');
    editBtn.addEventListener('click', editBook);
    let tdButtons = createElement('td', undefined, editBtn, delBtn);
    let tr = createElement('tr', { id: id }, tdTitle, tdAuthor, tdButtons);

    return tr;
}

function createElement(tag, attributes, ...params) {
    let element = document.createElement(tag);
    let firstValue = params[0];
    if (params.length === 1 && typeof (firstValue) !== 'object') {
        if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }
    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }
    return element;
}