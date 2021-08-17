function create(words) {

   let contentElelment = document.getElementById('content');

   for (const section of words) {
      
      let sectionElement = document.createElement('div');
      let pElement = document.createElement('p');

      pElement.style.display = 'none';
      pElement.textContent = section;

      sectionElement.appendChild(pElement);
      sectionElement.addEventListener('click', function (e) {
         e.currentTarget.querySelector('p').style.display = 'block';
      })
      
      contentElelment.appendChild(sectionElement);
   }
}