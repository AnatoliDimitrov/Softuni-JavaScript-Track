import { html } from './../../node_modules/lit-html/lit-html.js';

function template(furniture, correct, submitForm) {
    return html`
    <div class="row space-top">
            <div class="col-md-12">
                <h1>Create New Furniture</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${submitForm}>
            <div class="row space-top">
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-make">Make</label>
                        <input class="form-control ${correct.make == 'correct' ? 'is-valid':'is-invalid'}" id="new-make" type="text" name="make" .value=${furniture.make}>
                    </div>
                    <div class="form-group}">
                        <label class="form-control-label" for="new-model">Model</label>
                        <input class="form-control ${correct.model == 'correct' ? 'is-valid':'is-invalid'}" id="new-model" type="text" name="model" .value=${furniture.model}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-year">Year</label>
                        <input class="form-control ${correct.year == 'correct' ? 'is-valid':'is-invalid'}" id="new-year" type="number" name="year" .value=${furniture.year}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-description">Description</label>
                        <input class="form-control ${correct.description == 'correct' ? 'is-valid':'is-invalid'}" id="new-description" type="text" name="description" .value=${furniture.description}>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="new-price">Price</label>
                        <input class="form-control ${correct.price == 'correct' ? 'is-valid':'is-invalid'}" id="new-price" type="number" name="price" .value=${furniture.price}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-image">Image</label>
                        <input class="form-control ${correct.img == 'correct' ? 'is-valid':'is-invalid'}" id="new-image" type="text" name="img" .value=${furniture.img}>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="new-material">Material (optional)</label>
                        <input class="form-control" id="new-material" type="text" name="material" .value=${furniture.material}>
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create" />
                </div>
            </div>
        </form>`;
}

export default {
    template
}