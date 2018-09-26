import { element, by, browser } from "protractor";
import { CommonPage } from "./CommonPage";
var common = new CommonPage
export class MyClientsPage {
    json = require('../Json/MyClientPageLocators.json')

    MyClientBtn = element(by.xpath(this.json.locators.Myclientmenu.Xpath))
    MyClienttext = element(by.xpath(this.json.locators.MyClienttxt.Xpath))
    NewClientBtn = element(by.xpath(this.json.locators.AddClient.Xpath))
    ClientID = element(by.xpath(this.json.locators.AddPatient.Xpath))
    SendRqstBtn = element(by.xpath(this.json.locators.SendRequest.Xpath))
    EditBtn = element(by.xpath(this.json.locators.EditIcon.Xpath))
    EditPatientName = element(by.xpath(this.json.locators.ChangePatientName.Xpath))
    EditPhoneNumber = element(by.xpath(this.json.locators.ChangePhoneNumber.Xpath))
    SaveBtn = element(by.xpath(this.json.locators.SaveButton.Xpath))
    ErrorMessage = element(by.xpath(this.json.locators.ErrorMsg.Msg))
    CancelBtn = element(by.xpath(this.json.locators.CancelButton.Xpath))
    DeleteClient = element(by.xpath(this.json.locators.DeleteIcon.Xpath))
    TerminateConnection = element(by.xpath(this.json.locators.TerminateButton.Xpath))
    ViewConnection = element(by.xpath(this.json.locators.ViewIcon.Xpath))
    DashboardId = element(by.xpath(this.json.locators.DashBoardId.Xpath))
    Level = element(by.xpath(this.json.locators.LevelInfo.Xpath))
    Status = element(by.xpath(this.json.locators.StatusInfo.Xpath))
    XpPoints = element(by.xpath(this.json.locators.XPInfo.Xpath))
    Position = element(by.xpath(this.json.locators.PositionInfo.Xpath))
    CompletedQuest = element(by.xpath(this.json.locators.CompletedQuestInfo.Xpath))
    ActiveQuest = element(by.xpath(this.json.locators.ActiveQuestInfo.Xpath))
    AnnouncementBtn = element(by.xpath(this.json.locators.AnnouncementButton.Xpath))
    NewAnnouncementBtn = element(by.xpath(this.json.locators.NewAnnoucnementButton.Xpath))
    AddSubject = element(by.xpath(this.json.locators.Subject.Xpath))
    AddText = element(by.xpath(this.json.locators.Message.Xpath))
    ChooseQuestion = element(by.xpath(this.json.locators.QuestionCheckBox.Xpath))
    Donebtn = element(by.xpath(this.json.locators.DoneButton.Xpath))
    AppointmentBtn = element(by.xpath(this.json.locators.AppointmentButton.Appointment))
    NewAppointmentBtn = element(by.xpath(this.json.locators.NewAppointmentButton.NewAppointment))
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
    AppointmentEditIcon = element(by.xpath(this.json.locators.AppointmentEdit.Xpath))
    ChangeSelectStartTime = element(by.xpath(this.json.locators.ChangeStartTime.Xpath))
    ChangeSelectEndTime = element(by.xpath(this.json.locators.ChangeEndTime.Xpath))
    ChangeSelectCategory = element(by.xpath(this.json.locators.ChangeCategory.Xpath))
    DeleteAppointmentBtn = element(by.xpath(this.json.locators.DeleteAppointment.Xpath))

    AddNewClient() {
        this.MyClientBtn.click();
        this.MyClienttext.getText().then((text) => {
            console.log("Navigated to " + text)
        })

        this.NewClientBtn.click()
        common.ExplicitWait(3000)
        this.ClientID.sendKeys(this.json.locators.PatientID.ID)
        common.ExplicitWait(3000)
        this.SendRqstBtn.click()
    //    if(this.ErrorMessage.isPresent()){
    //        this.CancelBtn.click()
    //    }else{
    //     common.ExplicitWait(3000)
    //     console.log("Connection Sent for"+this.json.locators.PatientID.ID)
    //    }
        

    }

