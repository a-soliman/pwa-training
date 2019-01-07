const webpush = require("web-push");
const vapid = require("./vapid.json");

// configure
webpush.setVapidDetails(
  "mailto:ahmed@firewoodmarketing.com",
  vapid.publicKey,
  vapid.privateKey
);

const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/ctwaVpJxWU0:APA91bFXCJczb_YD1E-z8did_zGdqprxt_pNg_LTlB3fxqyZR1VbqtVe-DB3dkz7ukKf0LhgBUazHDOqjBNwU76LBp33EAvDwnXzznEHaMXsInxAteTmUH20NE6d9mocibgToTG3OaYR",
  keys: {
    auth: "PVfgHdSmNvtyZjIw2qnM2g",
    p256dh:
      "BPNfqoMnQGHJSWytUi2YGOChdZ0jbLSIP9fhk01aOYG2dqn_WvwM9Gtrse4ALTgEPs8mbejM9kDW8gRJV5VLwxA"
  }
};

webpush.sendNotification(
  pushSubscription,
  "A notification from the push server."
);
console.log("push sent to client");
