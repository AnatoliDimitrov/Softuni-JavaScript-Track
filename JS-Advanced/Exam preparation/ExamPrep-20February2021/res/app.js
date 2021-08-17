function solve(){
   let formElement = document.querySelector('form');
   let buttonFormElement = document.querySelector('form button');
   let postEl = document.querySelector('.site-content section');
   let olEl = document.querySelector('.archive-section ol');
   let olArray = [];

   buttonFormElement.addEventListener('click', (e) => {
      e.preventDefault();
      let creatorEl = document.getElementById('creator');
      let titlerEl = document.getElementById('title');
      let categoryEl = document.getElementById('category');
      let contentEl = document.getElementById('content');

      // console.log(creatorEl.value);
      // console.log(titlerEl.value);
      // console.log(categoryEl.value);
      // console.log(contentEl.value);

      let article = document.createElement('article');
      let h1Title = document.createElement('h1');
      h1Title.textContent = titlerEl.value;
      let pCategory = document.createElement('p');
      pCategory.textContent = 'Category:';
      let categoryStrong = document.createElement('strong');
      categoryStrong.textContent = categoryEl.value;
      let pCreator = document.createElement('p');
      pCreator.textContent = 'Creator:';
      let creatorStrong = document.createElement('strong');
      creatorStrong.textContent = creatorEl.value;
      let pContent = document.createElement('p');
      pContent.textContent = contentEl.value;
      let del = document.createElement('button');
      del.classList.add('btn');
      del.classList.add('delete');
      del.textContent = 'Delete';
      del.addEventListener('click', deleteArticle);
      let arch = document.createElement('button');
      arch.classList.add('btn');
      arch.classList.add('archive');
      arch.addEventListener('click', archiveElement)
      arch.textContent = 'Archive';
      let div = document.createElement('div');
      div.className = 'buttons';
      div.appendChild(del);
      div.appendChild(arch);
      pCategory.appendChild(categoryStrong);
      pCreator.appendChild(creatorStrong);

      article.appendChild(h1Title);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(pContent);
      article.appendChild(div);

      postEl.appendChild(article);
   });

   function deleteArticle(e) {
      let toDel = e.currentTarget.parentElement.parentElement;
      toDel.remove();
   }

   function archiveElement(e) {
      let currentArticle = e.currentTarget.parentElement.parentElement;
      let title = currentArticle.querySelector('h1').textContent;
      olArray.push(title);

      olArray = olArray.sort((a, b) => a.localeCompare(b));

      let lis = Array.from(olEl.children);
      lis.forEach(l => l.remove());

      olArray.map((e) => {
         let li = document.createElement('li');
         li.textContent = e;
         olEl.appendChild(li);
      });

      currentArticle.remove();
   }
  }
