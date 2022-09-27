/// <reference types="Cypress" />

//const { includes } = require("cypress/types/lodash");

describe("Verify checkboxes via webdriverUni", () => {
    it("Check and validate checkboxes ", () => {
      //  cy.visit("http://webdriveruniversity.com/Contact-Us/contactus.html")
      cy.visit("http://webdriveruniversity.com");
      cy.get("#datepicker")
        .invoke("removeAttr", "target")
        .click({ force: true });
        cy.get('#datepicker').click()
  
       // let date = new Date()
        //date.setDate(date.getDate())
        //cy.log(date.getDate()) //  get current day i.e 9

       // let date2 = new Date()
       // date2.setDate(date.getDate() + 10)
       // cy.log(date2.getDate()) //  get current day i.e 9


        var date = new Date()
        date.setDate(date.getDate() + 300)

        var futureYear = date.getFullYear()
        //var futureMonth = date.getMonth()
       var futureMonth = date.toLocaleString("default", {month: "long"})
        var futureDay = date.getDate()

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)

         const selectMonthAndYear = ()=>{
          cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
            if(!currentDate.text().includes(futureYear)){
              cy.get('.next').first().click()
              selectMonthAndYear()
            }
          }).then(()=>{
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
              if(!currentDate.text().includes(futureMonth)){
                cy.get('.next').first().click()
                selectMonthAndYear()
              }
            })
          })
        }

        const selectFutureDay = ()=>{
          cy.get('[class="day"]').contains(futureDay).click()
        }
        selectMonthAndYear()
        selectFutureDay()
    }) 
  
  });
  
