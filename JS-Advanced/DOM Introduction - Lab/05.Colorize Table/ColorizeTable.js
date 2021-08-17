function colorize() {
    let targetElements = document.querySelectorAll('table tr:nth-child(2n)');

    for (let trElement of Array.from(targetElements)) {
        trElement.style.background="teal";
    }
}