const userConstant = require('./userConstants');
class Setup {

    /* Land to the Where we want to land util the page load (no network) and wait for a specific element of that page
    @param page puppeteer pager
    @param Base Url
    */
    static async landingPage(page, baseURL) {

        await page.setViewport({ width: 1400, height: 720 });
        await page.goto(baseURL, userConstant.pageLoadUntil);
        await page.waitForSelector('#block-gtranslate a[title]:last-child>img:last-child');
        await page.click('#block-gtranslate a[title]:last-child>img:last-child');
        await page.waitFor(3000);
    }
}

module.exports = Setup;