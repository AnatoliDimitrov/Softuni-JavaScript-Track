const mathEnforcer = require('../04.MathEnforcer');
const { assert } = require('chai');

describe('Test mathEnforcer function', () => {
    describe('Test addFive', () => {
        it('Test with right data.', () => {
            assert.strictEqual(mathEnforcer.addFive(5), 10);
            assert.strictEqual(mathEnforcer.addFive(0), 5);
            assert.strictEqual(mathEnforcer.addFive(-5), 0);
            assert.closeTo(mathEnforcer.addFive(-1.1), 3.9, 0.01);
        });
        it('Test with wrong data.', () => {
            assert.strictEqual(mathEnforcer.addFive(undefined), undefined);
            assert.strictEqual(mathEnforcer.addFive(null), undefined);
            assert.strictEqual(mathEnforcer.addFive(true), undefined);
            assert.strictEqual(mathEnforcer.addFive(''), undefined);
            assert.strictEqual(mathEnforcer.addFive([]), undefined);
            assert.strictEqual(mathEnforcer.addFive({}), undefined);
        });
    });

    describe('Test subtractTen', () => {
        it('Test with right data.', () => {
            assert.strictEqual(mathEnforcer.subtractTen(5), -5);
            assert.strictEqual(mathEnforcer.subtractTen(0), -10);
            assert.strictEqual(mathEnforcer.subtractTen(15), 5);
            assert.strictEqual(mathEnforcer.subtractTen(-5), -15);
            assert.closeTo(mathEnforcer.subtractTen(-1.1), -11.1, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(11.1), 1.1, 0.01);
        });
        it('Test with wrong data.', () => {
            assert.strictEqual(mathEnforcer.subtractTen(undefined), undefined);
            assert.strictEqual(mathEnforcer.subtractTen(null), undefined);
            assert.strictEqual(mathEnforcer.subtractTen(true), undefined);
            assert.strictEqual(mathEnforcer.subtractTen(''), undefined);
            assert.strictEqual(mathEnforcer.subtractTen([]), undefined);
            assert.strictEqual(mathEnforcer.subtractTen({}), undefined);
        });
    });

    describe('Test sum', () => {
        it('Test with right data.', () => {
            assert.strictEqual(mathEnforcer.sum(5, -5), 0);
            assert.strictEqual(mathEnforcer.sum(0, 0), 0);
            assert.strictEqual(mathEnforcer.sum(15, 15), 30);
            assert.strictEqual(mathEnforcer.sum(-5, -5), -10);
            assert.closeTo(mathEnforcer.sum(-1.1, 2.2), 1.1, 0.01);
            assert.closeTo(mathEnforcer.sum(11.1, 2.2), 13.3, 0.01);
        });
        it('Test with wrong first param data.', () => {
            assert.strictEqual(mathEnforcer.sum(undefined, 5), undefined);
            assert.strictEqual(mathEnforcer.sum(null, 4), undefined);
            assert.strictEqual(mathEnforcer.sum(true, 3), undefined);
            assert.strictEqual(mathEnforcer.sum('', 2), undefined);
            assert.strictEqual(mathEnforcer.sum([], 1), undefined);
            assert.strictEqual(mathEnforcer.sum({}, 0), undefined);
        });
        it('Test with wrong first param data.', () => {
            assert.strictEqual(mathEnforcer.sum(5, undefined), undefined);
            assert.strictEqual(mathEnforcer.sum(4, null), undefined);
            assert.strictEqual(mathEnforcer.sum(3, true), undefined);
            assert.strictEqual(mathEnforcer.sum(2, ''), undefined);
            assert.strictEqual(mathEnforcer.sum(1, []), undefined);
            assert.strictEqual(mathEnforcer.sum(0, {}), undefined);
        });
    });
});