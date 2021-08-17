let tbodyElement = document.querySelector('#results tbody');
let form = document.getElementById('form');
form.addEventListener('submit', createStudent);

async function createStudent(e) {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let firstName = formData.get('firstName');
    let lastName = formData.get('lastName');
    let facultyNumber = formData.get('facultyNumber');
    let grade = Number(formData.get('grade'));

    if (firstName && lastName && facultyNumber && grade) {
        try {
            await fetch('http://localhost:3030/jsonstore/collections/students', {
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                body: JSON.stringify({firstName, lastName, facultyNumber, grade})
            });
            loadStudents();
            form.reset();
        } catch (error) {
            alert(error);
        } 
    } else {
        return;
    }
}

async function loadStudents() {
    Array.from(tbodyElement.children).forEach(e => e.remove());
    try {
        let response = await fetch('http://localhost:3030/jsonstore/collections/students');
        let result = await response.json();
        Object.keys(result).forEach(o => tbodyElement.appendChild(createTr(result[o])));
    } catch (error) {
        alert(error);
    }
}

loadStudents();

function createTr(o) {
    let tr = document.createElement('tr');
    let tdFirstName = document.createElement('td');
    tdFirstName.textContent = o.firstName;
    let tdLastName = document.createElement('td');
    tdLastName.textContent = o.lastName;
    let tdNumber = document.createElement('td');
    tdNumber.textContent = o.facultyNumber;
    let tdGrade = document.createElement('td');
    tdGrade.textContent = o.grade.toFixed(2);

    tr.appendChild(tdFirstName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdNumber);
    tr.appendChild(tdGrade);

    return tr;
}