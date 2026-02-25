class registration {
    constructor(page) {
        this.nameTextField = page.locator('#name')
        this.emailTextField = page.locator('email')
        this.pwdTextField = page.locator('#password')
        this.repwdTextField = page.locator('#cpassword')
        this.contactTextField = page.locator('#txtpassword')
        this.maleRD = page.locator("//input[@value='m']")
        this.femaleRD = page.locator("//input[@value='f']")
        this.submitBtn = page.locator("//input[@value='Submit']")
    }
}
export default registration
