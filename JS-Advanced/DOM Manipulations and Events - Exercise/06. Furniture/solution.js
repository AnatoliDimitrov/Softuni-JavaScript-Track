function solve() {

  let containerElement = document.getElementById('container');
  let inputTextareaElelment = containerElement.querySelector('textarea');
  let generateBtnElelment = containerElement.querySelector('button');
  let tbodyElement = document.querySelector('tbody');
  let checkBoxElements;

  generateBtnElelment.addEventListener('click', function () {
    let furnitures = JSON.parse(inputTextareaElelment.value);
    let trElement = tbodyElement.querySelector('tr');

    for (const furniture of furnitures) {
      let cloneElement = '';
      
        cloneElement = `
        <tr>
         <td><img src="${furniture.img}"></td>
         <td><p>${furniture.name}</p></td> 
         <td><p>${furniture.price}</p></td>
         <td><p>${furniture.decFactor}</p></td>
         <td><input type="checkbox"/></td>
        </tr>`
      tbodyElement.insertAdjacentHTML(`beforeend`, cloneElement);
    }

    checkBoxElements = Array.from(tbodyElement.querySelectorAll('input'));
    checkBoxElements.map(x => x.disabled = false);
  })

  let buyElement = document.querySelectorAll('#exercise button')[1];

  buyElement.addEventListener('click', function () {

    let furnituresNames = [];
    let total = 0;
    let decFactors = [];

    for (const box of checkBoxElements) {
      if (box.checked) {
        let furnitureInfo = box.parentNode.parentNode;
        furnituresNames.push(furnitureInfo.querySelector('td:nth-child(2) p').textContent);
        total += Number(furnitureInfo.querySelector('td:nth-child(3) p').textContent);
        decFactors.push(Number(furnitureInfo.querySelector('td:nth-child(4) p').textContent));
      }
    }

    let decFactor = decFactors.reduce((a, e) => a + e, 0) / decFactors.length;

    let resultElement = document.querySelectorAll('#exercise textarea')[1];

    let result = `Bought furniture: ${furnituresNames.join(', ')}\n`;
    result += `Total price: ${total.toFixed(2)}\n`;
    result += `Average decoration factor: ${decFactor}`;

    resultElement.textContent = result;
  })
}