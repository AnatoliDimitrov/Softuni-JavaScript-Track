function solve(input) {
    let html = '<table>\n';
    let parsedJSON = JSON.parse(input);

    let first = parsedJSON[0];

    html += '\t<tr>';
    for (const key of Object.keys(first)) {
        let element = escapeHtml(String(key));
        html += `<th>${key}</th>`;
    }
    html += '</tr>\n';

    for (const obj of parsedJSON) {
        html += '\t<tr>';
        for (const key of Object.keys(obj)) {
            let element = escapeHtml(String(obj[key]));
            html += `<td>${element}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>';

    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
    }
    
    return html;
}

console.log(solve('[{"Name":"Stamat&<>", "Score":5.5}, {"Name":"Rumen", "Score":6}]'));
