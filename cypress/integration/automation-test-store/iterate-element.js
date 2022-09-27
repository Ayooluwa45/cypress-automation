/// <reference types="Cypress" />

describe("Iterate over elements", () => {
  beforeEach(()=>{
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  })
  it("Verifying variables, cypress and jquery pages", () => {
   

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list)=>{
        cy.log("Index: " + index + " : " + $el.text())
    })

  });

  it("Add specific product to basket", () => {
 
    //cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list)=>{
      //  if($el.text().includes('Curls to straight Shampoo')) {
                //cy.wrap($el).click
          //  } 
        

   // })
cy.selectProduct('Curls to straight Shampoo')
  });
  
  
  it("Add specific product to basket", () => {
cy.selectProduct('Seaweed Conditioner')
  });
});
