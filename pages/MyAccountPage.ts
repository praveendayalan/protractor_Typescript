import { by, element, browser, ProtractorExpectedConditions, protractor, Key } from "protractor";
import { CommonPage } from "./CommonPage";
import { ENGINE_METHOD_PKEY_ASN1_METHS } from "constants";
var common = new CommonPage()
export class MyAccountPage{
     
   json = require('../Json/MyAccountPageLocators.json')

   UserTxt = element(by.xpath(this.json.locators.UserNameText.Xpath))
   EmailTxt = element(by.xpath(this.json.locators.EmailText.Xpath))
   TitleTxt = element(by.xpath(this.json.locators.Title.Xpath))
   AffliationTxt = element(by.xpath(this.json.locators.Affiliation.Xpath))
   SaveButton =element(by.xpath(this.json.locators.SaveBtn.Xpath))
   SuccessMsg = element(by.id(this.json.locators.Successmsg.id))

   UpdateMyAccountDetails(){
       this.UserTxt.clear()
       this.UserTxt.sendKeys(this.json.locators.UserNameData.UsrData)
       this.TitleTxt.clear()
       this.TitleTxt.sendKeys(this.json.locators.TitleData.Titledata)
       this.AffliationTxt.clear()
       this.AffliationTxt.sendKeys(this.json.locators.AffiliationData.Affiliationdata)
       common.ExplicitWait(3000)
      this.SaveButton.click()
      common.ExplicitWait(3000)
     this.SuccessMsg.getText().then((text)=>{
         console.log("ALERT "+ text + " is captured")
     })

      
   }
}