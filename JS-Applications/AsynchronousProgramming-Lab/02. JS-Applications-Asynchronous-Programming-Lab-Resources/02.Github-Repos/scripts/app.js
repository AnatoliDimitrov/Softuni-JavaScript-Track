function loadRepos() {
	let name = document.querySelector('body input').value;
	let url = `https://api.github.com/users/${name}/repos`;
	let ulElement = document.getElementById('repos');

	fetch(url)
		.then(r => r.json())
		.then(data => {
			ulElement.children[0].remove();
			data.forEach(e => {
				let li = document.createElement('li');
				let a = document.createElement('a');
				a.href = e.html_url;
				a.textContent = e.full_name;
				li.appendChild(a);
				ulElement.appendChild(li);
			});
		})
		.catch(er => console.log(er));
}