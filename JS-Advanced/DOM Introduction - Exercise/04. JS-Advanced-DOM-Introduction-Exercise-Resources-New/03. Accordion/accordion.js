function toggle() {
    let buttonText = document.querySelectorAll('.button')[0];

    let extraElement = document.querySelector('#extra');
    let displayValue = extraElement.style.display;

    if (displayValue === 'none') {
        extraElement.style.display = 'block';
        buttonText.innerHTML = 'Less';
    } else {
        extraElement.style.display = 'none';
        buttonText.innerHTML = 'More';
    }
}