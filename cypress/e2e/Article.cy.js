
///<reference types='cypress'/>
import login from "./PageObjects/login";
import Articlepage from "./PageObjects/Articlepage";
import DeleteArticlepage from "./PageObjects/DeleteArticlepage";
describe('Conduit Test Suite ', () => {
  const artPage = new Articlepage();

  it('Create an Article', () => {
      //Visiting  on the conduit login page
      cy.loginpage()
      cy.wait(2000)
        //Click on new article link
        artPage.clickonArticlelink()
        // Enter title of the article
        artPage.tileOfArticle()
        //What's this article about
        artPage.articleAbout()
        // enter short description of the article
        artPage.shortDescArticle()
        // Click on the Publish Ariticle
        artPage.publishArticle()
        cy.wait(2000)
        // validate that post comment button should be visisble
        artPage.validatepostcomment()
        //logout from the account
        cy.logout()
   })

  const delartPage = new DeleteArticlepage();
  it('Delete an Article', () => {
        cy.loginpage()
        // click on setting navigation link
        delartPage.settingsNavlink()
        cy.wait(2000)
        // click on the selected article
        delartPage.selectArticle()
        cy.wait(2000)
        // click on delect article button
        cy.wait(2000)
        delartPage.deletearticle()
        // check that your feed link is visible
        delartPage.feedvisible()
        cy.logout()
  })

        /*Unable to create an Article without mandatory fileds*/

  it('unable to create an Article without mandatory fileds', () => {
       cy.loginpage()
        //Click on new article link
        artPage.clickonArticlelink()
        // enter short description of the article
        artPage.tileOfArticle()
        //What's this article about
        artPage.articleAbout()
        // Click on Publish Article button
        artPage.publishArticle()
        cy.wait(2000)
        // validate that new article has not been created successfully
        cy.wait(2000)
        artPage.assertinvalidartile()
        cy.logout()
  })
  })



