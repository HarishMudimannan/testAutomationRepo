import { test, expect } from '@playwright/test';

test('Fetch total flights from Bengaluru to Chennai', async ({ page }) => {

    await page.goto('https://www.makemytrip.com/');

    // Close login popup if appears
    await page.locator('span[data-cy="closeModal"]').click().catch(() => { });

    // Click From field
    await page.locator('//label[@for="fromCity"]').click();
    await page.locator('//input[@placeholder="From"]').fill('Bengaluru');

    await page.waitForSelector('//p[contains(text(),"Bengaluru")]');
    await page.locator('//p[contains(text(),"Bengaluru")]').first().click();

    // Click To field
    await page.locator('//label[@for="toCity"]').click();
    await page.locator('//input[@placeholder="To"]').fill('Chennai');

    await page.waitForSelector('//p[contains(text(),"Chennai")]');
    await page.locator('//p[contains(text(),"Chennai")]').first().click();

    // Click Search
    await page.locator('//a[text()="Search"]').click();

    // Wait for results page
    await page.waitForSelector('//div[contains(@class,"listingCard")]', { timeout: 60000 });

    // Scroll multiple times to load lazy flights
    for (let i = 0; i < 6; i++) {
        await page.mouse.wheel(0, 3000);
        await page.waitForTimeout(2000);
    }

    // Get total flights
    const flightCards = page.locator('//div[contains(@class,"listingCard")]');
    const totalFlights = await flightCards.count();

    console.log("Total Flights Available:", totalFlights);

    // Fetch airline names
    const airlineNames = await page.locator('//span[contains(@class,"airlineName")]')
        .allTextContents();

    console.log("Airlines:");
    airlineNames.forEach(name => console.log(name.trim()));

    expect(totalFlights).toBeGreaterThan(0);
});
