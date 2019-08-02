/* eslint-disable no-restricted-globals */

const datata = ['default', 'angry', 'happy', 'sad']

console.log(`I am registered at ${self.registration.scope}`)

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        ...datata.map(datum => `/data/${datum}.json`),
        '/',
      ]);
    })
  );
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
  )
})
