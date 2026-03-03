const CACHE_NAME = 'mm-v1-2024-01-01'
const urlsToCache = [
    '/',
    '/favicon.svg',
    '/.well-known/gdpr.txt',
    '/.well-known/security.txt',
    '/humans.txt',
    '/ai.txt',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    )
    self.skipWaiting()
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((fetchResponse) => {
                if (!fetchResponse || fetchResponse.status !== 200 || event.request.method !== 'GET') {
                    return fetchResponse
                }
                const responseToCache = fetchResponse.clone()
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache)
                })
                return fetchResponse
            })
        })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            )
        })
    )
    self.clients.claim()
})
