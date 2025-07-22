describe('Cek Menu Transfer dan melakukan transaksi', () => {
    it('Nominal dikosongkan', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click(); 
      cy.wait(2000);
      cy.get('#leftPanel > ul > :nth-child(3) > a').click();
      cy.get('#fromAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get('#toAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get(':nth-child(4) > .button').click();
    });
    it('Nominal di isi dengan minus', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click(); 
      cy.wait(2000);
      cy.get('#leftPanel > ul > :nth-child(3) > a').click();
      cy.get('#amount').type('-20');
      cy.wait(2000);
      cy.get('#fromAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get('#toAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get(':nth-child(4) > .button').click();
    });
    it('Nominal di isi dengan huruf', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click(); 
      cy.wait(2000);
      cy.get('#leftPanel > ul > :nth-child(3) > a').click();
      cy.get('#amount').type('bogor');
      cy.wait(2000);
      cy.get('#fromAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get('#toAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get(':nth-child(4) > .button').click();
    });
    it('Nominal di isi dengan karakter special', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click(); 
      cy.wait(2000);
      cy.get('#leftPanel > ul > :nth-child(3) > a').click();
      cy.get('#amount').type('$10');
      cy.wait(2000);
      cy.get('#fromAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get('#toAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get(':nth-child(4) > .button').click();
    });
    it('Nominal di isi dengan Benar', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm');
      cy.get(':nth-child(2) > .input').type('krisna123');
      cy.get(':nth-child(4) > .input').type('12345');
      cy.get(':nth-child(5) > .button').click(); 
      cy.wait(2000);
      cy.get('#leftPanel > ul > :nth-child(3) > a').click();
      cy.get('#amount').type('190');
      cy.wait(2000);
      cy.get('#fromAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get('#toAccountId')
        .select('18783');
      cy.wait(2000);
      cy.get(':nth-child(4) > .button').click();
    });
});