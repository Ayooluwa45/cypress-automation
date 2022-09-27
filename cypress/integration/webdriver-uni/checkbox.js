/// <reference types="Cypress" />

describe("Verify checkboxes via webdriverUni", () => {
  beforeEach(()=>{
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  })
  it("Check and validate checkboxes ", () => {
   
    cy.get("#checkboxes > :nth-child(1) > input ").check();
    cy.get("#checkboxes > :nth-child(1) > input").check().should("be.checked");

    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");

    cy.get("@option-1").check().should("be.checked");
  });

  it("Check and validate checkboxes ", () => {
  
      cy.get(':nth-child(5) > input').uncheck()
      cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
  });

  
  it("Check multiple checkboxes ", () => {
      cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3"]).should('be.checked')
  });
});
