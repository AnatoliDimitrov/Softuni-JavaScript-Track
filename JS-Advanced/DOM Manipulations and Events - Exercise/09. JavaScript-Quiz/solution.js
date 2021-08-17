function solve() {
  let sectionElements = Array.from(document.querySelectorAll('#quizzie section'));
  quiz(sectionElements, 0, 0)

  function quiz(sectionElements, index, score) {
    if (index === sectionElements.length) {
      document.querySelector('#results').style.display = 'block';
      let resultElement = document.querySelector('.results-inner h1');
      score === 3
       ? resultElement.textContent = 'You are recognized as top JavaScript fan!'
       : resultElement.textContent = `You have ${score} right answers`
      return;
    }
    let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let section = sectionElements[index];
    if (index !== 0) {
      section.style.display = 'block';
    }
    section.addEventListener('click', function (e) {
      if (e.target.className === 'answer-text') {
        if (rightAnswers.includes(e.target.textContent)) score++;
        section.style.display = 'none';
        quiz(sectionElements, index + 1, score);
      }
    })
  }
}