function lockedProfile() {

    let buttonElements = Array.from(document.querySelectorAll('button'))
        .map(x => x.addEventListener('click', function (e) {
            let buttonElement = e.currentTarget;
            let infoElement = buttonElement.previousSibling.previousSibling;
            let isLocked = buttonElement.parentNode.querySelector('input').checked;
            if (!isLocked) {
                if (buttonElement.textContent === 'Show more') {
                    infoElement.style.display = 'block';
                    buttonElement.textContent = 'Hide it';
                } else {
                    infoElement.style.display = 'none';
                    buttonElement.textContent = 'Show more';
                }
            }
        }));
}