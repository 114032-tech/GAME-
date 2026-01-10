const CACHE_NAME = 'fan-kuan-monopoly-v1';
const ASSETS = [
  './index.html',
  './manifest.webmanifest',
  'https://cdn.tailwindcss.com',
  'https://digitalarchive.npm.gov.tw/Collection/Detail/1195?dep=P'
];

// 安裝並快取資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 攔截請求，優先使用快取
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});