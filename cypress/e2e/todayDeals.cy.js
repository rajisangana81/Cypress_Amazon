describe("Searching todays deals in Amazon and add to cart",()=>{

    it("Todays deals test case",()=>{
        cy.visit("https://www.amazon.co.uk/")
        //Asserting the title of the page
        cy.title().should('eq','Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more')
         //Accept cookies
         cy.get("#sp-cc-accept").click()
       
        //clicking on the Todays deal 
        cy.get('a[data-csa-c-slot-id="nav_cs_5"]').click()

           //Clicking on the Tv's Movies and home cinema
        cy.get('li[aria-posinset="8"]').click()

        //Clicking on Mini projector       
        cy.get('img[alt="YABER V5 Mini Projector, 5G WiFi Bluetooth Projector 1080P Full HD Supported, 8000L Lumen Portable Projector with Synchron..."]').click().should('be.visible')
        //Adding to basket
        cy.get('input[id="add-to-cart-button"]').click()
        //Checking the Assertion
        cy.get('span[class="a-size-medium-plus a-color-base sw-atc-text a-text-bold"]').should('contain','Added to Basket')
    })
})
       
        
    

