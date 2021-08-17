let userElement = document.getElementById('user');
let guestlement = document.getElementById('guest');
let logoutElement = document.queryCommandValue('#user a');
let loadElement = document.querySelector('.load');
let addElement = document.querySelector('#addForm .add');
let mainElement = document.getElementById('main');
let catchesElement = document.getElementById('catches');

userElement.addEventListener('click', async () => {
    localStorage.removeItem('user_id_catch');
    localStorage.removeItem('token_catch');
    await fetch('http://localhost:3030/users/logout');
})
loadElement.addEventListener('click', showCatches);
addElement.addEventListener('click', addCatch)

async function showCatches() {
    mainElement.style.display = 'block';
    Array.from(catchesElement.children).forEach(e => e.remove());
    try {
        let response = await fetch('http://localhost:3030/data/catches');
        let result = await response.json();
        Object.keys(result).forEach(c => catchesElement.appendChild(createCatch(result[c])))
        console.log(result);
    } catch (error) {
        alert(error);
    }
}

async function addCatch(e) {
    let [angler, weight, species, location, bait, captureTime] = e.target.parentElement.querySelectorAll('input');

    if (angler.value && weight.value && species.value && location.value && bait.value && captureTime.value) {
        await fetch('http://localhost:3030/data/catches', {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token_catch')
            },
            method: 'post',
            body: JSON.stringify({
                angler: angler.value,
                weight: weight.value,
                species: species.value,
                location: location.value,
                bait: bait.value,
                captureTime: captureTime.value,
                _ownerId: localStorage.getItem('user_id_catch')
            })
        })
        showCatches();
    } else {
        return;
    }
}

async function updateCatch(e) {
    let [angler, weight, species, location, bait, captureTime] = e.target.parentElement.querySelectorAll('input');

    if (angler.value && weight.value && species.value && location.value && bait.value && captureTime.value) {
        await fetch(`http://localhost:3030/data/catches/${e.target.parentElement.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token_catch')
            },
            method: 'put',
            body: JSON.stringify({
                angler: angler.value,
                weight: weight.value,
                species: species.value,
                location: location.value,
                bait: bait.value,
                captureTime: captureTime.value,
                _ownerId: localStorage.getItem('user_id_catch')
            })
        })
        showCatches();
    } else {
        return;
    }
}

async function deleteCatch(e) {
    await fetch(`http://localhost:3030/data/catches/${e.target.parentElement.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': localStorage.getItem('token_catch')
            },
            method: 'delete',
        })
        showCatches();
}

function createCatch(c) {
    let anglerLabel = createElement('label', undefined, 'Angler');
    let anglerInput = createElement('input', { type: 'text', class: 'angler' }, c.angler);
    let anglerHr = createElement('hr');

    let weightLabel = createElement('label', undefined, 'Weight');
    let weightInput = createElement('input', { type: 'number', class: 'weight' }, c.weight);
    let weightHr = createElement('hr');

    let speciesLabel = createElement('label', undefined, 'Species');
    let speciesInput = createElement('input', { type: 'text', class: 'species' }, c.species);
    let speciesHr = createElement('hr');

    let locationLabel = createElement('label', undefined, 'Location');
    let locationInput = createElement('input', { type: 'text', class: 'location' }, c.location);
    let locationHr = createElement('hr');

    let baitLabel = createElement('label', undefined, 'Bait');
    let baitInput = createElement('input', { type: 'text', class: 'bait' }, c.bait);
    let baitHr = createElement('hr');

    let captureTimeLabel = createElement('label', undefined, 'Capture Time');
    let captureTimeInput = createElement('input', { type: 'number', class: 'captureTime' }, c.captureTime);
    let captureTimeHr = createElement('hr');

    let updateBtn = createElement('button', { class: 'update' }, 'Update');
    updateBtn.disabled = localStorage.getItem('user_id_catch') !== c._ownerId;
    updateBtn.addEventListener('click', updateCatch);

    let deleteBtn = createElement('button', { class: 'delete' }, 'Delete');
    deleteBtn.disabled = localStorage.getItem('user_id_catch') !== c._ownerId;
    deleteBtn.addEventListener('click', deleteCatch)

    return createElement('div', { class: 'catch,', id: c._id }, anglerLabel, anglerInput, anglerHr, weightLabel,
        weightInput, weightHr, speciesLabel, speciesInput, speciesHr, locationLabel, locationInput,
        locationHr, baitLabel, baitInput, baitHr, captureTimeLabel, captureTimeInput, captureTimeHr,
        updateBtn, deleteBtn);
}

function createElement(tag, attributes, ...params) {
    let element = document.createElement(tag);
    let firstValue = params[0];
    if (params.length === 1 && typeof (firstValue) !== 'object') {
        if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
        } else {
            element.textContent = firstValue;
        }
    } else {
        element.append(...params);
    }
    if (attributes !== undefined) {
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        })
    }
    return element;
}

if (localStorage.getItem('token_catch')) {
    guestlement.style.display = 'none';
    userElement.style.display = 'block';
    addElement.removeAttribute('disabled');
} else {
    guestlement.style.display = 'block';
    userElement.style.display = 'none';
}