const CACHE_NAME = 'ai-music-cache-v1';
const urlsToCache = [
  'index.html',
  'prompts.html',
  'capcut.html',
  'tiktok.html',
  '30jours.html',
  'automation.html',
  'multiCompte.html',
  'manifest.json'
];

// Installer service worker et mettre en cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Intercepter les requêtes et servir le cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
