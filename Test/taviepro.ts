import { browser, element, by } from "protractor";
import { LoginPage } from "../pages/LoginPage";
import { CommonPage } from "../pages/CommonPage";
import { MyAccountPage } from "../pages/MyAccountPage";
import { DashBoardPage } from "../pages/DashBoardPage";
import { MyClientsPage } from "../pages/MyClientsPage";
import { AnnouncementPage } from "../pages/AnnouncementPage";
import { MyAppointmentPage } from "../pages/MyAppointmentPage";
var common = new CommonPage();
describe("Login", () => {
    var login = new LoginPage();

    it("Open Browser", () => {
        login.OpenBrowser()
        common.ExplicitWait(3000)



    })

    it("verify LoginPage", () => {
        login.VerifyLogin()
        common.ExplicitWait(3000)
        console.log("Login Successful")
    })

    it("verify LandingPage", () => {
        login.VerifyLandingPage()
        console.log("Navigated to My Account page")
    })
})

describe("MyAccount", () => {
    var myaccount = new MyAccountPage()
    it("UpdateAccountDetails", () => {
        common.ExplicitWait(3000)
        myaccount.UpdateMyAccountDetails()

    })

})

describe("DashBoard", () => {
    var dashboard = new DashBoardPage()
    it("verify Dashboard", () => {
        dashboard.VerifyDashBoard()
        dashboard.GetInvitationStatus()
        dashboard.GetAcceptedPatientsCount()
        dashboard.GetPendingPatientsCount()
        dashboard.GetSignedInText()
        dashboard.GetSignedInCount()
        dashboard.GetNotSignedInCount()
        //dashboard.GetAlertText()

    })

    
})

describe("MyClients",()=>{
    var myclient = new MyClientsPage()
    it("Add New Client",()=>{
        myclient.AddNewClient()
    })

    it("Edit Patient Details", ()=>{
        myclient.EditNameAndPhone()
    })
    it("Delete a client",()=>{
        myclient.DeleteAClient()
    })
    it("View a Client",()=>{
        myclient.ViewAClient()
    })
    it("MyClient Dashboard Details",()=>{
        myclient.PatientInformation()
    })
    it("My Announcement",()=>{
        myclient.Announcement()
        myclient.NewAnnouncement()
        myclient.SendAnnouncementtoParticularClient()
        
    })

    it("My Appointment",()=>{
        
        myclient.Appointment()
        myclient.SendAppointmenttoParticularClient()
        myclient.EditAppointmentforParticularClient()
        myclient.DeleteAppointmentforParticularClient()
    })

})

describe("My Announcements",()=>{
    var announcement = new AnnouncementPage()
    it("NewAnnouncement",()=>{
        announcement.NewAnnouncement()
    })
    it("Send Announcement to all clients",()=>{
        announcement.SendAnnouncementToAllClient()
    })
    it("View Announcement",()=>{
        announcement.ViewAnnouncement()
    })
    it("Forward Announcement",()=>{
        announcement.ForwardAnnouncement()
    })
})

describe("MY APPOINTMENT",()=>{
    var myappointment = new MyAppointmentPage()
    it("Navigate to My Appointment",()=>{
        myappointment.OpenAppointment()
        
    })

    it("Add a New Appointment",()=>{
        myappointment.NewAppointment()
    })

    it("Send an Appointment to Particular Client",()=>{
        myappointment.SendAppointmentToParticularClients()
    })

    it("Edit Appointment",()=>{
        myappointment.EditAppointmentToParticularClient()
    })

    it("Delete Appointment",()=>{
        myappointment.DeleteAppointment()
    })
})