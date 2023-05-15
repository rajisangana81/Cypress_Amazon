describe("Enter the Search details of the Amazon website ",()=>{
    it("Search item  in the website  prime video test case",()=>{
        cy.visit("https://www.amazon.co.uk/")
        cy.title().should('eq','Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more')
         //Accept cookies
         cy.get("#sp-cc-accept").click()

        //Clicking on the search item
        cy.get('#nav-hamburger-menu').as('searchItem').click()
        //Writing the Assertion for Hello Sign in
        cy.get('#hmenu-customer-name').should('have.text','\n      Hello, sign in\n    ')
        //clicking on prime video
        cy.get('a[data-menu-id="3"]').click()
        //click on watch anywhere
        cy.contains('Watch Anywhere').click({force: true})
        //writing the Assertion
        cy.get('img[alt="Watch Prime Video at home"]').should('be.visible')
      
        
        })
    })
    


