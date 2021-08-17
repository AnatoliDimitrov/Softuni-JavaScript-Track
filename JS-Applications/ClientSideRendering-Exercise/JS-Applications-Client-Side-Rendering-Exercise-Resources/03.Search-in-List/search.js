import { towns } from './towns.js';
import { render } from './../node_modules/lit-html/lit-html.js';
import template from './templates/template.js';

let articleElement = document.querySelector('body article');

let searchWord = undefined;

let townObjects = [];

for (const town of towns) {
   townObjects.push({
      name: town,
      class: undefined
   })
}

function search() {
   render(template.mainTemplate(townObjects, searchInTowns), articleElement)
}

function searchInTowns(e) {
   let matchesCount = 0;
   let resultDiv = e.currentTarget.nextElementSibling;
   let input = e.currentTarget.previousElementSibling;
   searchWord = input.value.toLowerCase();
   for (const town of townObjects) {
      if (town.name.toLowerCase().includes(searchWord) && searchWord !== '') {
         town.class = 'active';
         matchesCount += 1;
      } else {
         town.class = undefined;
      }
   }
   matchesCount === 1 ? resultDiv.textContent = `${matchesCount} match found` : resultDiv.textContent = `${matchesCount} matches found`
   input.value = '';
   search();
}
search();
