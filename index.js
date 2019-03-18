//read the json file
var fs = require("fs");
var content = fs.readFileSync("salah.json");

//parses the json file
var json = JSON.parse(content);

//console.log(date.getMinutes());
//console.log(json.fajr);
checkSalah();

//checks to see every second
setInterval(checkSalah, 1000);

function makeathan(){

        const GoogleHome = require("google-home-push");

        // Pass the name or IP address of your device
        const myHome = new GoogleHome("192.168.0.13");
        const myHome1 = new GoogleHome("192.168.0.17");

        myHome.push("http://www.islamcan.com/audio/adhan/azan9.mp3");
        myHome1.push("http://www.islamcan.com/audio/adhan/azan9.mp3");
}

function checkSalah(){

        //makes a date object
        var date = new Date();

        //always include the seconds otherwise it will be recalling for 1 minute straight
        var compare = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


        //console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());

        //checks the json with the current time
        if(compare == json.fajr)
        {
                console.log("It's fajr time!");
                makeathan();
        }
        else if(compare == json.thuhr)
        {
                console.log("It's thuhr time!");
                makeathan();
        }
        else if(compare == json.asr)
        {
                console.log("It's asr time!");
                makeathan();
        }
        else if(compare == json.maghrib)
        {
                console.log("It's maghrib time!");
                makeathan();
        }
        else if(compare == json.isha)
        {
                console.log("It's ishaa time!");
                makeathan();
        }
}
