import { expect, test } from "@playwright/test"
test('new changes for mmt', async ({ browser }) => {
    test.slow('')
    let context = await browser.newContext()
    let page = await context.newPage()
    test.setTimeout(120000);

    // navigate to URL
    await page.goto('https://www.makemytrip.com/')
    await page.waitForLoadState('networkidle');
    // click on close icon
    await page.locator('//span[@class="commonModal__close"]').click()
    await page.waitForTimeout(3000)
    // assert the GST element
    if (await page.locator('//div[@class="tooltipInfo"]').isVisible()) await page.mouse.click(10, 10)
    // click on the from city
    await page.locator('#fromCity').click()
    // provide the place
    await page.getByPlaceholder('From').fill('Bengaluru')
    let fromLocator = page.locator("//span[text()='Bengaluru, India']")
    await fromLocator.waitFor()
    // select the place from dropdown
    await fromLocator.click()

    // click on to city
    await page.locator('#toCity').click()

    // provide the destination
    await page.locator('//input[@placeholder="To"]').fill('Chennai')
    let toLocator = page.locator("//span[text()='Chennai, India']")
    await toLocator.waitFor()
    await toLocator.click()
    await page.locator('//div[@aria-label="Fri Feb 27 2026"]').click()
    await page.waitForTimeout(1000);
    // click on search button
    let searchBtn = page.getByText('Search')
    await expect(searchBtn).toBeAttached();
    await searchBtn.click({ timeout: 3000 })

    await page.waitForURL('**/flight/search**');
    await page.waitForLoadState('load');
    test.slow()
    await page.waitForSelector('.listingCard')
    let flights = await page.locator('.listingCard').allTextContents();
    console.log(flights);

})