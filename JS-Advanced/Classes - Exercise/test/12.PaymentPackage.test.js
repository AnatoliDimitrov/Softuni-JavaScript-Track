const PaymentPackage = require('../12.PaymentPackage');
const { assert } = require('chai');

describe('PaymentPackage', () => {
    describe("Test constructor", function() {
        it("Test for wright data is returned.", function() {
            let pack = new PaymentPackage('name', 1)
            assert.strictEqual(pack.name, 'name');
            assert.strictEqual(pack.value, 1);
            assert.strictEqual(pack.VAT, 20);
            assert.strictEqual(pack.active, true);
        });
    });
    describe("Test name getter and setter.", function() {
        it("Test for wright data is returned from getter.", function() {
            let pack = new PaymentPackage('name', 1)
            assert.strictEqual(pack.name, 'name');
        });
        it("Test for wright data is returned from setter.", function() {
            let pack = new PaymentPackage('name', 1)
            pack.name = 'pesho';
            assert.strictEqual(pack.name, 'pesho');
        });
        it("Test setter to throw errors with wrong data.", function() {
            let pack = new PaymentPackage('name', 1)
            assert.throw(() => { pack.name = '' });
            assert.throw(() => { pack.name = -1 });
            assert.throw(() => { pack.name = 1 });
            assert.throw(() => { pack.name = 1.1 });
            assert.throw(() => { pack.name = -1.1 });
            assert.throw(() => { pack.name = null });
            assert.throw(() => { pack.name = true });
            assert.throw(() => { pack.name = undefined });
            assert.throw(() => { pack.name = [] });
            assert.throw(() => { pack.name = {} });
        });
    });
    describe("Test value getter and setter.", function() {
        it("Test for wright data is returned from getter.", function() {
            let pack = new PaymentPackage('value', 1)
            assert.strictEqual(pack.value, 1);
        });
        it("Test for wright data is returned from setter.", function() {
            let pack = new PaymentPackage('value', 1)
            pack.value = 5;
            assert.strictEqual(pack.value, 5);
            pack.value = 0;
            assert.strictEqual(pack.value, 0);
            pack.value = 100000000;
            assert.strictEqual(pack.value, 100000000);
            pack.value = NaN;
            assert.equal(isNaN(pack.value), true);
        });
        it("Test setter to throw errors with wrong data.", function() {
            let pack = new PaymentPackage('value', 1);
            assert.throw(() => { pack.value = '' });
            assert.throw(() => { pack.value = '55' });
            assert.throw(() => { pack.value = 'abc' });
            assert.throw(() => { pack.value = -1 });
            assert.throw(() => { pack.value = -1.1 });
            assert.throw(() => { pack.value = null });
            assert.throw(() => { pack.value = true });
            assert.throw(() => { pack.value = undefined });
            assert.throw(() => { pack.value = [] });
            assert.throw(() => { pack.value = {} });
        });
    });
    describe("Test VAT getter and setter.", function() {
        it("Test for wright data is returned from getter.", function() {
            let pack = new PaymentPackage('VAT', 1)
            assert.strictEqual(pack.VAT, 20);
        });
        it("Test for wright data is returned from setter.", function() {
            let pack = new PaymentPackage('VAT', 1)
            pack.VAT = 5;
            assert.strictEqual(pack.VAT, 5);
            pack.VAT = 0;
            assert.strictEqual(pack.VAT, 0);
            pack.VAT = 100000000;
            assert.strictEqual(pack.VAT, 100000000);
            pack.VAT = NaN;
            assert.equal(isNaN(pack.VAT), true);
        });
        it("Test setter to throw errors with wrong data.", function() {
            let pack = new PaymentPackage('VAT', 1);
            assert.throw(() => { pack.VAT = '' });
            assert.throw(() => { pack.VAT = '55' });
            assert.throw(() => { pack.VAT = 'abc' });
            assert.throw(() => { pack.VAT = -1 });
            assert.throw(() => { pack.VAT = -1.1 });
            assert.throw(() => { pack.VAT = null });
            assert.throw(() => { pack.VAT = true });
            assert.throw(() => { pack.VAT = undefined });
            assert.throw(() => { pack.VAT = [] });
            assert.throw(() => { pack.VAT = {} });
        });
    });
    describe("Test active getter and setter.", function() {
        it("Test for wright data is returned from getter.", function() {
            let pack = new PaymentPackage('active', 1)
            assert.strictEqual(pack.active, true);
        });
        it("Test for wright data is returned from setter.", function() {
            let pack = new PaymentPackage('active', 1)
            assert.isTrue(pack.active);
            pack.active = false;
            assert.isFalse(pack.active);
            pack.active = true;
            assert.isTrue(pack.active);
            pack.active = false;
            assert.isFalse(pack.active);
            pack.active = true;
            assert.isTrue(pack.active);
        });
        it("Test setter to throw errors with wrong data.", function() {
            let pack = new PaymentPackage('active', 1);
            assert.throw(() => { pack.active = '' });
            assert.throw(() => { pack.active = '55' });
            assert.throw(() => { pack.active = 'abc' });
            assert.throw(() => { pack.active = -1 });
            assert.throw(() => { pack.active = -1.1 });
            assert.throw(() => { pack.active = null });
            assert.throw(() => { pack.active = undefined });
            assert.throw(() => { pack.active = [] });
            assert.throw(() => { pack.active = {} });
        });
    });

    describe("Test toString() getter and setter.", function() {
        it("Test for wright data is returned from getter.", function() {
            let pack = new PaymentPackage('HR Services', 1500)
            assert.strictEqual(pack.toString(), `Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
        });
        it("Test for wright data is returned from getter.", function() {
            let pack = new PaymentPackage('HR Services', 1500)
            pack.active = false;
            assert.strictEqual(pack.toString(), `Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800`);
        });assert.throw(() => { pack.toString() = {} });
    });
})