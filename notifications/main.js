// if (navigator.serviceWorker) {
//   navigator.serviceWorker
//     .register("./sw.js")
//     .then(() => {
//       console.log("SW Registered.");
//     })
//     .catch(console.log);
// }

// check for notification support
if (window.Notification) {
  function showNotification() {
    const options = {
      body: "Some notification information"
    };
    const notification = new Notification("My new notification...", options);
    notification.onclick = () => {
      console.log("Notification Clicked!");
    };
  }

  // Mange permession
  if (Notification.permission === "granted") {
    showNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(permission => {
      if (permission === "granted") {
        showNotification();
      }
    });
  }
}
