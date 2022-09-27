/// <reference types="Cypress" />

describe("Verify checkboxes via webdriverUni", () => {
    it("Check and validate checkboxes ", () => {
      //  cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
      cy.visit("http://webdriveruniversity.com");
      cy.get("#dropdown-checkboxes-radiobuttons")
        .invoke("removeAttr", "target")
        .click({ force: true });
  
     cy.get('#dropdowm-menu-1').select('c#').contains('JAVA')
     cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
     cy.get('#dropdowm-menu-3').select('JQuery').should('have.value', 'jquery')
    });
  
  });
  
