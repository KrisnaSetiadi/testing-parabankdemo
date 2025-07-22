describe('Cek Menu OverView', () => {
    it('Cek detail menu overview', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click(); 
      cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click();
    });
});