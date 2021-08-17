const isSymmetric = require('../05.CheckForSymmetry');
const { assert } = require('chai');

describe('Tests isSymmetric functionality.', () => {

    it('Test with right data.', () => {
        assert.isTrue(isSymmetric([1, 2, 3, 2, 1]));
    });

    it('Test with not symmetric data.', () => {
        assert.isFalse(isSymmetric([1, 2, 3, 3, 1]));
    });

    it('Test with wrong data.', () => {
        assert.isFalse(isSymmetric(true));
        assert.isFalse(isSymmetric(''));
        assert.isFalse(isSymmetric({}));
        assert.isFalse(isSymmetric('ggg'));
        assert.isFalse(isSymmetric(0));
        assert.isFalse(isSymmetric(121));
    });

    it('Test with wrong data.', () => {
        assert.isTrue(isSymmetric(['1', '2', '1']));
    });

    it('Test with wrong data.', () => {
        assert.isFalse(isSymmetric(['1', '2', '2']));
    });

    it('Test with wrong data.', () => {
        assert.isFalse(isSymmetric(['1', '2', 1, [], {}]));
    });

    it('Test with wrong data.', () => {
        assert.isTrue(isSymmetric(['55', 1, '55']));
    });

    it('Test with wrong data.', () => {
        assert.isFalse(isSymmetric(['55', 55]));
    });
});