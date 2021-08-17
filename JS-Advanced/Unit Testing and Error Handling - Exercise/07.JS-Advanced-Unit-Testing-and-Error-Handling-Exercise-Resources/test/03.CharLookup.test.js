const lookupChar = require('../03.CharLookup');
const { assert } = require('chai');

describe('Test lookupChar function', () => {
    it('Test with right data.', () => {
        assert.strictEqual(lookupChar('string', 0), 's');
        assert.strictEqual(lookupChar('string', 5), 'g');
    });
    it('Test without string.', () => {
        assert.strictEqual(lookupChar([], 0), undefined);
        assert.strictEqual(lookupChar({}, 0), undefined);
        assert.strictEqual(lookupChar(null, 0), undefined);
        assert.strictEqual(lookupChar(3, 0), undefined);
        assert.strictEqual(lookupChar(3.3, 0), undefined);
        assert.strictEqual(lookupChar(false, 0), undefined);
    });
    it('Test without number.', () => {
        assert.strictEqual(lookupChar('string', '1'), undefined);
        assert.strictEqual(lookupChar('string', null), undefined);
        assert.strictEqual(lookupChar('string',[]), undefined);
        assert.strictEqual(lookupChar('string', {}), undefined);
        assert.strictEqual(lookupChar('string', undefined), undefined);
        assert.strictEqual(lookupChar('string', 3.3), undefined);
    });
    it('Test with invalid index.', () => {
        assert.strictEqual(lookupChar('string', -1), "Incorrect index");
        assert.strictEqual(lookupChar('string', 6), "Incorrect index");
    });
});