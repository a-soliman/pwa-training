self.addEventListener("activate", () => {
  console.log("SW Activated!");
});

self.addEventListener("message", e => {
  // if (e.data === "update_self") {
  //   console.log("service worker updateing");
  //   self.skipWaiting();
  // }

  /* RESPOND TO ALL CLIENTS */
  self.clients.matchAll().then(clients => {
    console.log(e);
    console.log(clients);
    clients.forEach(client => {
      if (e.source.id === client.id) {
        client.postMessage("Hello from service worker..");
      } else {
        client.postMessage("You didn't ask...");
      }
    });
  });
});
