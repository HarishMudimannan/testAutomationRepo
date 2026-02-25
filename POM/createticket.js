class createticket {
    constructor(page) {
        this.subTextField = page.locator('input#subject')
        this.tasktypeDD = page.locator('//select[@name="tasktype"]')
        this.priorityDD = page.locator('//select[@name="priority"]')
        this.descTestArea = page.locator('//textarea[@name="description"]')
        this.sendBtn = page.locator('//input[@name="send"]')
    }
}
export default createticket