const config = require('config');

const MESSAGE_HEADER = config.get('twittermessage.header');

appendToMessage = (message, text) => {
    return message.concat(text);
};

// should be refactored to get rid of ugly if then tree
createMessage = (testresults) => {

    let message = null;

    if(testresults.hasOwnProperty('downloadspeed') && testresults.hasOwnProperty('uploadspeed') && testresults.hasOwnProperty('ping')){
        message = MESSAGE_HEADER;
        message = appendToMessage(message,`\r\n \r\n- ${testresults.downloadspeed} Mbps down \r\n- ${testresults.uploadspeed} Mbps up \r\n met ${testresults.ping}ms ping.`)
    } else if(testresults.hasOwnProperty('downloadspeed') && testresults.hasOwnProperty('uploadspeed')) {
        message = MESSAGE_HEADER;
        message = appendToMessage(message, `\r\n \r\n- ${testresults.downloadspeed} Mbps down \r\n- ${testresults.uploadspeed} Mbps up`)
    } else if (testresults.hasOwnProperty('downloadspeed') && testresults.hasOwnProperty('ping')){
        message = MESSAGE_HEADER;
        message = appendToMessage(message,`\r\n\r\n- ${testresults.downloadspeed} Mbps down \r\n met ${testresults.ping} ping.`);
    } else if (testresults.hasOwnProperty('uploadspeed') && testresults.hasOwnProperty('ping')){
        message = MESSAGE_HEADER;
        message = appendToMessage(message, `\r\n\r\n- ${testresults.uploadspeed} Mbps up \r\n met ${testresults.ping} ping.`);
    } else if (testresults.hasOwnProperty('downloadspeed')){
        message = MESSAGE_HEADER;
        message = appendToMessage(message,`\r\n\r\n- ${testresults.downloadspeed} Mbps down`);
    } else if (testresults.hasOwnProperty('uploadspeed')) {
        message = MESSAGE_HEADER;
        message = appendToMessage(message,`\r\n\r\n- ${testresults.uploadspeed} Mbps up`);
    }

    return message;
};

module.exports = {
    createMessage
};