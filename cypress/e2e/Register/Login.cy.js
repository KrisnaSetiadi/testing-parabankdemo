describe('Login Parabank', () => {
    it('login username salah atau tidak terdaftar', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('angga');
      cy.get(':nth-child(4) > .input').type('Rinduaja');
      cy.get(':nth-child(5) > .button').click();
      cy.wait(5000);  
    });
    it('Login menggunakan password yang salah', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna');
      cy.get(':nth-child(4) > .input').type('aja');
      cy.get(':nth-child(5) > .button').click();
      cy.wait(5000);  
    });
    it('Login Menggunakan akun yang benar', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click();
    });
});