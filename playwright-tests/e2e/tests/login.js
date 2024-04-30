export default class LoginPage {
    //locators
    constructor(page) {
        this.page = page;
        this.userName_text = page.getByTestId('login-email-field');
        this.password_text = page.getByTestId('login-password-field');
        this.login_button = page.getByTestId('login-submit-button');

    }

    async goto() {
        await this.page.goto('http://localhost:3000/');
    }
    //methods
    // single functions to add all the actions or autonomic function(seperate funstion for every action)
    async login(username, password) {
        await this.userName_text.fill(username);
        await this.password_text.fill(password);
        await this.login_button.click();
    }

}