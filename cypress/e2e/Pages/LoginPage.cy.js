describe('Test login user in website via API', () => {

    beforeEach(function () {
        cy.fixture('users.json').as('usersData');
    })

    it('Verify login user successfully', function () {
        const users = this.usersData;
        users.forEach(user => {
            const { username, password } = user;
            cy.generateToken(username, password);
            cy.loginViaAPI(username, password);
        })
    });
})