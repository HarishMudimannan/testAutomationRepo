class signin {
    constructor(page) {
        this.emailTextField = page.locator('#txtusername')
        this.pwdTextField = page.locator('#txtpassword')
        this.loginButton = page.getbyRole('button', { name: 'Login' })
    }
}
export default signin