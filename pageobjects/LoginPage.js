class LoginPage
{

    constructor(page)
    {
        this.page = page;
        this.username = page.locator('input[type="email"]');
        this.password = page.locator('input[type="password"]');
    } 
    async navigatetologinpage()
    {
        await this.page.goto('https://www.google.com/gmail/');
    }
    async Validlogin(username, password)
    {
        await this.username.fill(username);
        await this.username.press('Enter');
        await this.password.fill(password);
        await this.password.press('Enter');
    }

}
module.exports = LoginPage;