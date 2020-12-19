// We can require puppeteer and launch that in other file as well and then simply call that method.

const puppeteer = require('puppeteer');
const Setup = require('./Setup');

describe('Validate Page Tests', () => {
  let page;
  let browser;
  let baseURL = "https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020";

  //Launch browser before All and Setup If any Data required for that
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false });
  }, 10000);

  //Launch Page and its reach to a point before which each Test will start
  beforeEach(async () => {
    page = await browser.newPage();
    await Setup.landingPage(page, baseURL);
  }, 50000);


  // Close page and Clean cookies if required
  afterEach(async () => {

    await page.close();
  });

  //Close browser after all Test
  afterAll(async()=>{
    await browser.close();
  })


  it.only('should have a Correct Opening date ', async () => {

    let arrayEle = await page.$x('//div[@id="block-views-block-view-noticia-pbh-block-5"]//span[@class="field-content"]/span/font');
    expect(await page.evaluate(el => el.innerText, arrayEle[1])).toBe("10/30/2020");

  }, 20000);


  it("should have a Correct Objective phrase", async () => {

    let objectiveEle = await page.$x("//div[@id='block-views-block-view-noticia-pbh-block-5']//p/font/font");
    expect(await page.evaluate(el => el.innerText, objectiveEle[0])).toBe("Price Registration for a period of 12 months, for the purchase of galvanized clamps.");

  }, 20000);

  it("should have a Correct Closing/Bidding Date", async () => {

    let objectiveEle = await page.$x("//font[contains(text(),'BIDDING DATE:')]/ancestor::font/parent::span/following-sibling::font/font");
    expect(await page.evaluate(el => el.innerText, objectiveEle[0])).toBe("10/30/2020");

  }, 20000);

})
