const subSum = require('../01.SubSum');
const { assert } = require('chai');

describe('Test SubSum function', () => {
    it('It should work with right data.', () => {
        let input = [1, 2, 3, 4, 5];
        let expected = 9;
        let actual = subSum(input, 1, 3);
        assert.equal(actual, expected);
    });

    it('It should return NaN with no array.', () => {
        let input = '[1, 2, 3, 4, 5]';
        let actual = subSum(input, 1, 3);
        assert.isTrue(isNaN(actual));
    });

    it('It should work with start < 0.', () => {
        let input = [1, 2, 3, 4, 5];
        let expected = 10;
        let actual = subSum(input, -100, 3);
        assert.equal(actual, expected);
    });

    it('It should work with end > length.', () => {
        let input = [1, 2, 3, 4, 5];
        let expected = 15;
        let actual = subSum(input, 0, 300);
        assert.equal(actual, expected);
    });

    it('It should work with string in the array.', () => {
        let input = [1, 'something', 3, 4, 5];
        let actual = subSum(input, 0, 300);
        assert.isTrue(isNaN(actual));
    });

    it('It should work with right data.', () => {
        let expected = 150;
        let actual = subSum([10, 20, 30, 40, 50, 60], 3, 300);
        assert.equal(actual, expected);
    });
});