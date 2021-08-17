function addItem() {
    
    let inputElelment = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let newLi = document.createElement('li');

    newLi.textContent = inputElelment.value;
    let href = document.createElement('a');
    href.setAttribute('href', "#");
    href.textContent = '[Delete]';
    href.addEventListener('click', function () {
        href.parentNode.remove();
    });
    newLi.appendChild(href);
    ulElement.appendChild(newLi);
    
    inputElelment.value = '';
}