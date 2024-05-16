if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        let e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, i) => {
    const t =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href
    if (s[t]) return
    let c = {}
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: c, require: r }
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c))
  }
}
define(['./workbox-c06b064f'], function (e) {
  'use strict'
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/aY0363HTu8ximafsHfLHY/_buildManifest.js',
          revision: '2ec694eb52ae4f523f265a46bae4d768',
        },
        {
          url: '/_next/static/aY0363HTu8ximafsHfLHY/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/190-77e6589ed315b66c.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/595-6e9f67c4a9fa0925.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/app/_not-found/page-72ba1dd8314c5b70.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/app/layout-768d5f3bd8cdb6b6.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/%5BroomId%5D/page-d7de537fb422ff2b.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/app/partner/chats/page-71c8241544801fd9.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/app/partner/page-572345f1a11ac816.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/fd9d1056-4e1a26e2d413ba3c.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/framework-f66176bb897dc684.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/main-7c275f43d83b6e52.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/main-app-8d0835272973126f.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/pages/_app-6a626577ffa902a4.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/pages/_error-1be831200e60c5c0.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js',
          revision: '79330112775102f91e1010318bae2bd3',
        },
        {
          url: '/_next/static/chunks/webpack-ef4e626bb177076d.js',
          revision: 'aY0363HTu8ximafsHfLHY',
        },
        {
          url: '/_next/static/css/0088f29d74ef4475.css',
          revision: '0088f29d74ef4475',
        },
        {
          url: '/_next/static/media/ff840cfebfb63b0c-s.p.woff2',
          revision: '302ec55f5b4320354ec6b35a53dead87',
        },
        {
          url: '/icon-192x192.png',
          revision: '0846a77b2550492e534f7a1a7012eee8',
        },
        {
          url: '/icon-256x256.png',
          revision: 'bac2fc762e53b57f2ce55e628e5c5be9',
        },
        {
          url: '/icon-384x384.png',
          revision: 'e9d31a292c162deb204ee96297648157',
        },
        {
          url: '/icon-512x512.png',
          revision: '85feb3a273be45d763ea33b13ef941c8',
        },
        {
          url: '/images/chat-add-file.svg',
          revision: 'aff975e993ad7c4fc3ebb63cb8774e43',
        },
        {
          url: '/images/chat-send-button.svg',
          revision: 'a2c1cb5c63655da881358e5b35070630',
        },
        {
          url: '/images/mfc-logo.png',
          revision: '1509ef459129bc4ce20097d00fcdba46',
        },
        {
          url: '/images/profile.png',
          revision: 'b2186ebae126a379baa02be675111dc4',
        },
        { url: '/manifest.json', revision: '49377dff528b9ba7c1a926a3f5242dd3' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: '61c6b19abff40ea7acd577be818f3976' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ response: e }) =>
              e && 'opaqueredirect' === e.type
                ? new Response(e.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: e.headers,
                  })
                : e,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e, url: { pathname: s } }) =>
        !(!e || s.startsWith('/api/auth/callback') || !s.startsWith('/api/')),
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') &&
        '1' === e.headers.get('Next-Router-Prefetch') &&
        a &&
        !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ request: e, url: { pathname: s }, sameOrigin: a }) =>
        '1' === e.headers.get('RSC') && a && !s.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: { pathname: e }, sameOrigin: s }) => s && !e.startsWith('/api/'),
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ sameOrigin: e }) => !e,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      'GET',
    ),
    (self.__WB_DISABLE_DEV_LOGS = !0)
})
