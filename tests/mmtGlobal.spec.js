import { test, expect } from "@playwright/test"
test('MMT', async ({ page }) => {
    await page.goto('https://www.makemytrip.global/')
    let closeBtn = page.locator('//span[@class="commonModal__close"]')
    await closeBtn.waitFor()
    await closeBtn.click()
    await page.waitForTimeout(3000)
    let fromCityInput = page.locator('#fromCity')
    await fromCityInput.waitFor()
    await fromCityInput.click()
    await page.getByPlaceholder('From').fill('Bengaluru')
    let fromLocator = page.locator("//span[text()='Bengaluru, India']")
    await fromLocator.waitFor()
    await fromLocator.click()
    let toCityInput = page.locator('#toCity')
    await toCityInput.waitFor()
    await toCityInput.click()
    await page.locator('//input[@placeholder="To"]').fill('Chennai')
    let toLocator = page.locator("//span[text()='Chennai, India']")
    await toLocator.waitFor()
    await toLocator.click()
    await page.locator('//div[@aria-label="Fri Feb 27 2026"]').click()
    await page.waitForTimeout(1000);
    let searchBtn = page.locator('//p[@data-cy="submit"]/a')
    await searchBtn.click({ timeout: 3000 })
    await expect(page).toHaveURL(/flight\/search/)
    await page.waitForLoadState('domcontentloaded')
    // await page.waitForTimeout(3000)
    await page.waitForSelector('.listingCard ', { timeout: 8000 });
    let totcount = await page.locator('//span[@class="airlineName"]').count()
    let flightLocator = await page.locator('//span[@class="airlineName"]').allTextContents()
    console.log(`Total Flights: ${totcount}`)
    flightLocator.forEach(x => {
        console.log(x.trim());
    })

})