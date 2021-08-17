const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
}
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

module.exports = numberOperations;

// console.log(numberOperations.powNumber(1.1));
// console.log(numberOperations.powNumber(2));
// console.log(numberOperations.powNumber(-3));
// console.log(numberOperations.powNumber(0));
// console.log(numberOperations.powNumber(-2.2));

// console.log(numberOperations.sumArrays([1, 2], [3, 4, 5]));
// console.log(numberOperations.sumArrays([1.1, 2.3], [3.7, 4.9, 5.8]));
// console.log(numberOperations.sumArrays([0, 0], [0, 0, 0]));
// console.log(numberOperations.sumArrays([1, 2, 8, 100], [3, 4, 5]));
// console.log(numberOperations.sumArrays([1.1, 2.3, 100.1, 200.1], [3.7, 4.9, 5.8]));
// console.log(numberOperations.sumArrays([1, 2, 100, 200], [3.7, 4.9, 5.8]));
// console.log(numberOperations.sumArrays([1, 2, 100, 200], [3, 5, 100, 400]));
// console.log(numberOperations.sumArrays(['a', 'b', 'c'], [3, 5, 100, 400]));
// console.log(numberOperations.sumArrays([1, 2, 3], [1, 2, 3]));
// console.log(numberOperations.sumArrays([-1, -2, -3], [-1, -2, 3]));
// console.log(numberOperations.sumArrays([-1, -2, -3], [-1, -2, 3, -5]));
// console.log(numberOperations.sumArrays([-1, -2, -3, 5, 5, 6], [-1, -2, 3, -5]));

