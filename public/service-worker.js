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
  const url = new URL(event.request.url);
  if (url.pathname.includes('.')) return;
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || new Response('["you", "got", "service", "workered"]', {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
      });
    })
  )
})
