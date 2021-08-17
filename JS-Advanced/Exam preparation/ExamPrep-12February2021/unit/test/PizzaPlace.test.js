const pizzUni = require('../PizzaPlace');
const { assert } = require('chai');

describe("Tests pizzUni", function () {
    describe("Test for makeAnOrder", function () {
        it("Test for order only pizza", function () {
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'pizza' }), `You just ordered pizza`);
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: '1' }), `You just ordered 1`);
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: '1.1' }), `You just ordered 1.1`);
        });
        it("Test for order only pizza and drink", function () {
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'pizza', orderedDrink: 'cola' }), `You just ordered pizza and cola.`);
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'pizza', orderedDrink: 'pepsi' }), `You just ordered pizza and pepsi.`);
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'pizza', orderedDrink: 'sprite and cola' }), `You just ordered pizza and sprite and cola.`);
            assert.equal(pizzUni.makeAnOrder({ orderedPizza: 'pizza', orderedDrink: '' }), `You just ordered pizza`);
        });
        it("Test for order only pizza", function () {
            assert.throw(() => { pizzUni.makeAnOrder({ orderedPizza: '' }) });
            assert.throw(() => { pizzUni.makeAnOrder({}) });
            assert.throw(() => { pizzUni.makeAnOrder(null) });
            assert.throw(() => { pizzUni.makeAnOrder(undefined) });
            assert.throw(() => { pizzUni.makeAnOrder({ undefined }) });
            assert.throw(() => { pizzUni.makeAnOrder({ orderedPizza: undefined }) });
            assert.throw(() => { pizzUni.makeAnOrder({ orderedPizza: null }) });
            assert.throw(() => { pizzUni.makeAnOrder({ orderedPizza: 0 }) });
        });
    });
    describe("Test for getRemainingWork", function () {
        it("Test for ready", function () {
            assert.equal(pizzUni.getRemainingWork([{ pizzaName: '1pizza', status: 'ready' }, { pizzaName: '1pizza', status: 'ready' }, { pizzaName: '1pizza', status: 'ready' }]), `All orders are complete!`);
            assert.equal(pizzUni.getRemainingWork([]), `All orders are complete!`);
            assert.equal(pizzUni.getRemainingWork([{ pizzaName: '1pizza', status: 'ready' }]), `All orders are complete!`);
        });
        it("Test for order only pizza and drink", function () {
            assert.equal(pizzUni.getRemainingWork([{ pizzaName: '1pizza', status: 'preparing' }]), `The following pizzas are still preparing: 1pizza.`);
            assert.equal(pizzUni.getRemainingWork([{ pizzaName: '1pizza', status: 'preparing' }, { pizzaName: '2pizza', status: 'ready' }]), `The following pizzas are still preparing: 1pizza.`);
            assert.equal(pizzUni.getRemainingWork([{ pizzaName: '1pizza', status: 'preparing' },
                { pizzaName: '2pizza', status: 'preparing' },
                { pizzaName: '3pizza', status: 'ready' }
            ]), `The following pizzas are still preparing: 1pizza, 2pizza.`);
            assert.equal(pizzUni.getRemainingWork([{ pizzaName: '1pizza', status: 'preparing' },
            { pizzaName: '2pizza', status: 'preparing' },
                { pizzaName: '3pizza', status: 'ready' },
                { pizzaName: '4pizza', status: 'preparing' }
        ]), `The following pizzas are still preparing: 1pizza, 2pizza, 4pizza.`);
        });
    });
    describe("Test for orderType", function () {
        it("Test for carryOut", function () {
            assert.equal(pizzUni.orderType(100, 'Carry Out'), 100 - 100 * 0.1);
            assert.equal(pizzUni.orderType(0, 'Carry Out'), 0 - 0 * 0.1);
            assert.equal(pizzUni.orderType(10001.1, 'Carry Out'), 10001.1 - 10001.1 * 0.1);
            assert.equal(pizzUni.orderType(2.01, 'Carry Out'), 2.01 - 2.01 * 0.1);
            assert.equal(pizzUni.orderType(3, 'Carry Out'), 3 - 3 * 0.1);
        });
        it("Test for delivery", function () {
            assert.equal(pizzUni.orderType(100, 'Delivery'), 100);
            assert.equal(pizzUni.orderType(0, 'Delivery'), 0);
            assert.equal(pizzUni.orderType(10001.1, 'Delivery'), 10001.1);
            assert.equal(pizzUni.orderType(2.01, 'Delivery'), 2.01);
            assert.equal(pizzUni.orderType(3, 'Delivery'), 3);
        });
    });
});
