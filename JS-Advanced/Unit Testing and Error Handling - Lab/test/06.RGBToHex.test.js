const rgbToHexColor = require('../06.RGBToHex');
const { assert } = require('chai');

describe('Test RGBToHex rgbToHexColortionality.', () => {
    it('Test with right data', () => {
        let expected = '#969696';
        let actual = rgbToHexColor(150, 150, 150);
        assert.equal(actual, expected);
    });

    it('Test with right data', () => {
        let expected = '#000000';
        let actual = rgbToHexColor(0, 0, 0);
        assert.equal(actual, expected);
    });

    it('Test with right data', () => {
        let expected = '#FFFFFF';
        let actual = rgbToHexColor(255, 255, 255);
        assert.equal(actual, expected);
    });

    it('Test with wrong data', () => {
        let expected = undefined;
        let actual = rgbToHexColor('150', 150, 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong data', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, true, 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong data', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, '100', 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong data', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, 150, '150');
        assert.equal(actual, expected);
    });

    it('Test with wrong data', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, 150, []);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(-1, 150, 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(256, 150, 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, -150, 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, 450, 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, 150, -150);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, 150, 350);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150, 150);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor(150);
        assert.equal(actual, expected);
    });

    it('Test with wrong numbers.', () => {
        let expected = undefined;
        let actual = rgbToHexColor();
        assert.equal(actual, expected);
    });
});