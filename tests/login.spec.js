import { test } from "@playwright/test"
import loginpage from "../POM/login.page.js"
import data from "../testdata/logindata.json"
test('', async ({ page }) => {
    let loginPage = new loginpage(page) // created the instance of the class
    let url = data.url
    let un = data.username
    let pwd = data.password
    //launch the URL
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    // fetch the username and password from the webpage
    // let un = await page.locator("(//b[text()='student'])[1]").textContent()
    // let pwd = await page.locator("(//b[text()='Password123'])[1]").textContent()
    //pass username
    await loginPage.usernameTextField.fill(un)
    //pass password
    await loginPage.passwordTextField.fill(pwd)
    //click on login button
    await loginPage.submitButton.click()
    await page.waitForTimeout(3000)

})