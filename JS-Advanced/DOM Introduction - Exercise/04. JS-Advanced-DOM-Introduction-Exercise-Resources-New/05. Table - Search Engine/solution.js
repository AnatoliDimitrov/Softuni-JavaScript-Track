function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let entriesElements = Array.from(document.querySelectorAll('tbody tr'));

      for (const entrie of entriesElements) {
         entrie.classList.remove("select");
      }

      let search = document.querySelector('#searchField');
      console.log(search);

      for (const entrie of entriesElements) {
         if (entrie.innerText.includes(search.value)) {
            console.log(entrie.innerText);
            entrie.classList.add("select");
         }
      }
      search.value = '';
   }
}