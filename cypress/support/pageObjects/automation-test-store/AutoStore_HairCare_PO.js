class AutoStore_HairCare_PO {

    addHairCareProductsToBasket(){
        globalThis.data.productName.forEach((element)=>{
            cy.addProductToBasket(element).then(()=>{
              //  debugger
            })        
        })
        cy.get('.dropdown-toggle > .fa').click().debug()
    }
  

 }
 export default AutoStore_HairCare_PO ;