function lockedProfile() {
    let mainDivElement = document.getElementById('main');

    fetch('http://localhost:3030/jsonstore/advanced/profiles')
        .then(r => r.json())
        .then(d => {
            Array.from(mainDivElement.children)[0].remove();
            let counter = 0;
            for (const profil in d) {
                counter++;
                mainDivElement.appendChild(createProfil(d[profil], counter));
            }
        })
        .catch(e => {
            Array.from(mainDivElement.children)[0].remove();
            let div = document.createElement('div');
            div.textContent = 'Error!';
            mainDivElement.appendChild(div);
        });

    function createProfil(profil, counter) {

        let wraper = document.createElement('div');
        wraper.className = 'profile';
        let img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.className = 'userIcon';
        let labelLock = document.createElement('label');
        labelLock.textContent = 'Lock';
        let labelUnlock = document.createElement('label');
        labelUnlock.textContent = 'Unlock';
        let lockRadio = document.createElement('input');
        lockRadio.setAttribute('type', 'radio');
        lockRadio.setAttribute('name', `user${counter}Locked`);
        lockRadio.setAttribute('value', 'lock');
        lockRadio.checked = true;
        let unlockradio = document.createElement('input');
        unlockradio.setAttribute('type', 'radio');
        unlockradio.setAttribute('name', `user${counter}Locked`);
        unlockradio.setAttribute('value', 'unlock');
        let br = document.createElement('br');
        let hr = document.createElement('hr');
        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
        let nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', `user${counter}Locked`);
        nameInput.setAttribute('value', `${profil.username}`);
        nameInput.readOnly = true;
        let hiddenDiv = document.createElement('div');
        hiddenDiv.id = `user${counter}HiddenFields`;
        let innerHr = document.createElement('hr');
        let labelEmail = document.createElement('label');
        labelEmail.textContent = 'Email:';
        let labelAge = document.createElement('label');
        labelAge.textContent = 'Age:';
        let emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'email');
        emailInput.setAttribute('name', `user${counter}Locked`);
        emailInput.setAttribute('value', `${profil.email}`);
        emailInput.readOnly = true;
        let ageInput = document.createElement('input');
        ageInput.setAttribute('type', 'age');
        ageInput.setAttribute('name', `user${counter}Locked`);
        ageInput.setAttribute('value', `${profil.age}`);
        ageInput.readOnly = true;
        let button = document.createElement('button');
        button.addEventListener('click', showMore);
        button.textContent = 'Show more';

        hiddenDiv.appendChild(innerHr);
        hiddenDiv.appendChild(labelEmail);
        hiddenDiv.appendChild(emailInput);
        hiddenDiv.appendChild(labelAge);
        hiddenDiv.appendChild(ageInput);

        wraper.appendChild(img);
        wraper.appendChild(labelLock);
        wraper.appendChild(lockRadio);
        wraper.appendChild(labelUnlock);
        wraper.appendChild(unlockradio);
        wraper.appendChild(br);
        wraper.appendChild(hr);
        wraper.appendChild(usernameLabel);
        wraper.appendChild(nameInput);
        wraper.appendChild(hiddenDiv);
        wraper.appendChild(button);

        return wraper;
    }

    function showMore(e) {
        let isLocked = e.target.parentElement.children[2].checked;
        let hiddenDiv = e.target.previousSibling;
        if (isLocked) {
            return;
        }

        if (hiddenDiv.style.display === 'block') {
            hiddenDiv.style.display = 'none';
            e.target.textContent = 'Show more';
        } else {
            hiddenDiv.style.display = 'block';
            e.target.textContent = 'Hide it';
        }
    }
}