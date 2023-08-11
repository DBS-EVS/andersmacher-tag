export const track1Map = new Map ([
    ["TrackNo", "Track+1"]
]);

export const track2Map = new Map ([
    ["TrackNo", "Track+2"]
]);

export const track3Map = new Map ([
    ["TrackNo", "Track+3"]
]);

export const track4Map = new Map ([
    ["TrackNo", "Track+4"]
]);

export const track5Map = new Map ([
    ["TrackNo", "Track+5"]
]);

export const track6Map = new Map ([
    ["TrackNo", "Track+6"]
]);

export function setTrackContent(signToTrackMap) {
    let currentTime = Date.now();

    for (const sign of signToTrackMap.keys()) {
        const currTrackMap = signToTrackMap.get(sign);

        for (const trackTime of currTrackMap.keys()) {
            if (currentTime < trackTime) {
                sign.url = "sign.html?line1=" + currTrackMap.get("TrackNo") + "&line2=" + currTrackMap.get(trackTime);
                sign.visible = true;

                break;
            }
        }
    }
}

export function refreshSigns(signToTrackMap) {
    var now = new Date();
    var millisTill14 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14, 0, 0, 0) - now;
    if (millisTill14 < 0) {
        millisTill14 += 120960000; // it's after 14, try tomorrow.
    }
    setTimeout(function(){
        console.log("refreshing track signs");
        setTrackContent(signToTrackMap)
    }, millisTill14);
}


