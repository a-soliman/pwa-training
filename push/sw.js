self.addEventListener("activate", () => {
  console.log("SW Activated!!");
});

self.addEventListener("push", () => {
  console.log("Push Received!");
});
