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

var popUpStart = "popUpStart";
var startMsg = "Willkommen bei unserer Live-Demo von DB WorkAdventure zum Digital Workplace Anwendertag!\n\nErkunde unsere Umgebung mit deinem Avatar, um die verschiedenen Funktionen und Möglichkeiten kennenzulernen. Nutze die Chance und #VernetzeDich mit anderen Teilnehmern!\nIm Programm des Anwendertages kannst du unseren Vortrag zu digital Eventplattformen bzw. unseren Markstand zur ortsunabhängigen Zusammenarbeit in virtuellen Büros besuchen, um mehr zu erfahren!";
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
 
WA.room.onEnterLayer("koch_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpKoch","Auch Videos von Plattformen wie MS Streams können als Fenster eingebettet werden!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("koch_program").subscribe(() => {
    closePopUp();
})
 
WA.room.onEnterLayer("startImage_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpImage","Als Webanwendung läuft WorkAdventure ohne Installation im Browser, auch auf mobilen Geräten! In wenigen Sekunden sind Nutzer so startklar. Unsere Umgebungen können so konfiguriert werden, dass sie DB intern (Single Sign On Authentifizierung) oder öffentlich erreichbar sind. Auch können einzelne externe Personen Zugang erhalten.",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("startImage_program").subscribe(() => {
    closePopUp();
})





WA.room.onEnterLayer("main_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpMain","Auch LiveStreams von DB WebCast sind integrierbar und können in die Umgebung eingebunden werden!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("main_program").subscribe(() => {
    closePopUp();
})
WA.room.onEnterLayer("gif_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpGif","Informationsausspielung an Infobildschirmen?\nAuch virtuell kein Problem!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("gif_program").subscribe(() => {
    closePopUp();
})


WA.room.onEnterLayer("grie_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpGrie","Alternativ können Videos auch direkt in die Umgebung integriert werden!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("grie_program").subscribe(() => {
    closePopUp();
})


WA.room.onEnterLayer("program7").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpProgram7","Webinhalte die nicht direkt in WorkAdventure darstellbar sind,\n können stattdessen verlinkt werden!\n\n An unserem Fahrkartenautomat findest du z.B. die Bestellung von Mitarbeiterfahrkarten!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }
        ]);
})

