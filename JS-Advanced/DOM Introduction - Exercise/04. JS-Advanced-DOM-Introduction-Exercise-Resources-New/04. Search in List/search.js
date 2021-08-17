function search() {

   let townsElements = Array.from(document.querySelectorAll('#towns li'));
   let searchElement = document.querySelector('#searchText').value;
   let resultElement = document.querySelector('#result');
   let counter = 0;

   for (let i = 0; i < townsElements.length; i++) {
      let element = townsElements[i];

      if (element.innerHTML.includes(searchElement)) {
         counter++;
         element.style.textDecoration = 'underline';
         element.style.fontWeight = 'bold';
      }
      
   }

   resultElement.innerHTML = `${counter} matches found`;
}
