import { html } from './../../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';

function mainTemplate(towns, searchInTowns) {
    return html`<div id="towns">
                    <ul>
                        ${towns.map(t => townTemplate(t))}
                    </ul>
                </div>
                <input type="text" id="searchText" />
                <button @click=${searchInTowns}>Search</button>
                <div id="result"></div>`;
}

function townTemplate(town) {
    return html`<li class=${ifDefined(town.class)}>${town.name}</li>`;
}

export default {
    mainTemplate
}