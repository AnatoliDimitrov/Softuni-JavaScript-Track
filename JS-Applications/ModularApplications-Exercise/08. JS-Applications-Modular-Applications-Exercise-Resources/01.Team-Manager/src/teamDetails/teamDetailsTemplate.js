import { html } from '../../node_modules/lit-html/lit-html.js';

function template(info) {
    return html`
    <section id="team-home">
                <article class="layout">
                    <img src=${info.team.logoUrl} class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${info.team.name}</h2>
                        <p>${info.team.description}</p>
                        <span class="details">${info.allTeamMembers.length} Members</span>
                        <div>
                        ${info.isOwner
                        ? html`<a href="/edit-team/${info.team._id}" class="action">Edit team</a>`
                        : html`
                        ${info.teamMember
                            ? html`${info.teamMember.status === 'member'
                                ? html`<a href="#" @click=${() => { info.cancelRequestToTeam(info.team._id, info.teamMember._id) }} class="action invert">Leave team</a>`
                                : html`Membership pending. <a href="#" @click=${() => { info.cancelRequestToTeam(info.team._id, info.teamMember._id) }}>Cancel request</a>`}`
            : html`<a href="#" @click=${() => { info.joinToTeam(info.team._id) }} class="action">Join team</a>`
                            }
                 `}
                        </div>
                    </div>
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            ${info.isOwner
                                ? html`<li>${info.username}</li>`
                                : html``}
                                ${info.allTeamMembers.filter(m => m.status === 'member' && m.user.username !== info.username).map(m => html`${createMemberElement(m, info)}`)}
                        </ul>
                    </div>
                    <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            ${info.allTeamMembers.filter(m => m.status === 'pending').map(m => html`${createPendingElement(m, info)}`)}
                        </ul>
                    </div>
                </article>
            </section>`;
}

function notLoggedInTemplate(info) {
    return html`
    <section id="team-home">
                <article class="layout">
                    <img src=${info.team.logoUrl} class="team-logo left-col">
                    <div class="tm-preview">
                        <h2>${info.team.name}</h2>
                        <p>${info.team.description}</p>
                        <span class="details">${info.allTeamMembers.length} Members</span>
                        <!-- <div>
                        ${info.isOwner
                        ? html`<a href="/edit-team/${info.team._id}" class="action">Edit team</a>`
                        : html`
                        ${info.teamMember
                            ? html`${info.teamMember.status === 'member'
                                ? html`<a href="#" @click=${() => { info.cancelRequestToTeam(info.team._id, info.teamMember._id) }} class="action invert">Leave team</a>`
                                : html`Membership pending. <a href="#" @click=${() => { info.cancelRequestToTeam(info.team._id, info.teamMember._id) }}>Cancel request</a>`}`
            : html`<a href="#" @click=${() => { info.joinToTeam(info.team._id) }} class="action">Join team</a>`
                            }
                 `}
                        </div> -->
                    </div>
                    <div class="pad-large">
                        <h3>Members</h3>
                        <ul class="tm-members">
                            ${info.isOwner
                                ? html`<li>${info.username}</li>`
                                : html``}
                                ${info.allTeamMembers.filter(m => m.status === 'member' && m.user.username !== info.username).map(m => html`${createMemberElement(m, info)}`)}
                        </ul>
                    </div>
                    <!-- <div class="pad-large">
                        <h3>Membership Requests</h3>
                        <ul class="tm-members">
                            ${info.allTeamMembers.filter(m => m.status === 'pending').map(m => html`${createPendingElement(m, info)}`)}
                        </ul>
                    </div> -->
                </article>
            </section>`;
}

function createMemberElement(membership, info) {
    return html`<li>${membership.user.username}${info.isOwner ? html`<a href="#" @click=${() => { info.cancelRequestToTeam(info.team._id, membership._id) }} class="tm-control action">Remove from team</a>` : ``}</li>`;
}
function createPendingElement(membership, info) {
    return html`<li>${membership.user.username}${info.isOwner ? html`<a href="#" @click=${() => { info.approveRequestToTeam(info.team._id, membership) }} class="tm-control action">Approve</a>
    <a href="#" @click=${() => { info.cancelRequestToTeam(info.team._id, membership._id) }} class="tm-control action">Decline</a>` : ``}</li>`;
}

export default {
    template,
    notLoggedInTemplate
}