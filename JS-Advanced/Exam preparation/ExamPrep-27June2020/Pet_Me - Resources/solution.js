function solve() {
    let formBtnEl = document.querySelector('#container button');
    let adoptionUlEl = document.querySelector('#adoption ul');
    let adoptedUlEl = document.querySelector('#adopted ul');

    formBtnEl.addEventListener('click', (e) => {
        e.preventDefault();

        let [nameEl, ageEl, kindEl, currentOwnerEl] =
            document.querySelectorAll('#container input');

        if (nameEl.value && !isNaN(Number(ageEl.value)) // be carefull
            && kindEl.value && currentOwnerEl.value) {

            let li = creatLiForNewPet(nameEl.value, ageEl.value, kindEl.value, currentOwnerEl.value);
            adoptionUlEl.appendChild(li);


            nameEl.value = '';
            ageEl.value = '';
            kindEl.value = '';
            currentOwnerEl.value = '';
        }

        // console.log(nameEl.value);
        // console.log(ageEl.value);
        // console.log(kindEl.value);
        // console.log(currentOwnerEl.value);
    })

    function creatLiForNewPet(petName, age, kind, owner) {
        let liEl = document.createElement('li');
        let p = document.createElement('p');
        p.innerHTML = `<strong>${petName}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
        let span = document.createElement('span');
        span.textContent = `Owner: ${owner}`;
        let button = document.createElement('button');
        button.textContent = 'Contact with owner';
        button.addEventListener('click', changeButton);

        liEl.appendChild(p);
        liEl.appendChild(span);
        liEl.appendChild(button);

        return liEl;
    }

    function changeButton(e) {
        let liParent = e.target.parentElement;
        e.target.remove();
        console.log(liParent);

        let div = document.createElement('div');
        let input = document.createElement('input');
        input.placeholder = 'Enter your names';
        let button = document.createElement('button');
        button.textContent = 'Yes! I take it!';
        button.addEventListener('click', takeIt);

        div.appendChild(input);
        div.appendChild(button);
        liParent.appendChild(div);
    }

    function takeIt(e) {
        let names = e.target.previousSibling;

        if (names.value) {
            let li = names.parentElement.parentElement;
            li.querySelector('div').remove();
            li.querySelector('span').textContent = `New Owner: ${names.value}`;
            let checkedBtn = document.createElement('button');
            checkedBtn.textContent = 'Checked';
            checkedBtn.addEventListener('click', deletePet);
            li.appendChild(checkedBtn);

            li.remove();

            adoptedUlEl.appendChild(li);
        }

    }

    function deletePet(e) {
        e.target.parentElement.remove();
    }
}

