let messagesElement = document.getElementById('messages');
let refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', loadMessages);
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', submitMessage);

async function loadMessages() {
    try {
        let response = await fetch('http://localhost:3030/jsonstore/messenger');
        let result = await response.json();
        messagesElement.value = Object.keys(result).reduce((a, e) => {
            a += `${result[e].author}: ${result[e].content}\n`;
            return a;
        }, '').trim();
    } catch (error) {
        console.error(error);
    }
}

async function submitMessage(e) {
    let author = document.getElementById('author').value;
    let content = document.getElementById('content').value;
    try {
        await fetch('http://localhost:3030/jsonstore/messenger', {
            headers: {'Content-Type': 'application/json'},
            method: 'post',
            body: JSON.stringify({author, content})
        })
        let message = `\n${author}: ${content}`;
        messagesElement.value = messagesElement.value + message;
    } catch (error) {
        console.error(error);
    }
}