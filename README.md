# Athan-Home
Have your own personal athan broadcast on your google homes

To Get Started, 

Follow the instructions found on this repository.
https://github.com/taeukme/google-home-push

After that use function checkSalah() to check the current time with the time parsed from the salah times api.

Link to the salah api is found here:
https://aladhan.com/prayer-times-api

After a link has been created for the json data paste into the given opening in the index.js where it says:
ex: Request('enter link here for the json data url', function (error, response, body){})

Then create instances for the amount of google homes that you want to be used with the athan home inside the makeathan()
function

After that include the link to the athan mp3 file online in the instance of the google home created in step 6
where it says:
ex: mygooglehome.push("paste link here");

Run the program. Enjoy!!


Common Errors May Include:

1. Can't Install google-home-push if you get errors including ones that say is needs or is missing a file run the command below.
--       sudo apt-get install libavahi-compat-libdnssd-dev     --

2. Doesn't broadcast.
--       check the ip addresses that they are correct      --
--       make sure that there aren't syntax errors    --
