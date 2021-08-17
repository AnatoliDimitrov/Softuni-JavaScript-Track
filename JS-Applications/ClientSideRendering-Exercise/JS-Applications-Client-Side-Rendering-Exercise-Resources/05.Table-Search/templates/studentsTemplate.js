import { html } from "./../../node_modules/lit-html/lit-html.js";
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';

function allStudentsTemplate(students) {
    return html`${students.map(s => html` <tr class="${ifDefined(s.class)}">
    <td>${s.name}</td>
    <td>${s.email}</td>
    <td>${s.course}</td>
</tr>`)}`
}

export default {
    allStudentsTemplate
}