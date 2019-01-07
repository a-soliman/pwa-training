// Push Server
if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(registration => {
      let publicKey =
        "BALX-luOCTmmL5qU9bCo8iT5JAwEpl6_dKHiBxhkYuDNTrn0NjzpIc9FD68GdX7buN86ajlBBbCUz3u2urg85g4";
      registration.pushManager
        .getSubscription()
        .then(sub => {
          if (sub) return sub;

          // subscribe
          let applicationServerKey = urlBase64ToUint8Array(publicKey);
          registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey
          });
        })
        .then(sub => sub.toJSON())
        .then(console.log)
        .catch(console.log);
    })
    .catch(console.log);
}

/**
 * urlBase64ToUint8Array
 *
 * @param {string} base64String a public vavid key
 */
function urlBase64ToUint8Array(base64String) {
  var padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
