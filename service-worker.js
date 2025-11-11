// Load Responsys SDK for handling push events only
importScripts('https://api.pushio.com/webpush/sdk/service_min.js');

//  DO NOT CALL orawp.init(config) HERE!
// The main page already initializes the SDK.
// This worker will automatically receive messages via the imported SDK.
