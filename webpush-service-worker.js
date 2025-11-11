// Import the Responsys Web Push SDK for Service Workers
importScripts('https://api.pushio.com/webpush/sdk/service_min.js');

// Configuration for your Web Push App
var config = {
    appserviceKey: "BBfCgd8DzPawmPJgGJy8decXP1TJvDczsIpA0wqk961Xjb3auyJ9qMC2JwPT6XiRK429JsCDtWRgyLoaujPeGmE=",
    apiKey: "ABEWBYcAAX3LV04gEHMQJ2xIs",
    accountToken: "ABElKaqpK-3l_zDeOp-XArlkg",
    appver: "0.0.0",
    apiHost: "https://abr16c0-webpush.oraclersys.com",
    lazy: false
};

// Initialize the Responsys Web Push SDK
orawp.init(JSON.stringify(config));
