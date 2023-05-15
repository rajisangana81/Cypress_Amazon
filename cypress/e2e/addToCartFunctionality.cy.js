describe("Automate Add to cart functunality on amazon site ",()=>{
    
    before(()=>{
     cy.visit("https://www.amazon.co.uk/")
    }) 
 /**
  * Automation test for validate add to cart funtionality
  */
 it("User should be able to search for  ravel kids watch and verify successfully add to basket and delete it",()=>{
     cy.title().should('eq','Amazon.co.uk: Low Prices in Electronics, Books, Sports Equipment & more')
     cy.get("#sp-cc-accept").as('acceptCookies')
     cy.get('@acceptCookies').click()
     //cy.get("#twotabsearchtextbox").as('searchBox').type("watches")
     cy.get("#twotabsearchtextbox").type("watches")

     cy.get('#nav-flyout-searchAjax div[aria-label="watches for kids"]').eq(0)
     cy.get('#nav-flyout-searchAjax div[aria-label="watches for kids"]').as('watchesForKids').click()
    cy.get('div[data-asin="B07DKQPFS9"]').as('RavelWatech').click({ multiple: true} )
     cy.get('input[title="Add to Shopping Basket"]').as('addToBasketLink').click()
     cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').as('itemAddedMessage').should('include.text','Added to Basket')
     cy.get('a[data-csa-c-slot-id="sw-gtc"]').as('goToBasketLink').click()
     cy.get('input[value="Delete"]').as('deleteLink').click()
     cy.get('div[id="sc-cart-column"] #sc-subtotal-label-activecart').as('subtotal')
     cy.get('@subtotal').then((subtotalItem)=>{
     cy.wrap(subtotalItem.text()).should('contain','0 items')
     })
 })
})