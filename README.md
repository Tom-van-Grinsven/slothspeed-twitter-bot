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

# speedtest settings
SERVER_ID=5252
ACCEPTABLE_DOWNLOAD_SPEED=200
ACCEPTABLE_UPLOAD_SPEED=20
ACCEPTABLE_PING=20
NR_OF_SCANS=2

# twitter message header
MESSAGE_HEADER=Hey @Ziggo, ik betaal jullie voor 250 Mbps download en 25 Mbps upload maar krijg gemiddeld maar:
```

You can alter the settings for the speedtest by changing the values under the # speedtest settings line

You can alter the Twitter message "header". Note: if you want a different language, you should change the static text in the messageService.js file as well. 

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
To do this, alter the config object located in the speedtestclient.js file to:

```js
const CONFIG = {
    acceptLicense: true,
    serverId: process.env.SERVER_ID,
    acceptGdpr: true
};
```
After that, run the program via

```console
node slothspeed.js
```

If it runs successfully you can remove the acceptGdpr line. 
