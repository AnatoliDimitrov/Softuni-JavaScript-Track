let loadBtn = document.getElementById('btnLoad');
let createBtn = document.getElementById('btnCreate');
let tbodyElememnt = document.getElementById('phonebook');
loadBtn.addEventListener('click', loadPhonebook);
createBtn.addEventListener('click', createPhone);


async function loadPhonebook() {
    Array.from(tbodyElememnt.children).forEach(e => e.remove());
    try {
        let response = await fetch('http://localhost:3030/jsonstore/phonebook');
        let result = await response.json();
        Object.keys(result).forEach(p => tbodyElememnt.appendChild(createTr(result[p])));
    } catch (error) {
        alert(error);
    }
}

async function createPhone() {
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;

    try {
        await fetch('http://localhost:3030/jsonstore/phonebook', {
            headers: { 'Content-Type': 'application/json' },
            method: 'post',
            body: JSON.stringify({person, phone})
        })
        loadPhonebook();
    } catch (error) {
        alert(error);
    }
}

async function removePhone(e) {
    try {
        await fetch(`http://localhost:3030/jsonstore/phonebook/${e.target.id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'delete'
        })
        e.target.closest('tr').remove();
    } catch (error) {
        alert(error);
    }
}

function createTr(e) {
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdPhone = document.createElement('td');
    let tdBtn = document.createElement('td');
    tdName.textContent = e.person;
    tdPhone.textContent = e.phone;
    let button = document.createElement('button');
    button.id = e._id;
    button.textContent = 'Delete';
    button.addEventListener('click', removePhone);
    tdBtn.appendChild(button);
    tr.appendChild(tdName);
    tr.appendChild(tdPhone);
    tr.appendChild(tdBtn);

    return tr;
}

