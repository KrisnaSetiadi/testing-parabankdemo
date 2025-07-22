describe('Register Parabank', () => {
    it('Register Dengan Data user yang sudah tersedia', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('#loginPanel > :nth-child(3) > a').click();
        cy.get('#customer\\.firstName').type('krisna');
        cy.get('#customer\\.lastName').type('setia');
        cy.get('#customer\\.address\\.street').type('Jalan setia');
        cy.get('#customer\\.address\\.city').type('Bandung');
        cy.get('#customer\\.address\\.state').type('Jawa Barat');
        cy.get('#customer\\.address\\.zipCode').type('12311');
        cy.get('#customer\\.phoneNumber').type('kamma');
        cy.get('#customer\\.ssn').type('31355131');
        cy.get('#customer\\.username').type('krisna');
        cy.get('#customer\\.password').type('Rinduajabaru');
        cy.get('#repeatedPassword').type('Rinduaja');

        cy.get('[colspan="2"] > .button').click();
        cy.wait(5000);
    });
    it('Register Dengan Data user ada yang tidak di isi', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('#loginPanel > :nth-child(3) > a').click();
        cy.get('#customer\\.firstName').type('krisna');
        cy.get('#customer\\.lastName').type('setia');
        cy.get('#customer\\.address\\.street').type('Jalan setia');
        cy.get('#customer\\.address\\.city').type('Bandung');
        // cy.get('#customer\\.address\\.state').type('Jawa Barat');
        // cy.get('#customer\\.address\\.zipCode').type('12311');
        // cy.get('#customer\\.phoneNumber').type('kamma');
        cy.get('#customer\\.ssn').type('31355131');
        cy.get('#customer\\.username').type('krisna');
        cy.get('#customer\\.password').type('Rinduajabaru');
        cy.get('#repeatedPassword').type('Rinduaja');

        cy.get('[colspan="2"] > .button').click();
        cy.wait(5000);
    });
    
    it('Register Dengan Data yang benar', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('#loginPanel > :nth-child(3) > a').click();
        cy.get('#customer\\.firstName').type('krisna');
        cy.get('#customer\\.lastName').type('setia');
        cy.get('#customer\\.address\\.street').type('Jalan setia');
        cy.get('#customer\\.address\\.city').type('Bandung');
        cy.get('#customer\\.address\\.state').type('Jawa Barat');
        cy.get('#customer\\.address\\.zipCode').type('12311');
        cy.get('#customer\\.phoneNumber').type('081993912931');
        cy.get('#customer\\.ssn').type('31355131');
        cy.get('#customer\\.username').type('krisnaa');
        cy.get('#customer\\.password').type('Rinduaja');
        cy.get('#repeatedPassword').type('Rinduaja');

        cy.get('[colspan="2"] > .button').click();
    });
});