var MyArray = new Array();



// record the timestamp and the URL at an interval
var myVar = setInterval(record, 5000);

function record() {
    var d = new Date();
    var link;

    chrome.tabs.query({active: true, lastFocusedWindow: true},function(tabs) {
        MyArray.push(tabs[0].url);
        let url = tabs[0].url;
        link = url;
    });

    MyArray.push(d);
    MyArray.push(url);

}




// upon receiving the message from popup.js, download the JSON of the array
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
    if (request.message == "Download"){
        // blob code from SO
        var _myArray = JSON.stringify(MyArray , null, 4); 
        var vLink = document.createElement('a'),
        vBlob = new Blob([_myArray], {type: "octet/stream"}),
        vName = 'url-tracks.json',
        vUrl = window.URL.createObjectURL(vBlob);
        vLink.setAttribute('href', vUrl);
        vLink.setAttribute('download', vName );
        vLink.click();
    }
});


