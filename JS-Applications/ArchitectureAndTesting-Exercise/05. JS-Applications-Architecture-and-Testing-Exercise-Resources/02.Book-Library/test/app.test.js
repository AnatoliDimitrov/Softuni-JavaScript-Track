const { chromium } = require('playwright-chromium');
const { assert } = require('chai');

function fakeResponse(data) {
    return {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
}

let fakeMessages = {
    '1_id': { title: 'Test Harry Potter', author: 'J.K.Rowling' },
    '2_id': { title: 'Test C# Fundamentals', author: 'Svetlin Nakov' }
}

let browser, page;

///////////////////////////////////// IMPORTANT ///////////////////////////////////////////////


//////////////////
/* NEED TO KNOW */
//////////////////

/* When cheking the tests:
You need to start live server with address: http://127.0.0.1:5500/index.html
No need to start the JSONSTORE server.
All needed data is mocked correctly.*/

////////////////////////////////////////////////////////////////////////////////////////////

describe('E2E tests', function () {
    this.timeout(4000);

    before(async () => { browser = await chromium.launch(); });

    after(async () => { await browser.close(); });

    beforeEach(async () => { page = await browser.newPage(); });

    afterEach(async () => { await page.close(); });

    describe('Testing books', () => {
        it('Test if all the books are loaded and showed', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeMessages)));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('text=LOAD ALL BOOKS')
            ])
            assert.equal(await page.$eval('text=Test Harry Potter', n => n.textContent), 'Test Harry Potter');
            assert.equal(await page.$eval('text=J.K.Rowling', n => n.textContent), 'J.K.Rowling');
            assert.equal(await page.$eval('text=Test C# Fundamentals', n => n.textContent), 'Test C# Fundamentals');
            assert.equal(await page.$eval('text=Svetlin Nakov', n => n.textContent), 'Svetlin Nakov');
        })

        it('Test the validation of the input fields', async () => {

            await page.goto(`http://127.0.0.1:5500/index.html`);
            await page.type('#createForm > input[name=author]', 'S');

            await page.click('text=Submit');

            assert.strictEqual(await page.$eval('text=Error!', e => e.textContent), 'Error!')
        })

        it('Test the functionality of the sending a new message', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeMessages['1_id'])));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            await page.type('#createForm > input[name=title]', 'Test Harry Potter');
            await page.type('#createForm > input[name=author]', 'J.K.Rowling');

            let [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books*'),
                page.click('text=Submit')
            ])

            let actual = await response.json();

            assert.deepEqual(actual, fakeMessages['1_id']);
        })

        it('Test the correct form is visible', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeMessages)));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            await page.click('text=LOAD ALL BOOKS');
            await page.click('text=edit');

            let visible = await page.isVisible('text=Save');
            assert.isTrue(visible);

        })

        it('Test input fields have the wright title and author of the selected book', async () => {

            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeMessages)));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('text=LOAD ALL BOOKS')
            ]);

            await page.route('**/jsonstore/collections/books/**', route => route.fulfill(fakeResponse(fakeMessages['1_id'])));

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/**'),
                page.click('text=Edit'),
            ]);

            await page.click('text=Edit')

            let title = await page.$eval('#editForm > input[name="title"]', e => e.value);
            let author = await page.$eval('#editForm > input[name="author"]', e => e.value);

            assert.equal(title, fakeMessages['1_id'].title);
            assert.equal(author, fakeMessages['1_id'].author);
        })

        it('Test Save button PUT\'s a request with the right parameters ', async () => {

            let testTitle = 'TestTitle';
            let testAuthor = 'TestAuthor';

            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeMessages)));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('text=LOAD ALL BOOKS')
            ]);

            await page.route('**/jsonstore/collections/books/**', route => route.fulfill(fakeResponse({title: testTitle, author: testAuthor})));

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/**'),
                page.click('text=Edit'),
            ]);

            //await page.click('text=Edit')

            await page.fill('#editForm [name="title"]', testTitle)
            await page.fill('#editForm [name="author"]', testAuthor)

            let [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/**'),
                page.click('text=Save')
            ]);

            let result = await response.json();

            assert.equal(result.title, testTitle);
            assert.equal(result.author, testAuthor);
        })


        it('Test the delete button', async () => {
            await page.route('**/jsonstore/collections/books', route => route.fulfill(fakeResponse(fakeMessages)));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books'),
                page.click('text=LOAD ALL BOOKS')
            ]);

            await page.route('**/jsonstore/collections/books/**', route => route.fulfill(fakeResponse(fakeMessages['1_id'])));

            let [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/collections/books/**'),
                page.click('text=Delete')
            ]);

            let result = await response.json();

            assert.equal(result.title, 'Test Harry Potter');
            assert.equal(result.author, 'J.K.Rowling');
        })
    })
});