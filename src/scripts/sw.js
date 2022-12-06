self.addEventListener('install', (e) => {
  console.log('Installing service worker ...');

  // todo: caching app shell resource
});

self.addEventListener('activate', (e) => {
  console.log('Activating service worker ...');

  // todo: delete old caches
});

self.addEventListener('fetch', (e) => {
  console.log(e.request);

  e.respondWith(fetch(e.request));
  // todo: add/get fetch req to/from caches
});
