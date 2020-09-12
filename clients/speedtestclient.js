const speedTest = require('speedtest-net');

const CONFIG = {
    acceptLicense: true,
    serverId: 5252
};

const ACCEPTABLE_DOWNLOAD_SPEED = 200;
const ACCEPTABLE_UPLOAD_SPEED = 20;
const ACCEPTABLE_PING = 20;
const CONVERT_TO_MBPS = 125000;
const NR_OF_SCANS = 2;

let totalDownload = 0;
let totalUpload = 0;
let totalPing = 0;

let RESULT = {};

getSpeed = async () => {
    for (let i = 0; i < NR_OF_SCANS ; i++) {
        let results = await speedTest(CONFIG);
        saveResults(results);
    }

    let averageFormattedData = calculateAndFormat();
    return findSubParValues(averageFormattedData);
};

saveResults = (data) => {
    totalDownload += data.download.bandwidth;
    totalUpload += data.download.bandwidth;
    totalPing += data.ping.latency;
};

calculateAndFormat = () => {
    let downloadSpeed   = ((totalDownload   / NR_OF_SCANS) / CONVERT_TO_MBPS).toFixed(2);
    let uploadSpeed     = ((totalUpload     / NR_OF_SCANS) / CONVERT_TO_MBPS).toFixed(2);
    let ping            = Math.round((totalPing / NR_OF_SCANS));

    return {
        downloadspeed: downloadSpeed,
        uploadspeed: uploadSpeed,
        ping: ping
    };
};

findSubParValues = (formattedData) => {
    findSubParDownloadSpeed(formattedData);
    findSubParUploadSpeed(formattedData);
    findSubParPing(formattedData);
    return RESULT;
};

findSubParDownloadSpeed = (formattedData) => {
    if(formattedData.downloadspeed < ACCEPTABLE_DOWNLOAD_SPEED){
        RESULT.downloadspeed = formattedData.downloadspeed;
    }
};

findSubParUploadSpeed = (formattedData) => {
    if(formattedData.uploadspeed < ACCEPTABLE_UPLOAD_SPEED) {
        RESULT.uploadspeed = formattedData.uploadspeed;
    }
};

findSubParPing = (formattedData) => {
    if(formattedData.ping > ACCEPTABLE_PING) {
        RESULT.ping = formattedData.ping;
    }
};

module.exports = {
    getSpeed
};