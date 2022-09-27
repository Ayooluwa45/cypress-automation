import AutoStore_HomePage_PO from '../../support/pageObjects/automation-test-store/AutoStore_HomePage_PO'
import AutoStore_HairCare_PO from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'

/// <reference types="Cypress" />


describe("Add multiple items to basket", ()=>{
    const autostore = new AutoStore_HomePage_PO()
    const autoHairCare  = new AutoStore_HairCare_PO()
   


    before(()=>{
        cy.fixture("product").then((data)=>{
            globalThis.data = data
        })
       
      })
   beforeEach(()=>{
   // cy.visit("https://automationteststore.com/")
   // cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

   autostore.accessHomepage()
   autostore.clickOn_HairCare_Link()
   })
      it("Add specific items to basket",()=>{
      autoHairCare.addHairCareProductsToBasket()
        })
       
   
  
  
  })