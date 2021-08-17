function solve() {

  let text = Array.from(document.querySelector('#input').value.split('.').filter(x => x));

  let resultText = '<p>';

  while (text.length > 0) {
    
    resultText += `${text.shift().trim()}.`;
    if (text.length > 0) {
      resultText += `${text.shift().trim()}.`;
    }
    if (text.length > 0) {
      resultText += `${text.shift().trim()}.`;
    }
    resultText += '</p><p>';
  }

  resultText = resultText.slice(0, resultText.length - 3);

  let output = document.getElementById('output');

  output.innerHTML = resultText;
}