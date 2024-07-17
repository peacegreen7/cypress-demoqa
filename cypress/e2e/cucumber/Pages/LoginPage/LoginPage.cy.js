class LoginPage {
    URL = {
        login: "https://www.demoblaze.com"
    }
    elements = {
        loginLink: () => cy.get('#login2'),
        loginModal: () => cy.get('.modal-open'),
        username: () => cy.get('#loginusername'),
        password: () => cy.get('#loginpassword'),
        loginBtn: () => cy.get('.modal-footer button').eq(5).contains('Log in')
    }
    texts = {
        title: "STORE"
    }

    enterURL() {
        cy.visit(this.URL.login);
    }
    clicLoginLink() {
        this.elements.loginLink().click();
        cy.wait(5000); // Wait for 5 second for the modal to transition
        this.elements.loginModal().should('be.visible')
        return this;
    }
    enterUserNamePassword(username, password) {
        this.elements.username().type(username);
        this.elements.password().type(password);
        return this;
    }
    clickSubmitButton() {
        this.elements.loginBtn().click();
        return this;
    }
    verifyPageTitle() {
        return cy.title().should("eq", this.texts.title);
    }
}
const login = new LoginPage();
export default login;