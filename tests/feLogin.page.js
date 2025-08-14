
export class LoginPage {
    baseUrl = 'https://www.saucedemo.com/';
    locatorUsername = '#user-name';
    locatorPassword = '#password';
    locatorButtonLogin = '#id="login-button"';

    /**
     * @param {Page} page 
     */

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async fillUserPassword(username, password) {
        await this.page.locator(this.locatorUsername).fill(username);
        await this.page.locator(this.locatorPassword).fill(password);
    }

    async clickLogin() {
        await this.page.click(this.locatorButtonLogin);
    }

    async getUsername() {
        return await this.page.locator(this.locatorUsername).inputValue();
    }

    async getPassword() {
        return await this.page.locator(this.locatorPassword).inputValue();
    }
}