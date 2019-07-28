importScripts('/nuxt-gh-pages/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-gh-pages/_nuxt/250ce8cf9df2a46de1fe.js",
    "revision": "82517ddc9b835b65e3fd655fac4ff562"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/2f35627dcdc69eb37855.js",
    "revision": "e174ac62e4ee46e9be3499cbc69c47b2"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/95e85074d40adf79400b.js",
    "revision": "c34a75e9e1449230cbe8002537557795"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/d563c34918903b4bfebc.js",
    "revision": "9fc91a4a78fb8742b14c5bd6b25ca89c"
  },
  {
    "url": "/nuxt-gh-pages/_nuxt/edfd43ef9f063a04fd96.js",
    "revision": "8cd3525af74cb43c4c99609584137993"
  }
], {
  "cacheId": "nuxt-gh-page",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/nuxt-gh-pages/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-gh-pages/.*'), workbox.strategies.networkFirst({}), 'GET')
