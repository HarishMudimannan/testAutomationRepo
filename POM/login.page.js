class loginpage {
    // passing the page fixture to the loginPage.js through login spec file
    constructor(page) {
        this.usernameTextField = page.locator('input#username')
        this.passwordTextField = page.locator('input#password')
        this.submitButton = page.locator('button#submit')
    }
}
export default loginpage