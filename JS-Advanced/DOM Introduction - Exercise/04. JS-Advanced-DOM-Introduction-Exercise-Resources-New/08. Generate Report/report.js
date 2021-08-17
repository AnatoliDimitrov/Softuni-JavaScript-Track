function generateReport() {

    let checked = Array.from(document.querySelectorAll('thead input')).map(x => x.checked);

    let trs = Array.from(document.querySelectorAll('tbody tr'));
    let headings = Array.from(document.querySelectorAll('thead th')).map(x => x.textContent.trim().toLowerCase());

    let result = [];
    for (let i = 0; i < trs.length; i++) {
        let tds = Array.from(trs[i].children);
        let currentObj = {};
        
        for (let j = 0; j < tds.length; j++) {

            if (checked[j]) {
                currentObj[headings[j]] = tds[j].textContent;
            }
        }

        result.push(currentObj);
    }

    let output = document.getElementById('output');
    output.value = JSON.stringify(result, null, 2);
}