WA.room.onLeaveLayer("program7").subscribe(() => {
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
WA.room.onEnterLayer("program6").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpProgram6","Eingebundene Webinhalte können Workshopformate unterstützen oder unterhalten und zum Vernetzen anregen!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("program6").subscribe(() => {
    closePopUp();
})
WA.room.onEnterLayer("crossing_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpCrossing","Kartenübergänge ermöglichen einen nahtlosen Übergang zwischen zwei Umgebungen.\n\nSo kombinierst du verschiedene Bereiche passend für dein Event!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("crossing_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("portal_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpPortal","Auch im Arbeitsalltag sind unsere Umgebung als virtuelles Büro nutzbar!\n\nSo bringen wir Teamgefühl, Austausch und spontane Gespräche zur Abstimmung geht aber verloren.\n Wir ändern das und bringen das Bürofeeling ins Homeoffice",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("portal_program").subscribe(() => {
    closePopUp();
})


WA.room.onEnterLayer("exit_portal_jaz").subscribe(() => {
  WA.nav.goToPage("https://dbsw.sharepoint.com/sites/JAZ-digitalworkplace/SitePages/Lobby.aspx")
})



WA.room.onEnterLayer("jaz_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpJaz","Für  einen noch stärkeren Konferenz- und Eventservice lässt sich DB WorkAdventure problemlos in JAZ integrieren!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("jaz_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("choices_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpChoices","Abstimmungen der anderen Art!\n\nMit unseren interaktiven Elementen gibst du durch die Positionierung deines Avatars deine Stimme ab",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("choices_program").subscribe(() => {
    closePopUp();
})



WA.room.onEnterLayer("sign_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpSigns","Texte und Beschriftungen können durch Moderatoren jederzeit angepasst werden",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("sign_program").subscribe(() => {
    closePopUp();
})






WA.room.onEnterLayer("schalter_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpSchalter","Netzwerk-Bereiche bringst du Leute durch Aktivitäten wie Speed-Networking zusammen",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("schalter_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("schalter1_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpSchalter1","Was ist deine Lieblingserinnerung an eine Bahnreise?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("schalter1_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("schalter2_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpSchalter2","Seit wann arbeitest du bei der Bahn?\n In welchen Bereichen warst du aktiv?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("schalter2_program").subscribe(() => {
    closePopUp();
})
WA.room.onEnterLayer("schalter3_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpSchalter3","Was ist dein Lieblingsbuch?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("schalter3_program").subscribe(() => {
    closePopUp();
})
WA.room.onEnterLayer("schalter4_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpSchalter4","Welchen Star hast du schonmal getroffen oder möchtest einmal treffen?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("schalter4_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("schalter5_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpSchalter5","Für was ist deine Abteilung zuständig?",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("schalter5_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("workshop_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpWorkshop","In Besprechungszonen wird man automatisch mit allen Personen zusammengeschaltet,\n die sich mit ihrem Avatar dort befinden.\n\n Parallele Workshopsessions, Randgespräche, Nachfragen an die Referenten, Frei Bewegung für Teilnehmer – alles kein Problem!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("workshop_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("worldtour_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpWorldtour","Umgebungen sind vollständig individualisierbar, alternativ kannst du die zu deinem Event passende Standardkarten wählen und mit uns anpassen!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("worldtour_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("community_zone").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpCommunity","Du interessierst dich für ortsunabhängige Zusammenarbeit mit WorkAdventure und weiterführenden Technologien und Services? Werde Mitglied in unserer Metawork-Community!",[
        {
            label: "Beitreten",
            callback: (popup => {
				WA.nav.openTab("https://db.de/metawork")
            })
        },{
            label: "Blick in die Zukunft",
            callback: (popup => {
				WA.nav.openCoWebSite("https://www.youtube-nocookie.com/embed/uVEALvpoiMQ?autoplay=1", false, "autoplay; fullscreen; encrypted-media")
            })
        }
        ]);
})

WA.room.onLeaveLayer("community_zone").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("whiteboard_program").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpWhiteboard","Auch das Conceptboard-Whiteboard ist in die Umgebung integrierbar.",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer("whiteboard_program").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer(zoneTutorial).subscribe(() => {
    
    
    //<iframe width="640" height="360" src="https://web.microsoftstream.com/embed/video/ca24bcea-3cab-4878-8b34-65e6bf87939f?autoplay=false&showinfo=true" allowfullscreen style="border:none;"></iframe>
    WA.nav.openCoWebSite(urlTutorial, false, "autoplay;camera;microphone;fullscreen;encrypted-media");
   isCoWebSiteOpened = true;
   currentPopup =  WA.ui.openPopup("popUpTutorial","Einige Webanwendungen die eine Einbindung erlauben, können direkt in WorkAdventure geöffnet werden.\n\n So wie unser Tutorialvideo",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);
})

WA.room.onLeaveLayer(zoneTutorial).subscribe(() => {
    closePopUp();

    if (isCoWebSiteOpened) {
        WA.nav.closeCoWebSite();
        isCoWebSiteOpened = false;
    }
})

WA.room.onEnterLayer("program2").subscribe(() => {
   currentPopup =  WA.ui.openPopup("popUpProgram2","Noch Fragen?\nSprich uns während des Anwendertag im Informationsbereich an oder schreib uns eine kurze Mail mit deinen Fragen!",[
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        },{
            label: "E-Mail Team EVS",
            callback: (popup => {
				WA.nav.openTab(mailToEvs)
            })
        }
        ]);
})

WA.room.onLeaveLayer("program2").subscribe(() => {
    closePopUp();
})

WA.room.onEnterLayer("bingo").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUpEmail",mailMsg,[
         {
             label: "E-Mail Team EVS",
             callback: (popup => {
                 WA.nav.openTab(mailToEvs)
             })
         }
         ]);
 })
 
 WA.room.onLeaveLayer("bingo").subscribe(() => {
     closePopUp();
 })

WA.onInit().then(async () => {
	
    console.log("Scripting API ready")
    console.log("Player tags: ", WA.player.tags)
    var pos= await WA.player.getPosition()
   if(pos.x<2100){
        currentPopup =   WA.ui.openPopup(popUpStart, startMsg,[
    
        {
            label: "OK",
            callback: (popup => {
                closePopUp();
            })
        }]);

   }
    
    
    
    WA.room.onEnterLayer("votePos").subscribe(() => {
      console.log("VotePos: ", WA.state.votePos)
      WA.state.votePos++
    })
    WA.room.onLeaveLayer("votePos").subscribe(() => {
      console.log("VotePos: ", WA.state.votePos)
      if (WA.state.votePos === 0) return
      WA.state.votePos--
    })
    WA.room.onEnterLayer("voteNeg").subscribe(() => {
      console.log("voteNeg: ", WA.state.voteNeg)
      WA.state.voteNeg++
    })
    WA.room.onLeaveLayer("voteNeg").subscribe(() => {
      console.log("voteNeg: ", WA.state.voteNeg)
      if (WA.state.voteNeg === 0) return
      WA.state.voteNeg--
    })
    WA.room.onEnterLayer("voteNeut").subscribe(() => {
      console.log("voteNeut: ", WA.state.voteNeut)
      WA.state.voteNeut++
    })
    WA.room.onLeaveLayer("voteNeut").subscribe(() => {
      console.log("voteNeut: ", WA.state.voteNeut)
      if (WA.state.voteNeut === 0) return
      WA.state.voteNeut--
    })
  
    let voteResetPopup;
    WA.room.onEnterLayer("voteRes").subscribe(() => {
      voteResetPopup = WA.ui.openPopup(
        "resetPopup",
        "Soll das Voting zurückgesetzt werden?",
        buttons
      )
    })
    WA.room.onLeaveLayer("voteRes").subscribe(() => {
      voteResetPopup.close()
    })
     
  
      // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
      bootstrapExtra()
        .then(() => {
          console.log("Scripting API Extra ready")
		 
        })
        .catch(e => console.error(e))
    })
    .catch(e => console.error(e))
	










export {};
