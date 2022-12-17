
class DeleteArticlepage
{
    settingsNavlink()
    {
        return  cy.get('a[ng-reflect-router-link="/profile,cvtrtest1@convertr.io"]').click()
    }
    selectArticle()
    {
        return  cy.get('.preview-link').eq(0).click()
    }
    deletearticle()
    {
        return  cy.get('button[class="btn btn-sm btn-outline-danger"]').eq(1).click()

    }
    shortDescArticle()
    {
        return  cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Hello this is my first Article12')

    }
    publishArticle()
    {
        return   cy.get('div[class="editor-page"] button[type="button"]').click({failOnStatusCode: false})

        
    }
    feedvisible()
    {
        return   cy.contains(' Your Feed ' ).should('be.visible')


        
    }

}
export default DeleteArticlepage;