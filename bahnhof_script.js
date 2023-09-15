import { bootstrapExtra } from "@workadventure/scripting-api-extra";

//import { } from "https://unpkg.com/@workadventure/scripting-api-extra";
//import {track1Map, track2Map, track3Map, track4Map, track5Map, track6Map, setTrackContent, refreshSigns } from "./sign_script.js";
//import {openPopupWithWebsiteYesNo, closePopupWithWebsite } from "./popUp_script.js";
//import {programMsg, urlProgram } from "./vars.js";
console.log("Script started successfully")

var currentPopup = undefined;
var isCoWebSiteOpened =  false;
var urlTutorial = "https://web.microsoftstream.com/embed/video/ca24bcea-3cab-4878-8b34-65e6bf87939f?autoplay=true";
var zoneTutorial = "tutorial";
var urlWorkshops ="https://forms.office.com/Pages/DesignPageV2.aspx?subpage=design&FormId=nC2noeZJbU-a9lqvoRg7_T_PQMu9r7FKreE1lYkkCDNUOUZFRExQNTVYUDA5NE9MUFlPU1Y3MEdEWC4u&Token=b16e1aa985234a7b9305b097bd68d904"

var popUpStart = "popUpStart";
var startMsg = "Willkommen beim Andersmachertag 2023!\n\nErkunde unsere Umgebung mit deinem Avatar und besuche Marktstände, Workshops oder stöbere in unsere Andersmacher-Bibliothek! Nutze die Chance und #VernetzeDich in der Netzwerkzone mit weiteren Andersmachern im Konzern!\n";
var popUpEmail = "popUpEmail";
var mailMsg = "Bingo? Sende uns deine Bilder um zu gewinnen!";
var mailToEvs = "mailto:SendIn.Enterprise.VoIP.Services@deutschebahn.com?subject=WA-Mail";

		
function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}




const buttons = [
    {
      label: "Reset",
      className: "error",
      callback: () =>
        (WA.state.votePos = WA.state.voteNeg = WA.state.voteNeut = 0)
    }
  ]

 
  WA.room.onEnterLayer("start_zone").subscribe(() => {
    currentPopup =   WA.ui.openPopup(popUpStart, startMsg,[
    
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);

    
        
        
});
        
        

WA.room.onLeaveLayer("start_zone").subscribe(() => {
    closePopUp();
})
 
 
WA.room.area.onEnter("brunnen1").subscribe(() => {
    currentPopup =  WA.ui.openPopup(popUp_icebreaker1,"Icebreaker gefällig?\n
    Was ist der nutzloseste Fakt, den du kennst?\n
    Wie motivierst du dich für schwierige Aufgaben?\n
    Was sind deine liebsten Aktivitäten fürs Teambuilding?",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});


WA.room.area.onEnter("brunnen2").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_icebreaker2","Icebreaker gefällig?\nÜber welches Thema könntest du unvorbereitet eine Präsentation halten?\nWelche Musik hörst du am liebsten bei der Arbeit?\nWer ist die klügste Person bei der Arbeit, die du kennst?",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onEnter("brunnen3").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_icebreaker3","Icebreaker gefällig?\n
    Was gefällt dir am meisten an deinem Job?\n
    Was war der beste Rat, den du jemals erhalten hast?\n
    Hast du jemals eine Nachricht an eine falsche Person gesendet?",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});


WA.room.area.onEnter("workshoparea").subscribe(() => {
    currentPopup =  WA.ui.openPopup("workshoparea","Willkommen in der Workshop-Area!\nAn jedem Stand findest du ein Schild zur dort stattfindenden Inhalt und Referenten! Alternativ kannst du dir unser Übersichtsbilde anschauen.\n Viel Spaß!",
    [
        {
            label: "Übersicht Workshops",
            callback: (popup => {
                WA.nav.openCoWebSite(urlWorkshops)
                isCoWebSiteOpened = true;
                closePopUp();
            })
        }
        ]);
});


WA.room.onEnterLayer("ticket_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpTicket","Mitarbeiterfahrkarten bestellen?",[
        {
            label: "Bestellen",
            callback: (popup => {
                WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#")
                closePopUp();
            })
        }
        ]);
})

WA.room.onLeaveLayer("ticket_program").subscribe(() => {
    closePopUp();
})
WA.room.onEnterLayer("ticket2_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpTicket2","Mitarbeiterfahrkarten bestellen?",[
        {
            label: "Bestellen",
            callback: (popup => {
                WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#")
                closePopUp();
            })
        }
        ]);
})

WA.room.onLeaveLayer("ticket2_program").subscribe(() => {
    closePopUp();
})


WA.onInit().then(async () => {
	
    console.log("Scripting API ready")
    console.log("Player tags: ", WA.player.tags)
    var pos= await WA.player.getPosition()
   
        currentPopup =   WA.ui.openPopup(popUpStart, startMsg,[
    
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);

    
    

     
  
      // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
      bootstrapExtra()
        .then(() => {
          console.log("Scripting API Extra ready")
		 
        })
        .catch(e => console.error(e))
    })
    .catch(e => console.error(e))
	










export {};
