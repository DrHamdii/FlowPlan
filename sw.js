const CACHE_NAME = 'flowplan-pwa-v2';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './mobile.html',
  './daily_weekly_planner.html',
  './manifest.webmanifest',
  './assets/speech-bubble.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/apple-touch-icon.png',
  './assets/Icons/basket.gif',
  './assets/Icons/money.png',
  './assets/Background/Playground_Beach.jpg',
  './assets/Background/Playground_Carnival_HD.jpg',
  './assets/Background/Playground_cosmic.jpg',
  './assets/Background/Playground_Flowery_HD.jpg',
  './assets/Background/Playground_Forest.jpg',
  './assets/Background/Playground_irritate Shafeeq.jpg',
  './assets/Background/sanctuary.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('PWA precache partial failure:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Ignore chrome-extension or file schemes
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Stale-while-revalidate strategy
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Fallback for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./mobile.html');
        }
      });

      return cachedResponse || fetchPromise;
    })
  );
});
