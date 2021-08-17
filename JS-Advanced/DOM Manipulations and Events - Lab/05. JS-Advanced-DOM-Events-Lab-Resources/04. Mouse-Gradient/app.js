function attachGradientEvents() {
    let gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', function (e) {
         console.log(e.clientX);


        let resultElement = document.getElementById('result');
        let result = `${Math.floor((e.offsetX / e.target.clientWidth) * 100)}%`;
        resultElement.textContent = result;
    })
}

// Assume events will be attached
// result();

// let moveEvent = document.createEvent('MouseEvents');
// moveEvent.initEvent('mousemove', true, true);
// moveEvent.offsetX = 50;


// let div = document.getElementById('gradient');
// div.clientWidth = 300;
// div.dispatchEvent(moveEvent);

// expect(document.getElementById('result').textContent).to.equal('16%', "Gradient was not detected.");

// moveEvent.offsetX = 0;
// div.dispatchEvent(moveEvent);
// expect(document.getElementById('result').textContent).to.equal('0%', "Gradient was not detected at left edge.");

// moveEvent.offsetX = 300;
// div.dispatchEvent(moveEvent);
// expect(document.getElementById('result').textContent).to.equal('100%', "Gradient was not detected at right edge.");