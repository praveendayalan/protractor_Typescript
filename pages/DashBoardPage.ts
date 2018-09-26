import { element, by } from "protractor";
import { CommonPage } from "./CommonPage";
var common = new CommonPage()
export class DashBoardPage{

    json = require('../Json/DashBoardPage.json')
    DashBoardIcon = element(by.xpath(this.json.locators.DashBoardMenu.Xpath))
    Overviewtxt = element(by.xpath(this.json.locators.OverviewText.Xpath))
    Invitationtxt = element(by.xpath(this.json.locators.InvitationStatus.Xpath))
    AcceptedPatients = element(by.xpath(this.json.locators.AcceptedClients.Xpath))
    PendingPatients = element(by.xpath(this.json.locators.PendingClients.Xpath))
    SignIntext = element(by.xpath(this.json.locators.SignIn.Xpath))
    SignedInPatients = element(by.xpath(this.json.locators.SignedIn.Xpath))
    NotSignedPatients = element(by.xpath(this.json.locators.NotSignedIn.Xpath))
    AlertText = element(by.xpath(this.json.locators.Alert.Xpath))

    VerifyDashBoard(){
       this.DashBoardIcon.click()
       common.ExplicitWait(3000)
       this.Overviewtxt.getText().then((text)=>{
           console.log("Navigated to "+text+" Page")
       })
    }

    GetInvitationStatus(){
          this.Invitationtxt.getText().then((text)=>{
              console.log(text+" :")
             
          })   
    }

    GetAcceptedPatientsCount(){
        this.AcceptedPatients.getText().then((text)=>{
            console.log("Accepted Patients are "+text);
        })
    }

    GetPendingPatientsCount(){
        this.PendingPatients.getText().then((text)=>{
            console.log("Pending Patients are "+text)
        })
    }

    GetSignedInText(){
        this.SignIntext.getText().then((text)=>{
            console.log(text+" :")
        })
    }

    GetSignedInCount(){
        this.SignedInPatients.getText().then((text)=>{
            console.log("Signed-In patients are "+text)
        })
    }

    GetNotSignedInCount(){
        this.NotSignedPatients.getText().then((text)=>{
            console.log("Not Signed Patients are "+text)
        })
    }

    GetAlertText(){
        if(this.AlertText.isPresent()){
            this.AlertText.getText().then((text)=>{
                console.log("Alert displayed is "+text)
            })
        }else {
            console.log("NO ALERT FOUND")
        }
      
    }


    
    

    
}