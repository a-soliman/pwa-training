if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("./sw.js")
    .then(registration => {
      console.log("SW Registered.");
    })
    .catch(console.log);
}
