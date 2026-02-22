const CACHE = 'pc-essentials-v1';

const PRECACHE = [
  './',
  './index.html',
  './software.html',
  './setup-checklist.html',
  './optimization.html',
  './performance.html',
  './troubleshoot.html',
  './maintenance.html',
  './ai-tools.html',
  './peripherals.html',
  './upgrade-planner.html',
  './can-i-run-it.html',
  './shortcuts.html',
  './typing-test.html',
  './pc-name-generator.html',
  './youtube-guide.html',
  './mongolz.html',
  './base-styles.css',
  './effects.js',
  './themes.js',
  './data.js',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
