const isOddOrEven = require('../02.EvenOrOdd');
const { assert } = require('chai');

describe('Test EvenOrOdd function', () => {
    it('Test for even for empty string', () => {
        assert.strictEqual(isOddOrEven(''), 'even');
    });
    it('Test for even string', () => {
        assert.strictEqual(isOddOrEven('even'), 'even');
    });
    it('Test for odd string', () => {
        assert.strictEqual(isOddOrEven('odd'), 'odd');
    });
    it('Test for not string', () => {
        assert.strictEqual(isOddOrEven(null), undefined);
        assert.strictEqual(isOddOrEven([]), undefined);
        assert.strictEqual(isOddOrEven({}), undefined);
        assert.strictEqual(isOddOrEven(true), undefined);
        assert.strictEqual(isOddOrEven(undefined), undefined);
    });
});