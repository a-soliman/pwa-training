if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(registration => {
      // registration.onupdatefound = () => {
      //   let newSW = registration.installing;
      //   if (confirm("App update found do you want to update ow?")) {
      //     newSW.postMessage("update_self");
      //   }
      // };

      if (registration.active)
        registration.active.postMessage("Respond to this");
    })
    .catch(console.log);

  navigator.serviceWorker.addEventListener("message", e => {
    console.log(e.data);
  });
}
