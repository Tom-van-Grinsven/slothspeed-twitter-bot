const twitterClient = require('./clients/twitterclient');
const speedTestClient = require('./clients/speedtestclient');

(async function(){
    try {
        let response =  await speedTestClient.getSpeed();
        twitterClient.tweet(response);
    } catch (e){
        console.error(e);
    }
})();










