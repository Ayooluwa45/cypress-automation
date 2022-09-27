import Homepage_PO from '../../support/pageObjects/webdriveruni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriveruni/Contact_Us_PO'
/// <reference types="Cypress" />


describe("Test Contact Us form via webdriverUni", ()=>{

  const homepage_PO = new Homepage_PO()
  const contact_Us_PO = new Contact_Us_PO()

  before(()=>{
    cy.fixture('example').then((data)=>{
      //this.data = data
      globalThis.data = data
    })
  })

  beforeEach(()=>{
   // cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html" )
   // cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true})
   homepage_PO.visitHomepage()
   cy.wait(3000)
   homepage_PO.clickOn_ContactUs_Button()
   //cy.pause()
  })
    it("Should be able to submit a successful submission via contact us form",()=>{
      //  cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
     
       cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
       cy.title().should('include', 'WebDriver | Contact Us')
       cy.url().should('include', 'contactus')
       
      // cy.get('[name="first_name"]').type(data.first_name)
      // cy.get('[name="last_name"]').type(data.last_name)
       //cy.get('[name="email"]').type(data.email)
       //cy.get('textarea.feedback-input').type("I will be great in life")
       //cy.get('[type="submit"]').click()
       //cy.get('h1').should('have.text', 'Thank You for your Message!')
       //cy.webDriver_contactUs( Cypress.env("first_name"), data.last_name, data.email, "I will be great in life", 'h1', 'Thank You for your Message!')

       
       contact_Us_PO.contactForm_Submission( Cypress.env("first_name"), data.last_name, data.email, "I will be great in life", 'h1', 'Thank You for your Message!')
    }) 

    it("Should not be able to submit a successful submission via contact us form as all fields are required",()=>{
        //cypress code
         // cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
        
        //cy.get('[name="first_name"]').type(data.first_name)
        //cy.get('[name="last_name"]').type(data.last_name)
        //cy.get('textarea.feedback-input').type("I will be great in life")
        //cy.get('[type="submit"]').click()
        //cy.get('body').contains('have.text', 'Thank You for your Message!')
        //cy.webDriver_contactUs( data.first_name, data.last_name, " ", 'I will be great in Life', 'body', 'Error: Invalid email address')

        contact_Us_PO.contactForm_Submission( data.first_name, data.last_name, " ", 'I will be great in Life', 'body', 'Error: Invalid email address')
    }) 
})