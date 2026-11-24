const CACHE_NAME = 'narowal-regen-hub-v1';

const CORE_ASSETS = [
  './',
  './index.html',
  './404.html',
  './style.css',
  './app.js',
  './assets/favicon.svg',
  './assets/handbook.pdf',
  './data/translations.js',
  './data/sections.js',
  './data/course.js',
  './data/course-part1.js',
  './data/course-part2.js',
  './data/crop-library.js',
  './data/crop-library-part1.js',
  './data/crop-library-part2.js',
  './data/field-guide.js',
  './data/field-guide-part1.js',
  './data/field-guide-part2.js',
  './data/home-farm-lab.js',
  './data/learning-centre.js',
  './data/glossary.js',
  './images/beneficial-ladybird.jpg',
  './images/compost-heap.jpg',
  './images/crop-stages-cereals.jpg',
  './images/crop-stages-oilseeds-veg.jpg',
  './images/crop-stages-orchards.jpg',
  './images/crop-stages-pulses-fodder.jpg',
  './images/field-guide-beneficials.jpg',
  './images/field-guide-birds.jpg',
  './images/field-guide-pests.jpg',
  './images/field-guide-plants.jpg',
  './images/hero-narowal-farm.jpg',
  './images/lab-compost-tests.jpg',
  './images/lab-infiltration-spade.jpg',
  './images/lab-mulch-cover.jpg',
  './images/lab-soil-feel.jpg',
  './images/soil-healthy.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(CORE_ASSETS.map((url) => cache.add(url)))
    )
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const reqUrl = new URL(event.request.url);
  if (reqUrl.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached || (event.request.mode === 'navigate' ? caches.match('./index.html') : undefined));

      return cached || fetchPromise;
    })
  );
});
