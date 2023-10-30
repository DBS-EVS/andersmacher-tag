import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log("Script started successfully");

var currentPopup = undefined;
var urlWorkshops ="https://forms.office.com/e/6TJFjRLc4D";
var urlMarktstände ="https://forms.office.com/e/6TJFjRLc4D";

var currentWebsite = undefined;

var popUpStart = "popUpStart";
var startMsg = "Willkommen beim Andersmachertag 2023!\n\nErkunde unsere Umgebung mit deinem Avatar und besuche Impulse, Marktstände, Workshops oder stöbere in unsere Andersmacher-Bibliothek! Nutze die Chance und #VernetzeDich in der Netzwerkzone mit weiteren Andersmachenden im Konzern!\n";

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

const feedbackPopUpArea = new Map ([
    ["feedbackZone1", "popUpFeedback1"],
    ["feedbackZone2", "popUpFeedback2"],
    ["feedbackZone3", "popUpFeedback3"],
    ["feedbackZone4", "popUpFeedback4"],
    ["feedbackZone5", "popUpFeedback5"],
    ["feedbackZone6", "popUpFeedback6"],
    ["feedbackZone7", "popUpFeedback7"],
    ["feedbackZone8", "popUpFeedback8"],
])

var urlFeedback = "https://ideen.app.db.de/SurveyModule/index.php?r=survey/index&sid=798975";
var msgFeedback = "Möchtest du uns Feedback geben?";
var labelFbYes = "Na klar!";
var labelFbNo = "Lieber nicht";

// feedback sites
for (let[popUpArea, popUpId] of feedbackPopUpArea.entries()) {
    WA.room.area.onEnter(popUpArea).subscribe(() => {
        currentPopup = WA.ui.openPopup(popUpId, msgFeedback, [
            {
                label: labelFbYes,
                className: "primary",
                callback: (popup) => {
                    WA.nav.openTab(urlFeedback);
                    popup.close();
                    currentPopup = undefined;
                }
            },
            {
                label: labelFbNo,
                callback: (popup) => {
                    popup.close();
                    currentPopup = undefined;
                }
            }
        ])
    })

    WA.room.area.onLeave(popUpArea).subscribe(() => {
        closePopUp();
    })
}


WA.room.onLeaveLayer("start_zone").subscribe(() => {
    closePopUp();
})

WA.room.area.onEnter("bib").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib","In der Andersmacher Bibliothek findest du Inspirationen, Coole Postkarten oder etwas rund um die Themen Andersmachen.\nViele Informationen sind auf DB CrowdWorx hinterlegt.\nWenn du den WissensHub noch nicht besucht hast, musst du einmal den Nutzungsbedingungen zustimmen.",
    [
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        }
    ]);
});

WA.room.area.onLeave("bib").subscribe(() => {
    console.log("leaving bib");
    closePopUp();
});

WA.room.area.onEnter("artikel_1").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib_artikel1","Lerne Methoden-Tipps und unsere Figurensammlung kennen!",
    [
        {
            label: "Methoden-Tipps",
            callback: (popup => {
                WA.nav.openTab("https://ideen.app.db.de/IdeaManagement/List/23?page=1&itemsPerPage=40&category=d243a207-e63c-440d-a213-8e10edf0d906")
            })
        },
        {
            label: "Figurensammlung",
            callback: (popup => {
                WA.nav.openTab("https://ideen.app.db.de/IdeaManagement/List/23?page=1&itemsPerPage=40&category=c02acff6-19f9-4367-9e7e-893b7d556d19")
            })
        },
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        },        
    ]);
});

WA.room.area.onLeave("artikel_1").subscribe(() => {
    closePopUp();
});

WA.room.area.onEnter("artikel_2").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib_artikel2","Kennst du schon DB Zeichner?",
    [
        {
            label: "DB Zeichner der Film",
            callback: (popup => {
                WA.nav.openTab("https://db-planet.deutschebahn.com/pages/db-zeichner-2/apps/content/db-zeichner-der-film")
            })
        },
        {
            label: "DB Zeichner Startseite",
            callback: (popup => {
                WA.nav.openTab("https://db-zeichner.training/")
            })
        },
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        },
    ]);
});

WA.room.area.onLeave("artikel_2").subscribe(() => {
    closePopUp();
});

