function focused() {
    let divContainerElement = document.querySelector('body > div');

    divContainerElement.addEventListener('focus', function(event) {
        event.target.parentNode.className = 'focused';
      }, true);
    
    divContainerElement.addEventListener('blur', (event) => {
        event.target.parentNode.className = '';
      }, true);
}