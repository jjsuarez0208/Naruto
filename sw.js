const CACHE_NAME = "naruto-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/manifest.json",
  "/icons/ninja.png",
  // o bien:
  // "/icons/Naruto_logo.svg.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) =>
      response ? response : fetch(event.request)
    )
  );
});
