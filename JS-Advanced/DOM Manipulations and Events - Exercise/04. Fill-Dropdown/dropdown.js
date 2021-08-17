function addItem() {
    let selectElement = document.getElementById('menu');

    let txt = document.getElementById('newItemText');
    let val = document.getElementById('newItemValue');
    let opt = document.createElement('option');
    opt.textContent = txt.value;
    opt.value = val.value;

    selectElement.appendChild(opt);

    txt.value = '';
    val.value = '';
}