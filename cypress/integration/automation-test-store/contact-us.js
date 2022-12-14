/// <reference types="Cypress" />


describe("Test Contact Us form via Automation Test Store", ()=>{
  before(()=>{
    cy.fixture("userDetail").as("user")
  })
    it("Should be able to submit a successful submission via contact us form",()=>{
      cy.visit("https://automationteststore.com/")
      cy.get('a[href$=contact]').click().then((linkText)=>{
        cy.log("Click on this test:" + linkText.text())
      })
      //cy.xpath("//a[contains(@href,'contact')]").click()
      cy.get("@user").then((user)=>{
        cy.get('#ContactUsFrm_first_name').type(user.name)
        cy.get('#ContactUsFrm_email').type(user.email)
      })
     
      cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
      cy.get('#ContactUsFrm_enquiry').type("I have to make it in life")
      cy.get('button[title=Submit]').click()
      cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    }) 


})