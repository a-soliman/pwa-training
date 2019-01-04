// PROGRESSIVE ENHANCEMENT (SW SUPPORTED)
if (navigator.serviceWorker) {
  // Register the sw
  navigator.serviceWorker
    .register("./sw.js")
    .then(registeration => {
      console.log("SW Registered.");
    })
    .catch(console.log);
}
