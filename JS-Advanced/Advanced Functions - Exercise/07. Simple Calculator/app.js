function calculator() {

    let num1Elelment;
    let num2Elelment;
    let resultElelment;
    return {

        init(num1, num2, result) {
            num1Elelment = document.querySelector(num1);
            num2Elelment = document.querySelector(num2);
            resultElelment = document.querySelector(result);
        },
        add() {
            let result = Number(num1Elelment.value) +
                Number(num2Elelment.value);

            resultElelment.value = result;
        },
        subtract() {
            let result = Number(num1Elelment.value) -
                Number(num2Elelment.value);

            resultElelment.value = result;
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');