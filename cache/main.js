if (window.caches) {
  /* INITIALIZE CAHCHES */
  caches.open("test1");
  caches.open("test2");

  /* GET ALL OPEN CACHES */
  caches.keys().then(console.log);

  /* CHECK IF CACHE EXISTS */
  caches.has("test1").then(console.log);
  caches.has("test3").then(console.log);

  /* DELETE CACHE */
  caches.delete("test1").then(console.log);
}
