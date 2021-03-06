// Progressive Enhancement (Check if the user's browser supports service workers).
if (navigator.serviceWorker) {
  // Register the SW
  navigator.serviceWorker
    .register("sw.js")
    .then(registration => {
      console.log("SW Registered.");
    })
    .catch(console.log);
}

// Get camera feed
fetch("./camera_feed.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("camera").innerHTML = html;
  });
