self.addEventListener("push", e => {
  let n = self.registration.showNotification("A notification from the SW.");
  e.waitUntil(n);
});
