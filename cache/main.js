// if (window.caches) {
//   /* INITIALIZE CAHCHES */
//   caches.open("test1");
//   caches.open("test2");

//   /* GET ALL OPEN CACHES */
//   caches.keys().then(console.log);

//   /* CHECK IF CACHE EXISTS */
//   caches.has("test1").then(console.log);
//   caches.has("test3").then(console.log);

//   /* DELETE CACHE */
//   caches.delete("test1").then(console.log);
// }

if (window.caches) {
  caches.open("pwa-v1.1").then(cache => {
    /* ADDING FILES/ REQUESTS TO THE CACHE */
    //cache.addAll(["./index.html", "./style.css", "main.js"]);

    /* REMOVING FROM THE CACHE */
    //cache.delete("./style.css");

    /* RETRIVING */
    cache
      .match("./index.html")
      .then(res => res.text())
      .then(console.log);
  });
}
