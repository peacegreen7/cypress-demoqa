import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import login from "../../Pages/LoginPage/LoginPage.cy";

Given("I navigate to the website", () => {
    login.enterURL();
});

When("I click on sign in link", () => {
    login.clicLoginLink();

});

When("I entered valid credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUserNamePassword(element.username, element.password);
        login.clickSubmitButton()
    });
});

And("I click on sign in button", () => {
    login.clickSubmitButton();
});

Then("Validate the title after login", () => {
    login.verifyPageTitle();
});