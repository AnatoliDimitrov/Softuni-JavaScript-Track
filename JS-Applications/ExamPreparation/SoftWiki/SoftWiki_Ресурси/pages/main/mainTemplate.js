import { html } from '../../node_modules/lit-html/lit-html.js';

function template(articles) {
    return html`
    <div class="content">
        <section class="js">
            <h2>JavaScript</h2>
            <div class="articles">
               ${articles.some(a => a.category === 'JavaScript')
        ? html`${articles.filter(a => a.category === 'JavaScript').sort((a, b) => b.title.localeCompare(a.title)).map(a => html`${single(a)}`)}`
                    : html`No articles yet`
                }
            </div>
        </section>
        <section class="CSharp">
            <h2>C#</h2>
            <div class="articles">
            ${articles.some(a => a.category === 'C#')
                    ? html`${articles.filter(a => a.category === 'C#').sort((a, b) => b.title.localeCompare(a.title)).map(a => html`${single(a)}`)}`
                    : html`No articles yet`
                }
            </div>
        </section>
        <section class="Java">
            <h2>Java</h2>
            <div class="articles">
            ${articles.some(a => a.category === 'Java')
                    ? html`${articles.filter(a => a.category === 'Java').sort((a, b) => b.title.localeCompare(a.title)).map(a => html`${single(a)}`)}`
                    : html`No articles yet`
                }
            </div>
        </section>
        <section class="Pyton">
            <h2>Pyton</h2>
            <div class="articles">
            ${articles.some(a => a.category === 'Pyton')
                    ? html`${articles.filter(a => a.category === 'Pyton').sort((a, b) => b.title.localeCompare(a.title)).map(a => html`${single(a)}`)}`
                    : html`No articles yet`
                }
            </div>
        </section>
    </div>
`;
}

function single(e) {
    return html`
     <article>
        <h3>${e.title}</h3>
        <p>${e.content}</p>
        <a href="/details/${e._id}" class="btn details-btn">Details</a>
    </article>
                    `;
}

export default {
    template
}