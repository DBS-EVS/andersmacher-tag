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
var urlWorkshops ="https://forms.office.com/e/6TJFjRLc4D"
var urlMarktstände ="https://forms.office.com/e/6TJFjRLc4D"

var currentWebsite = undefined;

var popUpStart = "popUpStart";
var startMsg = "Willkommen beim Andersmachertag 2023!\n\nErkunde unsere Umgebung mit deinem Avatar und besuche Impulse, Marktstände, Workshops oder stöbere in unsere Andersmacher-Bibliothek! Nutze die Chance und #VernetzeDich in der Netzwerkzone mit weiteren Andersmachenden im Konzern!\n";
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

                

WA.room.onLeaveLayer("start_zone").subscribe(() => {
    closePopUp();
})
 

WA.room.area.onEnter("bib").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib","In der Andersmacher Bibliothek findest Inspirationen, Coole Postkarten oder etwas rund um die Themen Andersmachen.\nViele Informationen sind auf DB CrowdWorx hinterlegt.\nWenn du den WissensHub noch nicht besucht hast, musst du einmal den Nutzungsbedingungen zustimmen.",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onLeave("bib").subscribe(() => {
    closePopUp();
});



 
WA.room.area.onEnter("networking1").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_networking1","Willkommen in unserer Vernetzungszone!\nLerne neue #andersMacher aus dem gesamten Konzerzn kennen und knüpfe spannende neue Kontake.\nPersonen in diesem Bereich sind offen für neue Kontakte, erste Gespräche,\n Austausch zum andersMacherTag oder ihrem Aufgabenbereich im Konzern!\n\nViel Spaß beim Vernetzen!",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onLeave("networking1").subscribe(() => {
    closePopUp();
});


WA.room.area.onEnter("networking2").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_networking2","Willkommen in unserer Vernetzungszone!\nLerne neue #andersMacher aus dem gesamten Konzerzn kennen und knüpfe spannende neue Kontake.\nPersonen in diesem Bereich sind offen für neue Kontakte, erste Gespräche,\n Austausch zum andersMacherTag oder ihrem Aufgabenbereich im Konzern!\n\nViel Spaß beim Vernetzen!",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onLeave("networking2").subscribe(() => {
    closePopUp();
});


 
WA.room.area.onEnter("brunnen1").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_icebreaker1","Icebreaker gefällig?\nWas ist der nutzloseste Fakt, den du kennst?\nWie motivierst du dich für schwierige Aufgaben?\nWas sind deine liebsten Aktivitäten fürs Teambuilding?\n\nViel Spaß beim Kennenlernen weiterer #andersMacher im Konzern!",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onLeave("brunnen1").subscribe(() => {
    closePopUp();
});


WA.room.area.onEnter("brunnen2").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_icebreaker2","Icebreaker gefällig?\nÜber welches Thema könntest du unvorbereitet eine Präsentation halten?\nWelche Musik hörst du am liebsten bei der Arbeit?\nWer ist die klügste Person bei der Arbeit, die du kennst?\n\nViel Spaß beim Kennenlernen weiterer #andersMacher im Konzern!",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onLeave("brunnen2").subscribe(() => {
    closePopUp();
});

WA.room.area.onEnter("brunnen3").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_icebreaker3","Icebreaker gefällig?\nWas gefällt dir am meisten an deinem Job?\nWas war der beste Rat, den du jemals erhalten hast?\nHast du jemals eine Nachricht an eine falsche Person gesendet?\n\nViel Spaß beim Kennenlernen weiterer #andersMacher im Konzern!",
    [
        {
            label: "Danke!",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onLeave("brunnen3").subscribe(() => {
    closePopUp();
});


WA.room.area.onEnter("workshoparea").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_workshop","Willkommen in der Workshop-Area!\nAn jeder Workshop-Zone findest du ein Schild zur dort stattfindenden Inhalt und Referenten! Alternativ kannst du dir unser Übersichtsbilde anschauen.\n Viel Spaß!",
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

WA.room.area.onLeave("workshoparea").subscribe(() => {
    closePopUp();
})


WA.room.area.onEnter("marktplatz1").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_markt","Willkommen beim Andersmacher-Marktplatz!\nAn jedem Stand findest du ein spannendes Thema unserer Andersmacher!\nSchländere von Markstand zu Marktstand und lerne die spannenden Projekte genauer kennen!\nAn jedem Marktstand findest du genauere Details zum jeweiligen Thema oder du fragst direkt die jeweiligen Andersmacher :)\n Viel Spaß beim Umschauen!",
    [
        {
            label: "Übersicht Marktstände",
            callback: (popup => {
                WA.nav.openCoWebSite(urlMarktstände)
                isCoWebSiteOpened = true;
                closePopUp();
            })
        },
        {
            label: "Schließen",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
});

WA.room.area.onLeave("marktplatz1").subscribe(() => {
    closePopUp();
})




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

WA.ui.actionBar.addButton({
    id:"minimap",
    type:"action",
    imageSrc:"https://dbs-evs.github.io/andersmacher-tag/map_logo.png",
    toolTip:"Minimap",
    callback: async () => {
        if (currentWebsite !== undefined) {
            currentWebsite.close();
            currentWebsite = undefined;
            } else {
                //currentWebsite = await WA.nav.openCoWebSite("../minimap.html",true);
                WA.ui.modal.openModal({
                  title: "Minimap",
                  src: 'https://dbs-evs.github.io/andersmacher-tag/minimap.html',
                  allow: "fullscreen",
                  allowApi: true,
                  position: "right",
              });
              }
          }
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
