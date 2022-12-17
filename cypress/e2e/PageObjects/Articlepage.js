class Articlepage
{
    clickonArticlelink()
    {
        return cy.get('a[routerlink="/editor"]').click()
    }
    tileOfArticle()
    {
        // This fucnction would be used to generate random article names
        function randomArticlGen() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        
            for (var i = 0; i < 10; i++)
              text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
          }
        return  cy.get('input[placeholder="Article Title"]').type('NewArtcile'+ randomArticlGen(),'{enter}')

    }
    articleAbout()
    {
        return   cy.get('input[formcontrolname="description"]').type('sample Article Example')

    }
    shortDescArticle()
    {
        return  cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Hello this is my first Article12')

    }
    publishArticle()
    {
        return   cy.get('div[class="editor-page"] button[type="button"]').click({failOnStatusCode: false})  
    }

    assertinvalidartile()
    {
        return    cy.get('.error-messages').should("include.text","body can't be blank")
 
    }

    validatepostcomment()
    {
        return    cy.get('.btn.btn-sm.btn-primary').should('have.text',' Post Comment ')

 
    }

}
export default Articlepage;