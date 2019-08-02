/* eslint-disable no-restricted-globals */

const datata = ['default', 'angry', 'happy', 'sad']

console.log(`I am registered at ${self.registration.scope}`)

self.addEventListener('install', event => {
  const mountpoint = new URL(self.registration.scope).pathname.slice(0, -1);
  const toCache = [
    `${mountpoint}`,
    ...datata.map(datum => `${mountpoint}/data/${datum}.json`),
  ];
  console.log(toCache)

  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll(toCache);
    })
  );
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  )
})