    EditNameAndPhone(){
        this.EditBtn.click()
        common.ExplicitWait(3000)
        this.EditPatientName.clear()
        this.EditPatientName.sendKeys(this.json.locators.EditPatientInfo.PatientData)
        this.EditPhoneNumber.clear()
        this.EditPhoneNumber.sendKeys(this.json.locators.EditPhoneInfo.PhoneData)
        this.SaveBtn.click()
        console.log("Edit is Done")
        common.ExplicitWait(3000)

    }

    DeleteAClient(){
          this.DeleteClient.click()
          common.ExplicitWait(3000)
          this.TerminateConnection.click()
          common.ExplicitWait(3000)
          console.log("Connection Deleted for "+this.json.locators.PatientID.ID)

    }

    ViewAClient(){
          this.ViewConnection.click()
          common.ExplicitWait(3000)
          this.DashboardId.getText().then((text)=>{
              expect(text).toEqual("ID: 2375")
              
          })
    }

    PatientInformation(){
        this.Level.getText().then((text)=>{
            console.log("LEVEL: "+text)
        })
        this.Status.getText().then((text)=>{
            console.log("STATUS: "+text)
        })
        this.XpPoints.getText().then((text)=>{
            console.log("XP POINTS: "+text)
        })
        this.Position.getText().then((text)=>{
            console.log("POSITION: "+text)
        })
        this.CompletedQuest.getText().then((text)=>{
            console.log("COMPLETED QUEST: "+text)
        })
        this.ActiveQuest.getText().then((text)=>{
            console.log("ACTIVE QUEST: "+text)
        })
    }

    Announcement(){
        this.AnnouncementBtn.click()
        common.ExplicitWait(3000)
      

    }

    NewAnnouncement(){
        this.NewAnnouncementBtn.click()
        common.ExplicitWait(3000)
    }

    SendAnnouncementtoParticularClient(){
        this.AddSubject.sendKeys(this.json.locators.SubjectMessage.AnnouncementMessage)
        common.ExplicitWait(3000)
        this.AddText.sendKeys(this.json.locators.RandomMessage.Message)
        this.ChooseQuestion.click()
        this.Donebtn.click()
        common.ExplicitWait(3000)
        console.log("Announcement sent Successfully")
    }

    Appointment(){
        this.AppointmentBtn.click()
        common.ExplicitWait(3000)
       
    }

    SendAppointmenttoParticularClient(){
        
           this.NewAppointmentBtn.click()
           common.ExplicitWait(3000)
           this.AddTitle.sendKeys(this.json.locators.AppointmentTitleInfo.TitleInfo)
           this.AddLocation.sendKeys(this.json.locators.AppointmentLocationInfo.LocationInfo)
           this.WithWhom.sendKeys(this.json.locators.WithWhomInfo.Info)
           common.ExplicitWait(3000)
           this.StartTimeDropDwn.click()
           this.SelectStartTime.click()
           this.EndTimeDropDwn.click()
           this.SelectEndTime.click()
           this.AddAppointmentText.sendKeys(this.json.locators.RandomMessage.Message)
           this.SelectCategory.click()
           this.SendAppointment.click()
           common.ExplicitWait(3000)
           console.log("Appointment Sent Successfully")
    }

    EditAppointmentforParticularClient(){
        this.AppointmentEditIcon.click()
         common.ExplicitWait(5000)
        this.ChangeSelectCategory.click()
        
        common.ExplicitWait(3000)
        this.SendAppointment.click()
        common.ExplicitWait(3000)
        console.log("Appointment Edited Successfully")

    }

    DeleteAppointmentforParticularClient(){
        this.AppointmentEditIcon.click()
        common.ExplicitWait(5000)
        this.DeleteAppointmentBtn.click()
        console.log("Appointment Deleted Successfully")
    }


}