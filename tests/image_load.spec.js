const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkAllImages(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });

  const allImages = await page.$$('img');
  const undefinedImages = [];

  for (const image of allImages) {
    const imageSrc = await image.getAttribute('src');

    // Check if the image source is undefined
    if (!imageSrc) {
      undefinedImages.push(image);
    }
  }

  await browser.close();

  expect(undefinedImages).toEqual([]);
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have all images loaded`, async ({}) => {
    console.log(page.path);
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await checkAllImages(pageUrl);
  });
});
