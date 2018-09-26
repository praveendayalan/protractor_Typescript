import { MyClientsPage } from "./MyClientsPage";
import { CommonPage } from "./CommonPage";
import { element, by } from "protractor";


var myclientpage = new MyClientsPage()
var common = new CommonPage()
export class AnnouncementPage {

    json = require('../Json/AnnouncementPageLocators.json')
    AnnouncementMenuBtn = element(by.xpath(this.json.locators.AnnouncementMenu.Xpath))
    SendToAllClientBtn = element(by.xpath(this.json.locators.AllClients.Xpath))
    AddSubject = element(by.xpath(this.json.locators.Subject.Xpath))
    AddText = element(by.xpath(this.json.locators.Message.Xpath))
    ChooseQuestion = element(by.xpath(this.json.locators.QuestionCheckBox.Xpath))
    Donebtn = element(by.xpath(this.json.locators.DoneButton.Xpath))
    ViewBtn = element(by.xpath(this.json.locators.ViewAnnouncement.Xpath))
    VerifyGetMessage = element(by.xpath(this.json.locators.GetMessage.Xpath))
    ForwardAnnouncementBtn = element(by.xpath(this.json.locators.ForwardAnnouncementButton.Xpath))
    ForwardDoneBtn = element(by.xpath(this.json.locators.ForwardDoneButton.Xpath))
    EnterClientName = element(by.xpath(this.json.locators.ClientName.Xpath))
    ChooseClient = element(by.xpath(this.json.locators.ChooseClientName.Xpath))


    NewAnnouncement() {
        this.AnnouncementMenuBtn.click()
        common.ExplicitWait(3000)
        myclientpage.NewAnnouncement()
        common.ExplicitWait(3000)
    }

    SendAnnouncementToAllClient(){
        this.SendToAllClientBtn.click()
        this.AddSubject.sendKeys(this.json.locators.SubjectMessage.AnnouncementMessage)
        common.ExplicitWait(3000)
        this.AddText.sendKeys(this.json.locators.RandomMessage.Message)
        this.ChooseQuestion.click()
        this.Donebtn.click()
        common.ExplicitWait(3000)
        console.log("Announcement sent Successfully to all clients")
  

    }

    ViewAnnouncement(){
        this.ViewBtn.click() 
        common.ExplicitWait(3000)
        this.VerifyGetMessage.getText().then((text)=>{
            expect(text).toEqual(this.json.locators.TitleMessage.Msg)
        })
    }

    ForwardAnnouncement(){
        common.ExplicitWait(3000)
      this.ForwardAnnouncementBtn.click()
      this.EnterClientName.click()
      common.ExplicitWait(3000)
      this.ChooseClient.click()
      this.ForwardDoneBtn.click()
      common.ExplicitWait(3000)

    }

}
