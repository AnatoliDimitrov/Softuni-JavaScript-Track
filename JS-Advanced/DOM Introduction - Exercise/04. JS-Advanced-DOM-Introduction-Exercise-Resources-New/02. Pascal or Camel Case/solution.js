function solve() {
  let text = document.getElementById('text').value;
  text = Array.from(text.split(' '));

  let convention = document.getElementById('naming-convention').value;

  let result = '';

  let index = -1;

  if (convention === 'Camel Case') {
    index = 1;
    text[0] = text[0].toLowerCase();
  }

  if (convention === 'Pascal Case') {
    index = 0;
  }

  if (index === -1) {
    result = 'Error!';
  } else {
    for (let i = index; i < text.length; i++) {
      text[i] = capitalizeFirstLetter(text[i]);
    }

    result = text.join('');
  }

  let span = document.getElementById('result');
  span.innerHTML = result;

  console.log(result);

  function capitalizeFirstLetter(str) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    return capitalized;
  }
}