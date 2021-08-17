function editElement(h1Element, match, replacer) {
    var regex = new RegExp(match, 'g');
    let inner = h1Element.textContent.replace(regex, replacer);
    h1Element.innerHTML = inner;
}