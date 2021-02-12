document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('prompt').hidden = false;
    document.getElementById('submit').hidden = false;
    document.getElementById('username').hidden = false;

    
  
    var button = document.getElementById('submit');
    button.addEventListener('click', function () {

        // hide initial prompts
        document.getElementById('prompt').hidden = true;
        document.getElementById('submit').hidden = true;
        document.getElementById('username').hidden = true;


        // assign groups and show links to the tutorial
        var grpnum = Math.random();
        if (grpnum < 0.5) {
            grpnum = 1;
            document.getElementById('discovery').hidden = false;
            document.getElementById('shell').hidden = true;
        }
        else {
            grpnum = 2;
            document.getElementById('discovery').hidden = true;
            document.getElementById('shell').hidden = false;
        }
      

        // TODO: push name to the saving list (use chrome.storage here)
        var text = document.getElementsByName('username')[0].value;
        MyArray.push(text);


  
    });
    
    
    
    // Download button event listener ~~ Initiaite download by sending a message to background.js
    var button = document.getElementById('download');
    button.addEventListener('click', function () {
        chrome.runtime.sendMessage({message: "Download"});
    });
  });