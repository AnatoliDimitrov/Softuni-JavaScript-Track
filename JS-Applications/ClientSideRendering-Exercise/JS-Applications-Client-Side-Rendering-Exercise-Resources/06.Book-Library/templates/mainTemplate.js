import { html } from './../../node_modules/lit-html/lit-html.js';

function createMainTemplate(saveBook, createBook) {
    return html`<button id="loadBooks">LOAD ALL BOOKS</button>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <form id="add-form">
        <h3>Add book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click=${createBook} type="submit" value="Submit">
    </form>

    <form class="hidden" id="edit-form">
        <input type="hidden" name="id">
        <h3>Edit book</h3>
        <label>TITLE</label>
        <input type="text" name="title" placeholder="Title...">
        <label>AUTHOR</label>
        <input type="text" name="author" placeholder="Author...">
        <input @click=${saveBook} type="submit" value="Save">
    </form>`;
}

function tbodyTemplate(books, editBook, deleteBook) {
    return html`${books.map(b => html`<tr>
    <td>${b.title}</td>
    <td>${b.author}</td>
    <td>
        <button @click=${editBook} edit-id=${b.id}>Edit</button>
        <button @click=${deleteBook} del-id=${b.id}>Delete</button>
    </td>
</tr>`)}`;
}

export default {
    createMainTemplate,
    tbodyTemplate
}