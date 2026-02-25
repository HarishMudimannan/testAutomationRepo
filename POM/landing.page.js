class landingpage {
    constructor(page) {
        this.signupLink = page.getbyRole('link', { name: 'User Signup' })
    }
}
export default landingpage