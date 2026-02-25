import { test } from "@playwright/test"
import registration from "../POM/registration.page"
import signin from "../POM/sigin.page"
import homepage from "../POM/home.page"
import createticket from "../POM/createticket"
import signupdata from "../testdata/e2esignup.json"
import landingpage from "../POM/landing.page"
test('CRM', async ({ page }) => {
    let landingPage = new landingpage(page)
    let signUp = new registration(page)
    let signIn = new signin(page)
    let homePage = new homepage(page)
    let createTicket = new createticket(page)

    page.on("dialog", async (dialog) => {
        console.log(dialog.message);
        await dialog.accept()
    })

    let name = signupdata.name
    let email = signupdata.email
    let pwd = signupdata.password
    let repwd = signupdata.repassword
    let contact = signupdata.contact
    let gender = signupdata.gender


    //launch url
    await page.goto("http://49.249.28.218:8081/TestServer/")
    await landingPage.signupLink.click()
    // enter username TF
    await registration.nameTextField.fill(name)
    // enter mail TF
    await registration.emailTextField.fill(email)
    // enter pwd TF
    await registration.pwdTextField.fill(pwd)
    // re enter pwd TF
    await registration.repwdTextField.fill(repwd)
    // enter contact number TF
    await registration.contactTextField.fill(contact)
    // select gender TF
    if (!gender == 'male') {
        await registration.femaleRD.check()
    }
    // click on submit button
    await registration.submitBtn.click()
    // handle alert - get the message

    // enter email - TF
    await signin.emailTextField.fill(email)
    // enter pwd - TF
    await signin.pwdTextField.fill(pwd)
    // click on login button
    await signin.loginButton.click()
    // click on create ticket
    // enter subject - TF
    // select tasktype - DD
    // select priority - DD
    // enter description - TA
    // click on send button
    // alert msg  -- accept
    // click on view ticket
    // take the screenshot

})