function solution() {
    let [addElement, listElement, sentElement, discardElement] =
        Array.from(document.querySelectorAll('.container .card'));

    let listUlElement = listElement.querySelector('ul');
    let sentUl = sentElement.querySelector('ul');
    let discardUl = discardElement.querySelector('ul');

    listElement.addEventListener('click', (e) => {
        let targetEl = e.target;
        if (targetEl.id === 'sendButton') {
            let li = e.target.parentElement;
            Array.from(li.children).map(e => e.remove());
            li.parentElement.removeChild(li);

            sentUl.appendChild(li);
        } else if (targetEl.id === 'discardButton') {
            let li = e.target.parentElement;
            Array.from(li.children).map(e => e.remove());
            li.parentElement.removeChild(li);

            discardUl.appendChild(li);
        }
    });

    let addBtnEl = addElement.querySelector('button');
    addBtnEl.addEventListener('click', () => {
        let li = document.createElement('li');
        li.classList.add('gift');
        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';
        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';

        let inputEl = addElement.querySelector('input');
        li.textContent = inputEl.value;
        li.appendChild(sendBtn);
        li.appendChild(discardBtn);

        listUlElement.appendChild(li);
        inputEl.value = '';

        let lis = Array.from(listUlElement.children);
        lis = lis.sort((a, b) => a.textContent.localeCompare(b.textContent));

        Array.from(listUlElement.children).map(e => e.remove());

        lis.forEach(e => listUlElement.appendChild(e));
    })

    // console.log(addElement);
    // console.log(listElement);
    // console.log(sentElement);
    // console.log(discardElement);
}