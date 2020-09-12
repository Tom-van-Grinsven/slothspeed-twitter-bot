# slothspeed-twitter-bot
Being tired of not getting the internetspeed my ISP promised me to get, I wrote this little program
to annoy them and mention them on Twitter with the speedtest.net results I got. 

It uses the speedtest.net CLI and Twitter API to send them the results of an average of 2 speedtests.

## Configuration ##

To configure this program you need to create an .env file in the root folder of the project.
It should look like this:

```.dotenv
# twitter credentials
CONSUMER_KEY=[your-twitter-key]
CONSUMER_SECRET=[your-twitter-secret]
ACCESS_TOKEN_KEY=[your-access-token]
ACCESS_TOKEN_SECRET=[your-token-secret]
```

To alter the settings for the speedtest itself, change the default.json file located in the config folder:

```json
{
  "testsettings": {
    "acceptable_download_speed":200,
    "acceptable_upload_speed": 100,
    "acceptable_ping": 20,
    "nr_of_scans":2
  },
  "speedtestclient": {
    "acceptLicense": true,
    "serverId":5252
  },
  "twittermessage": {
    "header":"Hey @Ziggo, ik betaal jullie voor 250 Mbps download en 25 Mbps upload maar krijg gemiddeld maar:"
  }
}
```

You can set the acceptable speeds and number of tests to anything you seem fit. 

The header is the first part of the Twitter message, which is written in Dutch. If you wan't to change the message
you should change the header and unfortunately change some hardcoded Dutch text in the messageService. This should be refactored in a later stadium 
but right now is a work in progress. 

Note: doing a lot of tests will require a lot of time and network resources.

## Running it ##

Make sure to have Node and NPM installed.

```console
sudo apt-get install node
```

```console
sudo apt install npm
```

Install the node packages via NPM in the root folder of this project

```console
npm install
```

If you are in Europe, you might need to accept the GDPR EULA from Speedtest.net
To do this, alter the default.json config file located in the config folder.

```json
{
  ...
  "speedtestclient": {
    "acceptLicense": true,
    "serverId":5252,
    "acceptGdpr": true
  },
  ...
}
```
After that, run the program via

```console
node slothspeed.js
```

If it runs successfully you can remove the acceptGdpr line. 
