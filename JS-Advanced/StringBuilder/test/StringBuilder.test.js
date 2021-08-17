const StringBuilder = require('../StringBuilder');
const { assert } = require('chai');

describe('StringBuilder', () => {
    describe('Test ctor', () => {
        it('Test ctor with right data.', () => {
            let sb = new StringBuilder();
            assert.strictEqual(sb.toString(), '');
            sb = new StringBuilder('t');
            assert.strictEqual(sb.toString(), 't');
            sb = new StringBuilder('string');
            assert.strictEqual(sb.toString(), 'string');
            sb = new StringBuilder('string is string ');
            assert.strictEqual(sb.toString(), 'string is string ');
            sb = new StringBuilder('string is string 1234567890');
            assert.strictEqual(sb.toString(), 'string is string 1234567890');
            sb = new StringBuilder(undefined);
            assert.strictEqual(sb.toString(), '');
        })
        it('Test ctor with wrong data.', () => {
            assert.throw(() => { new StringBuilder(true) });
            assert.throw(() => { new StringBuilder(false) });
            assert.throw(() => { new StringBuilder([]) });
            assert.throw(() => { new StringBuilder({}) });
            assert.throw(() => { new StringBuilder(null) });
            assert.throw(() => { new StringBuilder(1) });
            assert.throw(() => { new StringBuilder(1.1) });
            assert.throw(() => { new StringBuilder(-1) });
            assert.throw(() => { new StringBuilder(-1.1) });
            assert.throw(() => { new StringBuilder(-0) });
        })
    })
    describe('Test append function', () => {
        it('Test append with right data.', () => {
            let sb = new StringBuilder('te');
            sb.append('st');
            assert.strictEqual(sb.toString(), 'test');
            sb.append('test');
            assert.strictEqual(sb.toString(), 'testtest');
            sb.append('come on');
            assert.strictEqual(sb.toString(), 'testtestcome on');
            sb.append(' stop already ');
            assert.strictEqual(sb.toString(), 'testtestcome on stop already ');
        })
        it('Test ctor with wrong data.', () => {
            let sb = new StringBuilder('str');
            assert.throw(() => { sb.append(true) });
            assert.throw(() => { sb.append(false) });
            assert.throw(() => { sb.append([]) });
            assert.throw(() => { sb.append({}) });
            assert.throw(() => { sb.append(null) });
            assert.throw(() => { sb.append(1) });
            assert.throw(() => { sb.append(1.1) });
            assert.throw(() => { sb.append(-1) });
            assert.throw(() => { sb.append(-1.1) });
            assert.throw(() => { sb.append(-0) });
        })
    })
    describe('Test append and remove function', () => {
        it('Test append with right data.', () => {
            let sb = new StringBuilder('te');
            sb.append('st');
            assert.strictEqual(sb.toString(), 'test');
            sb.append('test');
            assert.strictEqual(sb.toString(), 'testtest');
            sb.append('come on');
            assert.strictEqual(sb.toString(), 'testtestcome on');
            sb.append(' stop already ');
            assert.strictEqual(sb.toString(), 'testtestcome on stop already ');
            sb.remove(0, 1);
            assert.strictEqual(sb.toString(), 'esttestcome on stop already ');
            sb.remove(2, 2);
            assert.strictEqual(sb.toString(), 'esestcome on stop already ');
            sb.remove(0, 2000);
            assert.strictEqual(sb.toString(), '');
            sb.append('st');
            assert.strictEqual(sb.toString(), 'st');
            sb.remove(1, 1);
            assert.strictEqual(sb.toString(), 's');
        })
    })
    describe('Test prepend function', () => {
        it('Test prepend with right data.', () => {
            let sb = new StringBuilder('st');
            sb.prepend('te');
            assert.strictEqual(sb.toString(), 'test');
            sb.prepend('test');
            assert.strictEqual(sb.toString(), 'testtest');
            sb.prepend('come on');
            assert.strictEqual(sb.toString(), 'come ontesttest');
        })
        it('Test ctor with wrong data.', () => {
            let sb = new StringBuilder('str');
            assert.throw(() => { sb.prepend(true) });
            assert.throw(() => { sb.prepend(false) });
            assert.throw(() => { sb.prepend([]) });
            assert.throw(() => { sb.prepend({}) });
            assert.throw(() => { sb.prepend(null) });
            assert.throw(() => { sb.prepend(1) });
            assert.throw(() => { sb.prepend(1.1) });
            assert.throw(() => { sb.prepend(-1) });
            assert.throw(() => { sb.prepend(-1.1) });
            assert.throw(() => { sb.prepend(-0) });
        })
    })
    describe('Test prepend and remove function', () => {
        it('Test prepend with right data.', () => {
            let sb = new StringBuilder('st');
            sb.prepend('te');
            assert.strictEqual(sb.toString(), 'test');
            sb.prepend('test');
            assert.strictEqual(sb.toString(), 'testtest');
            sb.remove(0, 1);
            assert.strictEqual(sb.toString(), 'esttest');
            sb.remove(2, 2);
            assert.strictEqual(sb.toString(), 'esest');
            sb.remove(0, 2000);
            assert.strictEqual(sb.toString(), '');
            sb.prepend('st');
            assert.strictEqual(sb.toString(), 'st');
            sb.remove(1, 1);
            assert.strictEqual(sb.toString(), 's');
        })
    })
    describe('Test insertAt function', () => {
        it('Test insertAt with right data.', () => {
            let sb = new StringBuilder('te');
            sb.append('st');
            assert.strictEqual(sb.toString(), 'test');
            sb.insertAt('test', 5);
            assert.strictEqual(sb.toString(), 'testtest');
            sb.insertAt('test', 8);
            assert.strictEqual(sb.toString(), 'testtesttest');
            sb.insertAt('come on', 4);
            assert.strictEqual(sb.toString(), 'testcome ontesttest');
            sb.insertAt('test', 0);
            assert.strictEqual(sb.toString(), 'testtestcome ontesttest');
        })
        it('Test ctor with wrong data.', () => {
            let sb = new StringBuilder('str');
            assert.throw(() => { sb.insertAt(true) });
            assert.throw(() => { sb.insertAt(false) });
            assert.throw(() => { sb.insertAt([]) });
            assert.throw(() => { sb.insertAt({}) });
            assert.throw(() => { sb.insertAt(null) });
            assert.throw(() => { sb.insertAt(1) });
            assert.throw(() => { sb.insertAt(1.1) });
            assert.throw(() => { sb.insertAt(-1) });
            assert.throw(() => { sb.insertAt(-1.1) });
            assert.throw(() => { sb.insertAt(-0) });
        })
    })
    describe('Test insertAt and remove functions', () => {
        it('Test insertAt than remove and backwards.', () => {
            let sb = new StringBuilder('te');
            sb.append('st');
            assert.strictEqual(sb.toString(), 'test');
            sb.insertAt('test', 5);
            assert.strictEqual(sb.toString(), 'testtest');
            sb.insertAt('test', 8);
            assert.strictEqual(sb.toString(), 'testtesttest');
            sb.insertAt('come on', 4);
            assert.strictEqual(sb.toString(), 'testcome ontesttest');
            sb.insertAt('test', 0);
            assert.strictEqual(sb.toString(), 'testtestcome ontesttest');
            sb.remove(1, 1);
            assert.strictEqual(sb.toString(), 'tsttestcome ontesttest');
            sb.insertAt('t', 1);
            assert.strictEqual(sb.toString(), 'ttsttestcome ontesttest');

        })
    })
    describe('Test remove function', () => {
        it('Test remove with some data.', () => {
            let sb = new StringBuilder('te');
            sb.append('st');
            assert.strictEqual(sb.toString(), 'test');
            sb.remove(5, 1);
            assert.strictEqual(sb.toString(), 'test');
            sb.remove(0, 4);
            assert.strictEqual(sb.toString(), '');
            sb.insertAt('test', 0);
            assert.strictEqual(sb.toString(), 'test');
            sb.remove(-10, 4);
            assert.strictEqual(sb.toString(), '');
            sb.remove(10, 4);
            assert.strictEqual(sb.toString(), '');
        })
    })
})