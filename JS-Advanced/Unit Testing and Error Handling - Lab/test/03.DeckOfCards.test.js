const solve = require('../03.DeckOfCards');
const { assert } = require('chai');
const { it } = require('mocha');

describe('Test for Deck of Cards functionality', () => {
    it('Should return converted cards.', () => {
        let input = ['AS', '10D', 'KH', '2C'];
        let expected = 'A♠ 10♦ K♥ 2♣';
        let actual = solve(input);
        assert.equal(actual, expected);
    });

    it('Should return invalid card.', () => {
        let input = ['5S', '3D', 'QD', '1C'];
        let expected = 'Invalid card: 1C';
        let actual = solve(input);
        assert.equal(actual, expected);
    });
});