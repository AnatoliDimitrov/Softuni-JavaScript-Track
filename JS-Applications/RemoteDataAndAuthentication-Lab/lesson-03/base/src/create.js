let form = document.getElementById('create-recipe');
form.addEventListener('submit', createRecipe);

async function createRecipe(e) {
    e.preventDefault();
    if (localStorage.getItem('token')) {
        let formData = new FormData(form);
        let name = formData.get('name');
        let img = formData.get('img');
        let ingredients = formData.get('ingredients').split('\r\n');
        let steps = formData.get('steps').split('\r\n');

        let response = await fetch('http://localhost:3030/data/recipes', {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token')
            },
            method: 'post',
            body: JSON.stringify({
                name,
                img,
                ingredients,
                steps
            })
        });
        let result = response.json();
        console.log(result);

        window.location.assign('./index.html');
    } else {
        return;
    }
}
