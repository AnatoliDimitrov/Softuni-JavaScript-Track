const ChristmasMovies = require('../movies');
const { expect, assert } = require('chai');

describe("Tests ChristmasMovies", function () {
    describe("Test constructor", function () {
        it("Test constructor returns right object", function () {
            let cm = new ChristmasMovies();
            assert.deepEqual(cm.movieCollection, []);
            assert.deepEqual(cm.watched, {});
            assert.deepEqual(cm.actors, []);
            assert.strictEqual(cm instanceof ChristmasMovies, true);
        });
    });
    describe("Test buyMovie", function () {
        it("Test buyMovie returns right MESSAGE", function () {
            let cm = new ChristmasMovies();
            assert.strictEqual(cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio']), `You just got Titanic to your collection in which Kate Winslet, Leo Dicaprio are taking part!`);
            assert.strictEqual(cm.buyMovie('Departed', ['Leo Dicaprio']), `You just got Departed to your collection in which Leo Dicaprio are taking part!`);
            assert.strictEqual(cm.buyMovie('Something', ['Kate Winslet']), `You just got Something to your collection in which Kate Winslet are taking part!`);
        });
        it("Test buyMovie returns unique actors", function () {
            let cm = new ChristmasMovies();
            assert.strictEqual(cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio']), `You just got Titanic to your collection in which Kate Winslet, Leo Dicaprio are taking part!`);
            assert.strictEqual(cm.buyMovie('Departed', ['Leo Dicaprio', 'Leo Dicaprio']), `You just got Departed to your collection in which Leo Dicaprio are taking part!`);
            assert.strictEqual(cm.buyMovie('Something', ['Kate Winslet', 'Kate Winslet']), `You just got Something to your collection in which Kate Winslet are taking part!`);
        });
        it("Test buyMovie returns unique actors", function () {
            let cm = new ChristmasMovies();
            cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio']);
            assert.throw(() => (cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio'])), `You already own Titanic in your collection!`);
            cm.buyMovie('Departed', ['Leo Dicaprio', 'Leo Dicaprio']);
            assert.throw(() => (cm.buyMovie('Departed', ['Leo Dicaprio', 'Leo Dicaprio'])), `You already own Departed in your collection!`);
        });
    });
    describe("Test discardMovie", function () {
        it("Test discardMovie throw for non existng movie", function () {
            let cm = new ChristmasMovies();
            assert.throw(() => { cm.discardMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio']), `Titanic is not at your collection!` });
            assert.throw(() => { cm.discardMovie('Departed', ['Leo Dicaprio']), `Departed is not at your collection!` });
        });
        it("Test discardMovie throw for non watched movie", function () {
            let cm = new ChristmasMovies();
            cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio']);
            cm.buyMovie('Titan', ['Nekoi si']);
            assert.throw(() => { cm.discardMovie('Titanic'), `Titanic is not watched!` });
            assert.throw(() => { cm.discardMovie('Titan'), `Titan is not watched!` });
        });
        it("Test discardMovie throw for non existng movie", function () {
            let cm = new ChristmasMovies();
            cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio']);
            cm.buyMovie('Titan', ['Nekoi si']);
            cm.watchMovie('Titanic');
            cm.watchMovie('Titan');
            assert.strictEqual(cm.discardMovie('Titanic'), `You just threw away Titanic!`);
            assert.strictEqual(cm.discardMovie('Titan'), `You just threw away Titan!`);
        });
    });
     describe("Test watchMovie", function () {
        it("Test watchMovie increments", function () {
            let cm = new ChristmasMovies();
            cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio']);
            cm.buyMovie('Titan', ['Nekoi si']);
            cm.watchMovie('Titanic');
            cm.watchMovie('Titan');
            cm.watchMovie('Titan');
            assert.strictEqual(cm.watched['Titan'], 2);
            assert.strictEqual(cm.watched['Titan'], 2);
            cm.watchMovie('Titan');
            assert.strictEqual(cm.watched['Titan'], 3);
            cm.watchMovie('Titanic');
            assert.strictEqual(cm.watched['Titanic'], 2);
        });
        it("Test watchMovie throw", function () {
            let cm = new ChristmasMovies();
            assert.throw(() => { cm.watchMovie('IT'); },Error, 'No such movie in your collection!');
        });
    });
    describe("Test favouriteMovie", function () {
        it("Test favouriteMovie increments", function () {
            let cm = new ChristmasMovies();
            cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio']);
            cm.buyMovie('Titan', ['Nekoi si']);
            cm.watchMovie('Titanic');
            cm.watchMovie('Titan');
            cm.watchMovie('Titan');
            assert.strictEqual(cm.watched['Titanic'], 1);
            assert.strictEqual(cm.watched['Titan'], 2);
            cm.watchMovie('Titan');
            assert.strictEqual(cm.watched['Titan'], 3);
            assert.strictEqual(cm.favouriteMovie(), 'Your favourite movie is Titan and you have watched it 3 times!');
            cm.watchMovie('Titanic');
            cm.watchMovie('Titanic');
            cm.watchMovie('Titanic');
            assert.strictEqual(cm.favouriteMovie(), 'Your favourite movie is Titanic and you have watched it 4 times!');
        });
        it("Test favouriteMovie throw", function () {
            let cm = new ChristmasMovies();
            assert.throw(() => { cm.favouriteMovie('Tit'); });
            assert.throw(() => { cm.favouriteMovie('IT'); });
        });
    });
    describe("Test mostStarredActor", function () {
        it("Test mostStarredActor works", function () {
            let cm = new ChristmasMovies();
            cm.buyMovie('Titanic', ['Kate Winslet', 'Leo Dicaprio', 'Leo Dicaprio']);
            cm.buyMovie('Titan', ['Nekoi si']);
            cm.buyMovie('Departed', ['Leo Dicaprio'])
            assert.strictEqual(cm.mostStarredActor(), `The most starred actor is Leo Dicaprio and starred in 2 movies!`);
            cm.buyMovie('Titanic2', ['Kate Winslet']);
            cm.buyMovie('Titanic3', ['Kate Winslet']);
            assert.strictEqual(cm.mostStarredActor(), `The most starred actor is Kate Winslet and starred in 3 movies!`);
        });
        it("Test mostStarredActor throw", function () {
            let cm = new ChristmasMovies();
            assert.throw(() => { cm.mostStarredActor('Tit'); });
            assert.throw(() => { cm.mostStarredActor('IT'); });
        });
    });
});
