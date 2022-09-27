/// <reference types="Cypress" />


describe("Test Contact Us form via webdriverUni", ()=>{
    it("Cypress web security",()=>{
      //  cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
      cy.visit("http://webdriveruniversity.com")
      cy.visit("http://google.com")
     
      
    }) 

    it("Validate visiting two different domains via user action",()=>{
        //cypress code
         // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
         cy.visit("http://webdriveruniversity.com")
         cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
       
    }) 
})