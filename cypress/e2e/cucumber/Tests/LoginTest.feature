Feature: Login on the DemoBlaze page
    Background: Navigate to the Website and I want to login into the site

    Scenario: Login as new register user
        Given I navigate to the website
        When I click on sign in link
        Then I entered valid credential
            | username | password |
            | hihi0202 | hihi     |
        And I click on sign in button
        Then Validate the title after login

