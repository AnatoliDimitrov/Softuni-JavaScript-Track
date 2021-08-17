import { html } from '../../node_modules/lit-html/lit-html.js';

function template() {
    return html`
    <div class="container home wrapper  my-md-5 pl-md-5">
        <div class="d-md-flex flex-md-equal ">
            <div class="col-md-5">
                <img class="responsive" src="./images/01.svg" />
            </div>
            <div class="home-text col-md-7">
                <h2 class="featurette-heading">Do you wonder if your idea is good?</h2>
                <p class="lead">Join our family =)</p>
                <p class="lead">Post your ideas!</p>
                <p class="lead">Find what other people think!</p>
                <p class="lead">Comment on other people's ideas.</p>
            </div>
        </div>
        <div class="bottom text-center">
            <a class="btn btn-secondary btn-lg " href="/all">Get Started</a>
        </div>
    </div>
`;
}

function single(e) {
    return html`
     <!-- Display all records -->
     <div class="listing">
                    <div class="preview">
                        <img src=${e.imageUrl}>
                    </div>
                    <h2>${e.brand} ${e.model}</h2>
                    <div class="info">
                        <div class="data-info">
                            <h3>Year: ${e.year}</h3>
                            <h3>Price: ${e.price} $</h3>
                        </div>
                        <div class="data-buttons">
                            <a href="/details/${e._id}" class="button-carDetails">Details</a>
                        </div>
                    </div>
                </div>
                    `;
}

export default {
    template
}