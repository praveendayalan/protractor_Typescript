import { element, by, Key, browser } from "protractor";
import { CommonPage } from "./CommonPage";
var common = new CommonPage()
export class MyAppointmentPage{

    json = require('../Json/MyAppointmentPageLocators.json')

    AppointmentButton = element(by.xpath(this.json.locators.MyAppointmentBtn.Xpath))
    NewAppointmentButton = element(by.xpath(this.json.locators.NewAppointment.Xpath))
    ClickClient = element(by.xpath(this.json.locators.EnterClient.Xpath))
    SelectClient = element(by.xpath(this.json.locators.SelectClient.Xpath))
    AddTitle = element(by.xpath(this.json.locators.AppointmentTitle.Xpath))
    AddLocation = element(by.xpath(this.json.locators.AppointmentLocation.Xpath))
    WithWhom = element(by.xpath(this.json.locators.WithWhom.Xpath))
    StartTimeDropDwn = element(by.xpath(this.json.locators.StartTimeDropDown.Xpath))
    EndTimeDropDwn = element(by.xpath(this.json.locators.EndTimeDropDown.Xpath))
    SelectStartTime = element(by.xpath(this.json.locators.StartTime.Xpath))
    SelectEndTime = element(by.xpath(this.json.locators.EndTime.Xpath))
    AddAppointmentText = element(by.xpath(this.json.locators.AppointmentText.Xpath))
    SelectCategory = element(by.xpath(this.json.locators.Category.Xpath))
    SendAppointment = element(by.xpath(this.json.locators.AppointmentDoneButton.Xpath))
    EditAppointment = element(by.xpath(this.json.locators.AppointmentEditIcon.Xpath))
    ChangeCategory = element(by.xpath(this.json.locators.ChangeSelectCategory.Xpath))
    EditDoneBtn = element(by.xpath(this.json.locators.EditDoneButton.Xpath))
    DeleteBtn = element(by.xpath(this.json.locators.DeleteAppointmentButton.Xpath))

    OpenAppointment(){
        this.AppointmentButton.click()
        common.ExplicitWait(3000)
    }

    NewAppointment(){
        this.NewAppointmentButton.click()
        common.ExplicitWait(3000)
    }

    SendAppointmentToParticularClients(){
        this.ClickClient.click()
        common.ExplicitWait(3000)
        this.SelectClient.click()
        this.AddTitle.sendKeys(this.json.locators.AppointmentTitleInfo.TitleInfo)
           this.AddLocation.sendKeys(this.json.locators.AppointmentLocationInfo.LocationInfo)
           common.ExplicitWait(5000)
        
        this.WithWhom.sendKeys(this.json.locators.WithWhomInfo.Info)
          
           this.StartTimeDropDwn.click()
           common.ExplicitWait(5000)
           browser.actions().mouseMove(this.SelectStartTime).perform();
           this.SelectStartTime.click()
           this.EndTimeDropDwn.click()
           this.SelectEndTime.click()
           this.AddAppointmentText.sendKeys(this.json.locators.RandomMessage.Message)
           this.SelectCategory.click()
           this.SendAppointment.click()
           common.ExplicitWait(3000)
           console.log("Appointment Sent Successfully")
        
    }

    EditAppointmentToParticularClient(){
           this.EditAppointment.click()
           common.ExplicitWait(5000)
           this.ChangeCategory.click()
           this.EditDoneBtn.click().then(function(){
               console.log("Appointment Edited Successfully")
           })
    }

    DeleteAppointment(){
        common.ExplicitWait(3000)
        this.EditAppointment.click()
        common.ExplicitWait(3000)
        this.DeleteBtn.click()
    }
}