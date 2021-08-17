const dealership = require('../dealership');
const { assert } = require('chai')

describe("Tests for dealership", function () {
    describe("Tests for newCarCost funtion", function () {
        it("Test with existing property for discount", function () {
            let ds = dealership;

            assert.strictEqual(ds.newCarCost('Audi A4 B8', 30000), 15000);
            assert.strictEqual(ds.newCarCost('Audi A4 B8', 300000), 285000);
            assert.strictEqual(ds.newCarCost('Audi A6 4K', 20000), 0);
            assert.strictEqual(ds.newCarCost('Audi A6 4K', 300000), 280000);
            assert.strictEqual(ds.newCarCost('Audi A8 D5', 100000), 75000);
            assert.strictEqual(ds.newCarCost('Audi A8 D5', 26000), 1000);
            assert.strictEqual(ds.newCarCost('Audi TT 8J', 26000), 12000);
            assert.strictEqual(ds.newCarCost('Audi TT 8J', 300000), 286000);
        });
        it("Test with non existing property for discount", function () {
            let ds = dealership;

            assert.strictEqual(ds.newCarCost('Audi 8', 30000), 30000);
            assert.strictEqual(ds.newCarCost('Audi ', 300000), 300000);
            assert.strictEqual(ds.newCarCost('vw', 0), 0);
            assert.strictEqual(ds.newCarCost('seat', 1000), 1000);
        });
    });
    describe("Tests for carEquipment funtion", function () {
        it("Test for the right data returned.", function () {
            let ds = dealership;

            assert.deepEqual(ds.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'neshto'], [0, 3, 4]), ['heated seats', 'navigation', 'neshto']);
            assert.deepEqual(ds.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'neshto'], []), []);
            assert.deepEqual(ds.carEquipment([], [0, 3, 4]), [undefined, undefined, undefined]);
            assert.deepEqual(ds.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'neshto'], [0, 1, 2, 3, 4]), ['heated seats', 'sliding roof', 'sport rims', 'navigation', 'neshto']);
            assert.deepEqual(ds.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'neshto'], [0]), ['heated seats']);
            assert.deepEqual(ds.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation', 'neshto'], [4]), ['neshto']);

        });
    });

    describe("Tests for euroCategory funtion", function () {
        it("Test with low category", function () {
            let ds = dealership;

            assert.strictEqual(ds.euroCategory(0), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory(1), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory(2), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory('0'), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory('1'), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory('2'), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory('3'), 'Your euro category is low, so there is no discount from the final price!');
            assert.strictEqual(ds.euroCategory(''), 'Your euro category is low, so there is no discount from the final price!');
        });
        it("Test with high category", function () {
            let ds = dealership;

            assert.strictEqual(ds.euroCategory(4), 'We have added 5% discount to the final price: 14250.');
            assert.strictEqual(ds.euroCategory(5), 'We have added 5% discount to the final price: 14250.');
            assert.strictEqual(ds.euroCategory(6), 'We have added 5% discount to the final price: 14250.');
            assert.strictEqual(ds.euroCategory(7), 'We have added 5% discount to the final price: 14250.');
        });
    });
});
