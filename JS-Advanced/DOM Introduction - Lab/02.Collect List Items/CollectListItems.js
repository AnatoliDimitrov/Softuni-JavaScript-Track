function extractText() {
    let ul = document.getElementById('items');
    
    let result = '';

    for (const li of Array.from(ul.children)) {
        result += li.innerHTML.trim() + '\n';
    }

    let area = document.getElementById('result');
    area.innerHTML = result.trim();
}