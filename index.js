//requires the request module
var request = require('request');
var json;

request('link to json file to be parsed', function (error, response, body) {
  if (!error && response.statusCode == 200) {
     json = JSON.parse(body);

     //must be inside the if statement otherwise the json code wont work
     setInterval(checkSalah, 60000);
  }
})

function makeathan(){
                const GoogleHome = require("google-home-push");
                
                //creates a new instance of the googlehome
                const myHome = new GoogleHome("ip-address");
        
                //pushes the mp3 music out
                myHome.push("mp3 file to be outputted to the speaker");
}

function checkSalah(){

        //makes a date object
        var date = new Date();
        var compare;

        //checks to accompany for the loss of a number in the return value of the date object
        if(date.getHours() < 10)
        {
                var compare = "0" + date.getHours() + ":";
        }
        else
        {
                var compare = date.getHours() + ":";
        }

        if(date.getMinutes() < 10)
        {
                compare += "0" + date.getMinutes();
        }
        else
        {
                compare += date.getMinutes();
        }
        //always include the seconds otherwise it will be recalling for 1 minute straight

        //checks the json with the current time
        if(compare == json.data.timings.Fajr)
        {
                console.log("It's fajr time!");
                makeathan();
        }
        else if(compare == json.data.timings.Dhuhr)
        {
                console.log("It's thuhr time!");
                makeathan();
        }
        else if(compare == json.data.timings.Asr)
        {
                console.log("It's asr time!");
                makeathan();
        }
        else if(compare == json.data.timings.Maghrib)
        {
                console.log("It's maghrib time!");
                makeathan();
        }
        else if(compare == json.data.timings.Isha)
        {
                console.log("It's ishaa time!");
                makeathan();
        }
}
