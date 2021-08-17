const StringBuilder = require('../13.StringBuilder');
const { assert } = require('chai');

describe('StringBuilder', () => {
    describe('Test constructor.', () => {
        let sb = new StringBuilder();
        assert.strictEqual(sb.toString(), '');
    } )
})