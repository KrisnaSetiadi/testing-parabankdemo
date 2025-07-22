describe('Buka Akun Baru parabank', () => {
    it('Masuk buka akun baru', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click();
      cy.get('#leftPanel > ul > :nth-child(1) > a').click(); 
      cy.get('#type')
        .select('SAVINGS');
      cy.get('#fromAccountId')
        .select('14232');
      cy.get('form > div > .button').click();
      cy.wait(2000);
      cy.get('#newAccountId').click();
    });
});