/* eslint-disable no-restricted-globals */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/data/default.json',
        '/data/angry.json',
        '/data/happy.json',
        '/data/sad.json'
      ]);
    })
  );
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
  )
})
