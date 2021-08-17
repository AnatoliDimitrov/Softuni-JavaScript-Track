function solve() {

    let selectElement = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexOption = document.createElement('option');

    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    hexOption.value = 'hexadecimal';
    hexOption.textContent = 'Hexadecimal';

    selectElement.appendChild(binaryOption);
    selectElement.appendChild(hexOption);

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {
        console.log(selectElement.value);

        let num = Number(document.getElementById('input').value);

        let resultElement = document.getElementById('result');

        resultElement.value = convert(selectElement.value, num);
    }

    function convert(to, dec) {
        if (to === 'binary') {
            return  dec.toString(2);
        } else if (to === 'hexadecimal') {
            return  dec.toString(16).toUpperCase();
        }
    }
}