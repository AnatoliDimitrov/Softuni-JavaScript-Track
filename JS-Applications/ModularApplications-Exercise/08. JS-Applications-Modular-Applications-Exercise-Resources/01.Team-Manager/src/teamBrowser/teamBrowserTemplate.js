import { html } from '../../node_modules/lit-html/lit-html.js';

function template(teams, isLoggedIn) {
    return html`<section id="browse">

    <article class="pad-med">
        <h1>Team Browser</h1>
    </article>
    ${isLoggedIn
        ? html` <article class="layout narrow">
                    <div class="pad-small"><a href="/create-team" class="action cta">Create Team</a></div>
                </article>`
        : ''}

    ${teams.map(t => html`${createTeamTemplate(t)}`)}
</section>`;
}

function createTeamTemplate(team) {
    return html`<article class="layout">
    <img src=${team.logoUrl} class="team-logo left-col">
    <div class="tm-preview">
        <h2>${team.name}</h2>
        <p>${team.description}</p>
        <span class="details">${team.membersCount} Members</span>
        <div><a href="/team-details/${team._id}" class="action">See details</a></div>
    </div>
</article>`;
}

export default {
    template
}