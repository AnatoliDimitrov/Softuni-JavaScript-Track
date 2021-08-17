/////////////////////////////////// IMPORTANT ////////////////////////////////////

/* When cheking the tests:
You need to start live server with address: http://127.0.0.1:5500/index.html
No need to start the JSONSTORE server.
All needed data is mocked correctly.*/

/////////////////////////////////////////////////////////////////////////////////

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
    '1_id': { author: 'test', content: 'testMessage' },
    '2_id': { author: 'AnotherTest', content: 'Another testMessage' }
}

let browser, page;

describe('E2E tests', function () {
    this.timeout(10000);

    before(async () => { browser = await chromium.launch(); });

    after(async () => { await browser.close(); });

    beforeEach(async () => { page = await browser.newPage(); });

    afterEach(async () => { await page.close(); });

    describe('Testing messages', () => {
        it('test if all the messages are loaded and showed after refresh', async () => {
            await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(fakeMessages)));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('text=Refresh')
            ])

            let expected = 'test: testMessage\nAnotherTest: Another testMessage'

            let actual = await page.$eval('textarea', t => t.value);

            assert.strictEqual(actual, expected);
        })

        it('test the functionality of the sending a new message', async () => {
            await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(fakeMessages)));

            await page.goto(`http://127.0.0.1:5500/index.html`);

            let [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('text=Send')
            ])

            let actual = await response.json();

            assert.deepEqual(actual, fakeMessages);
        })
    })
});