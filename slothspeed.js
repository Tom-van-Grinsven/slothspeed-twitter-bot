const twitterClient = require('./clients/twitterclient');
const speedTestClient = require('./clients/speedtestclient');

let upload = 0;
let download = 0;

(async function(){
    try {
        console.log("Hier");

        let response =  await speedTestClient.getSpeed();

        twitterClient.tweet(response);

    } catch (e){
        console.log(e)
    }
})();










