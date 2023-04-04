// @ts-check
const { test, expect } = require('@playwright/test')

test('Should have at least one hyperlink on the page', async ({ page }) => {
  await page.goto('http://localhost:3000')

  // Find all the anchor tags on the page.
  const anchors = await page.$$('a')

  // Ensure that there is at least one anchor tag on the page.
  await expect(anchors.length).toBeGreaterThan(0)
})
