const createCalculator = require('../07.AddSubtract');
const { assert, expect } = require('chai');

describe('Test calculator', () => {
    it('Test with 1 number', () => {
        let calc = createCalculator();
        calc.add(1);
        let expected = 1;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with 1 string', () => {
        let calc = createCalculator();
        calc.add('1');
        let expected = 1;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with 1 string', () => {
        let calc = createCalculator();
        calc.add('1');
        calc.add(1);
        let expected = 2;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with 1 string', () => {
        let calc = createCalculator();
        calc.subtract('-1');
        let expected = 1;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with 2 strings', () => {
        let calc = createCalculator();
        calc.add('1');
        calc.subtract('1');
        let expected = 0;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with array', () => {
        let calc = createCalculator();
        calc.subtract([]);
        let expected = 0;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with wrong string', () => {
        let calc = createCalculator();
        calc.subtract('abc');
        calc.get();
        assert.isTrue(isNaN(calc.get()));
    });

    it('Test with object', () => {
        let calc = createCalculator();
        calc.subtract({});
        calc.get();
        assert.isTrue(isNaN(calc.get()));
    });

    it('Test with 2 numbers', () => {
        let calc = createCalculator();
        calc.add(1);
        calc.add(2);
        let expected = 3;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with 3 numbers', () => {
        let calc = createCalculator();
        calc.add(1);
        calc.add(2);
        calc.subtract(-2);
        let expected = 5;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with 2 numbers', () => {
        let calc = createCalculator();
        calc.add(1);
        calc.subtract(2);
        let expected = -1;
        let actual = calc.get();
        assert.equal(actual, expected);
    });

    it('Test with 2 numbers', () => {
        let calc = createCalculator();
        calc.subtract(1);
        calc.add(2);
        let expected = 1;
        let actual = calc.get();
        assert.equal(actual, expected);
    });
});