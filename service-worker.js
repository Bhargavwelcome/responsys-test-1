// Import the Responsys Web Push SDK
importScripts('https://api.pushio.com/webpush/sdk/service_min.js');

// SDK configuration
var config = {
  appserviceKey: "BBfCgd8DzPawmPJgGJy8decXP1TJvDczsIpA0wqk961Xjb3auyJ9qMC2JwPT6XiRK429JsCDtWRgyLoaujPeGmE=",
  apiKey: "ABEWBYcAAX3LV04gEHMQJ2xIs",
  accountToken: "ABElKaqpK-3l_zDeOp-XArlkg",
  apiHost: "https://abr16c0-webpush.oraclersys.com",
  lazy: false
};

// Initialize SDK
orawp.init(JSON.stringify(config));
