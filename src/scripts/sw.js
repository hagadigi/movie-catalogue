import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  './index.html',
  './favicon.jpeg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (e) => {
  // console.log('Installing service worker ...');
  // todo: caching app shell resource
  e.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (e) => {
  // console.log('Activating service worker ...');
  // todo: delete old caches
  e.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (e) => {
  // console.log(e.request);
  // e.respondWith(fetch(e.request));
  // todo: add/get fetch req to/from caches
  e.respondWith(CacheHelper.revalidateCache(e.request));
});
