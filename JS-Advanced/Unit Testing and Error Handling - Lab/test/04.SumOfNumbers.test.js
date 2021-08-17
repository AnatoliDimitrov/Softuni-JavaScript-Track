const sum = require('../04.SumOfNumbers');
const { assert } = require('chai');

describe('Testung sum function', () => {
    it('Test sum to return the right data.', () => {
        let input = [1, 2, 3];
        let expected = 6;
        let actual = sum(input);
        assert.equal(actual, expected);
    });

    it('Test sum to return the right data with string element.', () => {
        let input = [1, '2', 3];
        let expected = 6;
        let actual = sum(input);
        assert.equal(actual, expected);
    });

    it('Shuold sum throw with wrong data.', () => {
        assert.throws(() => { sum(3) });
    });

    it('Shuold sum throw with wrong data.', () => {
        assert.throws(() => { sum({}) });
    });

    it('Shuold sum throw with wrong data.', () => {
        assert.throws(() => { sum(true) });
    });

    it('Shuold return 0 with empty string.', () => {
        let actual = sum('');
        let expected = 0;
        assert.equal(actual, expected);
    });

    it('Shuold return 0 with empty string.', () => {
        let actual = sum('abc');
        assert.isTrue(isNaN(actual));
    });
});