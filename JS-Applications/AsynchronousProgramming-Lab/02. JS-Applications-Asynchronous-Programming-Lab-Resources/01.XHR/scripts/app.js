function loadRepos() {
   let url = `https://api.github.com/users/testnakov/repos`;
   let xhr = new XMLHttpRequest();

   xhr.open('GET', url);
   xhr.send();

   xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
         let res = document.getElementById('res');
         res.textContent = xhr.responseText;
      }
  }
}