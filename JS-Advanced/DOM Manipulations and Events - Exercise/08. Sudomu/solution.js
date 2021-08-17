function solve() {
    let tableElement = document.querySelector('table');
    let trElements = Array.from(tableElement.querySelector('tbody').children);
    let resultElement = document.getElementById('check');

    document.querySelector('tfoot button:nth-child(2)')
        .addEventListener('click', function () {
            tableElement.style.border = 'none';
            Array.from(document.querySelectorAll('tbody input')).map(x => x.value = '');
            resultElement.firstElementChild.textContent = null;
        });
    document.querySelector('tfoot button')
        .addEventListener('click', function () {
            let matrix = [];
            for (const trElement of trElements) {
                matrix.push(Array.from(trElement.children).reduce((a, e) => {
                    a.push(e.firstElementChild.value);
                    return a;
                }, []));
            }
            if (solved(matrix)) {
                tableElement.style.border = '2px solid green';
                resultElement.firstElementChild.style.color = 'green';
                resultElement.firstElementChild.textContent = 'You solve it! Congratulations!';
            } else {
                tableElement.style.border = '2px solid red';
                resultElement.firstElementChild.style.color = 'red';
                resultElement.firstElementChild.textContent = 'NOP! You are not done yet...';
            }
        });
    function solved(matrix) {

        let result = true;

        for (let i = 0; i < matrix.length; i++) {
            if (!(matrix[i].includes('1') && matrix[i].includes('2') && matrix[i].includes('3'))) {
                result = false;
                break;
            }
            
        }

        for (let i = 0; i < matrix.length; i++) {
            let element = [matrix[0][i], matrix[1][i], matrix[2][i],];
            if (!(element.includes('1') && element.includes('2') && element.includes('3'))) {
                result = false;
                break;
            }
            
        }
        return result
    }
}