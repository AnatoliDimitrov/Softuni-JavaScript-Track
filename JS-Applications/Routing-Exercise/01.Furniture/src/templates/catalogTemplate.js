import { html } from './../../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';
import authService from '../../services/authService.js';

function furnitures(furnitures) {
    return html`<div class="row space-top">
    <div class="col-md-12">
        <h1>Welcome to Furniture System</h1>
        <p>Select furniture from the catalog to view details.</p>
    </div>
</div>
<div class="row space-top">
    ${furnitures.map(f => html`${singleFurnitureTemplate(f)}`)}
</div>`;
}

function singleFurnitureTemplate(furniture) {
    return html` <div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
                <img src=${furniture.img} />
                <p>${furniture.make}</p>
                <footer>
                    <p>Price: <span>${furniture.price} $</span></p>
                </footer>
                <div>
                    <a href=${`/details/${furniture._id}`} class="btn btn-info">Details</a>
                </div>
        </div>
    </div>
</div>`;
}

export default {
    furnitures
}