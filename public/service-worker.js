/* eslint-disable no-restricted-globals */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
      ]);
    })
  );
})

self.addEventListener('fetch', event => {
  event.respondWith(new Response('["you","got","service","workered"]'))
})
