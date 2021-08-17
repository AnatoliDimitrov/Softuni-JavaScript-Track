function addItem() {
    
    let inputElelment = document.getElementById('newItemText');
    let ulElement = document.getElementById('items');

    let newLi = document.createElement('li');

    newLi.textContent = inputElelment.value;
    ulElement.appendChild(newLi);
    
    inputElelment.value = '';
}