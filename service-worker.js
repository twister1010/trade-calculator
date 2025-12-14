self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("trade-calculator-cache").then(cache => {
      return cache.addAll([
        "/trade-calculator/",
        "/trade-calculator/index.html",
        "/trade-calculator/squirrel.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
