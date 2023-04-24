const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30000;

async function checkClickableLink(pageUrl) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  const linkCount = await page.evaluate(() => {
    const links = Array.from(document.querySelectorAll('a'));
    return links.filter(link => link.href !== '' && !link.getAttribute('disabled')).length;
  });
  await browser.close();
  expect(linkCount).toBeGreaterThan(0);
}

pages.forEach((page) => {
  test(`Page "${page.path}" should have clickable link`, async ({}) => {
    console.log(page.path)
    const pageUrl = `${config.use.baseURL}${page.path}`;
    await checkClickableLink(pageUrl);
  });
});
