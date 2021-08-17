const solve = require('../02.PlayingCards');
const { assert } = require('chai');

describe('Test Playing cards function', () => {
    it('Should work with right data.', () => {
        assert.equal(solve('2', 'D'), '2\u2666');
    });
    it('Should throw with number.', () => {
        assert.throws(function () { solve(2, 'D') });
    });
});