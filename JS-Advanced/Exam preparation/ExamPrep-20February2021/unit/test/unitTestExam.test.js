const numberOperations = require('../unitTestExam');
const { assert } = require('chai');

describe("Test numberOperations", function () {
    describe("powerNumber", function () {
        it("test with integers", function () {
            assert.strictEqual(numberOperations.powNumber(1.1), 1.2100000000000002); // probebly wrong
            assert.strictEqual(numberOperations.powNumber(2), 4);
            assert.strictEqual(numberOperations.powNumber(-3), 9);
            assert.strictEqual(numberOperations.powNumber(0), 0);
            assert.strictEqual(numberOperations.powNumber(-2.2), 4.840000000000001); // probebly wrong
        });
    });
    describe("numberChecker", function () {
        it("test with numbers < 100", function () {
            assert.strictEqual(numberOperations.numberChecker(1.1), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(2), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(-3), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(0), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(-99), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(99), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(50), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('99'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('0'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker('50'), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(null), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker([]), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(''), 'The number is lower than 100!');
            assert.strictEqual(numberOperations.numberChecker(false), 'The number is lower than 100!');
        });
        it("test with numbers >= 100", function () {
            assert.strictEqual(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(1000), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(10000), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(10000000), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(999), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker('150'), 'The number is greater or equal to 100!');
            assert.strictEqual(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
        });
        it("test with invalid data", function () {
            assert.throw(() => numberOperations.numberChecker('abc'));
            assert.throw(() => numberOperations.numberChecker({}));
            assert.throw(() => numberOperations.numberChecker([1, 2, 3]));
            assert.throw(() => numberOperations.numberChecker(() => { }));
        });
    });

    describe("sumArrays", function () {
        it("test with numbers < 100", function () {
            assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 4, 5]), [ 4, 6, 5 ]);
            assert.deepEqual(numberOperations.sumArrays([1.1, 2.3], [3.7, 4.9, 5.8]), [ 4.800000000000001, 7.2, 5.8 ]);
            assert.deepEqual(numberOperations.sumArrays([0, 0], [0, 0, 0]), [ 0, 0, 0 ]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 8, 100], [3, 4, 5]), [4, 6, 13, 100]);
            assert.deepEqual(numberOperations.sumArrays([1.1, 2.3, 100.1, 200.1], [3.7, 4.9, 5.8]), [ 4.800000000000001, 7.2, 105.89999999999999, 200.1 ]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 100, 200], [3.7, 4.9, 5.8]), [ 4.7, 6.9, 105.8, 200 ]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 100, 200], [3, 5, 100, 400]), [ 4, 7, 200, 600 ]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], [3, 5, 100, 400]), [ 'a3', 'b5', 'c100', 400 ]);
            assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2, 3]), [ 2, 4, 6 ]);
       });
    });
});
