self.addEventListener("install", e => {
  e.waitUntil(
    new Promise(resolve => {
      setTimeout(resolve, 3000);
    })
  );
});

self.addEventListener("activate", () => {
  console.log("SW Activated");
});
