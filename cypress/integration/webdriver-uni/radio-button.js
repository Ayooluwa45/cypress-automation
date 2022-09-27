/// <reference types="Cypress" />

describe("Verify checkboxes via webdriverUni", () => {
  before(()=>{
    cy.visit("http://webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  })
    it("Check and validate checkboxes ", () => {
  
      cy.get('#radio-buttons').find("[type='radio']").first().check()
      cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
    });
  
    it("Check and validate checkboxes ", () => {
    
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')


        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')


        cy.get("[value='cabbage']").should('be.disabled')
      });
  
    
  
  });
  
