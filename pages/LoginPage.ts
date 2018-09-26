import { by, element, browser } from "protractor";

export class LoginPage {
    json = require('../Json/LoginPageLocators.json')

    
    UserName = element(by.id(this.json.locators.userName.id))
    Password = element(by.id(this.json.locators.Password.id))
    SignIn = element(by.id(this.json.locators.Signin.id))
    LandingPage = element(by.xpath(this.json.locators.LandingPage.Xpath))
    OpenBrowser(){
        browser.get(this.json.URL);
    }

    VerifyLogin(){
        this.UserName.sendKeys(this.json.locators.UserNameData.UsrData)
        this.Password.sendKeys(this.json.locators.PasswordData.pwdData)
        this.SignIn.click()
    }

    VerifyLandingPage(){
          this.LandingPage.getText().then((text)=>{
              expect(text).toEqual(this.json.locators.LandingpageData.LandData)
          })
    }
}