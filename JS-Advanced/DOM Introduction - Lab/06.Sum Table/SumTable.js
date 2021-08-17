function sumTable() {
    let tds = Array.from(document.querySelectorAll('tbody td:nth-child(2n)'));

    let sum = tds.pop();

    sum.innerHTML = tds.reduce((a, e) => a + Number(e.innerHTML), 0)
}