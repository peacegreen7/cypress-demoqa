describe('Test register user in website', () => {
    beforeEach(function () {
        // Load the fixture data before each test
        cy.fixture('users.json').as('usersData');
    })

    it('Verify register user successfully', function () {
        // access the loaded fixture data
        const users = this.usersData;

        // iterate through each user in fixture
        users.forEach(user => {
            const { username, password } = user;
            cy.createUser(username, password);

            // Perform actions for each user
            cy.log(`Username: ${username}, Password: ${password}`);
        });
    })
})