WA.room.area.onEnter("artikel_3").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib_artikel3","Lerne mehr über das Ideenmanagement",
    [
        {
            label: "DB Ideenmanagement entdecken",
            callback: (popup => {
                WA.nav.openTab("https://db-planet.deutschebahn.com/pages/ideenmanagement-mitarbeiter/apps/content/ideen-einreichen")
            })
        },
        {
            label: "Anmeldung zum #andersmacher Newsletter",
            callback: (popup => {
                WA.nav.openTab("https://idm.newsletter.deutschebahn.com/f/236382-213061/")
            })
        },
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        },    
    ]);
});

WA.room.area.onLeave("artikel_3").subscribe(() => {
    closePopUp();
});

WA.room.area.onEnter("artikel_4").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib_artikel4","Neue Methoden gefragt? Jetzt einsteigen!",
    [
        {
            label: "Facilation",
            callback: (popup => {
                WA.nav.openTab("https://db-planet.deutschebahn.com/pages/individuelle-methodische-begleitung/apps/blog/facilitation-2")
            })
        },
        {
            label: "Mein Fahrplan",
            callback: (popup => {
                WA.nav.openTab("https://db-planet.deutschebahn.com/pages/medien-und-kommunikationsdienste/apps/blog/unsere-neuigkeiten/view/1b23f75e-47cc-4dfc-a671-4888d14f73ce")
            })
        },
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        },    
    ]);
});

WA.room.area.onLeave("artikel_4").subscribe(() => {
    closePopUp();
});

WA.room.area.onEnter("artikel_5").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib_artikel5","Erfahre mehr über weitere #andersmacher im Konzern",
    [
        {
            label: "Ralf als #andersmacher",
            callback: (popup => {
                WA.nav.openTab("https://db-planet.deutschebahn.com/pages/ideen-und-betriebliches-innovationsmanagement/apps/blog/unser-andersmacher-erzaehlt")
            })
        },
        {
            label: "Anmeldung zum #andersmacher Newsletter",
            callback: (popup => {
                WA.nav.openTab("https://idm.newsletter.deutschebahn.com/f/236382-213061/")
            })
        },
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        },    
    ]);
});

WA.room.area.onLeave("artikel_5").subscribe(() => {
    closePopUp();
});

WA.room.area.onEnter("artikel_6").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_Bib_artikel6","Innovationen sind dein Ding? Hier bleibt nichts unter dem Radat",
    [
        {
            label: "Innovations-Radar entdecken",
            callback: (popup => {
                WA.nav.openTab("https://db-planet.deutschebahn.com/pages/individuelle-methodische-begleitung/apps/blog/neu-innovations-radar")
            })
        },
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        },    
    ]);
});

WA.room.area.onLeave("artikel_6").subscribe(() => {
    closePopUp();
});
 
WA.room.area.onEnter("networking1").subscribe(() => {
    currentPopup =  WA.ui.openPopup("popUp_networking1","Willkommen in unserer Vernetzungszone!\nLerne neue #andersMacher aus dem gesamten Konzerzn kennen und knüpfe spannende neue Kontake.\nPersonen in diesem Bereich sind offen für neue Kontakte, erste Gespräche,\n Austausch zum andersMacherTag oder ihrem Aufgabenbereich im Konzern!\n\nViel Spaß beim Vernetzen!",
    [
        {
            label: "Danke!",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
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
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
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
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
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
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
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
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        }
    ]);
});

WA.room.area.onLeave("brunnen3").subscribe(() => {
    closePopUp();
});

WA.room.onEnterLayer("popUpWorkshopArea").subscribe(() => {
    console.log("entered popUpWorkshopArea");
    currentPopup =  WA.ui.openPopup("popUp_workshop","Willkommen in der Workshop-Area!\nAn jeder Workshop-Zone findest du ein Schild zur dort stattfindenden Inhalt und Referenten! Alternativ kannst du dir unser Übersichtsbild anschauen.\n Viel Spaß!",
    [
        {
            label: "Übersicht Workshops",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
                WA.nav.openCoWebSite(urlWorkshops)
                isCoWebSiteOpened = true;
            }
        },
        {
            label: "Schließen",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        }]
    );
});

WA.room.onLeaveLayer("popUpWorkshopArea").subscribe(() => {
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
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
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
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
                WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#")
            }
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
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
                WA.nav.openTab("https://www.db-reisemarkt.de/reisemarkt/bahnangebote/inland/ma_fahrkarten_bestellung-8136358#")
            }
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
   
    currentPopup = WA.ui.openPopup(popUpStart, startMsg,[
        {
            label: "OK",
            callback: (popup) => {
                popup.close();
                currentPopup = undefined;
            }
        }]
    );     
  
    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log("Scripting API Extra ready")		 
    }).catch(e => console.error(e))
})
.catch(e => console.error(e))

export {};