const testNumbers = require('../problem');
const { assert } = require('chai');

describe("testNumbers", function() {
    describe("sumNumbers", function() {
        it("sumNumbers WITH VALID NUMBERS", function () {
            let sn = testNumbers.sumNumbers;
            assert.strictEqual(sn(1, 5), '6.00');
            assert.strictEqual(sn(100, 500), '600.00');
            assert.strictEqual(sn(-1, 5), '4.00');
            assert.strictEqual(sn(1.1, 5.5), '6.60');
            assert.strictEqual(sn(1.1, 5), '6.10');
            assert.strictEqual(sn(1, 5.2), '6.20');
            assert.strictEqual(sn(-15.3, -5.1), '-20.40');
            assert.strictEqual(sn(NaN, 1), 'NaN');
            assert.strictEqual(sn(1, NaN), 'NaN');
        });
        it("sumNumbers WITH invalid NUMBERS", function () {
            let sn = testNumbers.sumNumbers;
            assert.isUndefined(sn(null, 5));
            assert.isUndefined(sn([], 5));
            assert.isUndefined(sn({}, 5));
            assert.isUndefined(sn(true, 5));
            assert.isUndefined(sn(false, 5));
            assert.isUndefined(sn(undefined, 5));
            assert.isUndefined(sn(1, null));
            assert.isUndefined(sn(1, []));
            assert.isUndefined(sn(1, {}));
            assert.isUndefined(sn(1, true));
            assert.isUndefined(sn(1, false));
            assert.isUndefined(sn(1, undefined));
        });
    });
    describe("numberChecker", function() {
        it("numberChecker WITH VALID data", function () {
            let sn = testNumbers.numberChecker;
            assert.strictEqual(sn(1), 'The number is odd!');
            assert.strictEqual(sn(15), 'The number is odd!');
            assert.strictEqual(sn(110001), 'The number is odd!');
            assert.strictEqual(sn('110001'), 'The number is odd!');
            assert.strictEqual(sn('27'), 'The number is odd!');
            assert.strictEqual(sn(true), 'The number is odd!');
            assert.strictEqual(sn(2), 'The number is even!');
            assert.strictEqual(sn(0), 'The number is even!');
            assert.strictEqual(sn(''), 'The number is even!');
            assert.strictEqual(sn([]), 'The number is even!');
            assert.strictEqual(sn(1000), 'The number is even!');
            assert.strictEqual(sn('100'), 'The number is even!');
            assert.strictEqual(sn('0'), 'The number is even!');
            assert.strictEqual(sn('2'), 'The number is even!');
            assert.strictEqual(sn(false), 'The number is even!');

        });
        it("numberChecker WITH invalid data", function () {
            let sn = testNumbers.numberChecker;
            assert.throw(() => { sn({})}, Error, 'The input is not a number!');
            assert.throw(() => { sn('kjhadfb')}, Error, 'The input is not a number!');
            assert.throw(() => { sn('abc56')}, Error, 'The input is not a number!');
            assert.throw(() => { sn(function(){})}, Error, 'The input is not a number!');
        });
    });
    describe("averageSumArray", function() {
        it("averageSumArray WITH VALID data", function () {
            let sn = testNumbers.averageSumArray;
            assert.strictEqual(sn([1, 2, 3]), 2);
            assert.strictEqual(sn([1, 2, 3, 4]), 2.5);
            assert.strictEqual(sn([-1, -2, -3]), -2);
            assert.strictEqual(sn([-1, -2, -3, -4]), -2.5);
            assert.strictEqual(sn([1.2, 2.2, 3.3]), 2.2333333333333334);
            assert.strictEqual(sn([-1.2, -2.2, -3.3]), -2.2333333333333334);
            assert.strictEqual(sn([1.2, 2.2, 3]), 2.1333333333333333);
            assert.strictEqual(sn([1.5, 2.5, 3.5, 4.5]), 3);

        });
     });
});
