import login from "./PageObjects/login";
describe('Conduit Test Suite ', () => {
    const ad = new login();
    var data
    before(()=>{
        cy.fixture('example').then((fdata)=>{
            data=fdata;
        })
    })
    it('InValidate My account search button ', () => {
        ad.openurl()
        ad.enterWrongEmail().type(data.wrong_Email)
        ad.enterWrongPassword().type(data.Wrong_password)
        ad.clickSignIn()
        ad.Verifying_Invalid()
    })
    it('Validate  My account search button using valid Credentials ', () => {
        ad.clearDataemail()
        ad.enterCorrectemail().type(data.valid_Email)
        ad.clearDatapassword()
        ad.enterCorrectpassword().type(data.valid_password)
        ad.verifying_Valid()
    })








    


    







})