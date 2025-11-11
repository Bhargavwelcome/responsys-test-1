// service-worker.js
importScripts('https://api.pushio.com/webpush/sdk/service_min.js');

const config = {
  appserviceKey: "BBfCgd8DzPawmPJgGJy8decXP1TJvDczsIpA0wqk961Xjb3auyJ9qMC2JwPT6XiRK429JsCDtWRgyLoaujPeGmE=",
  apiKey: "ABEWBYcAAX3LV04gEHMQJ2xIs",
  accountToken: "ABElKaqpK-3l_zDeOp-XArlkg",
  apiHost: "https://abr16c0-webpush.oraclersys.com",
  appver: "1.0.0",
  lazy: false
};

// Initialize the SDK in Service Worker
orawp.init(config);

