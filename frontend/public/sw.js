if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const t=e=>s(e,c),o={module:{uri:c},exports:r,require:t};a[c]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7028bf80"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FU9tMfsy7o83jRSLUZGT8/_buildManifest.js",revision:"297dbfdcb20e704e554a89f7e2333362"},{url:"/_next/static/FU9tMfsy7o83jRSLUZGT8/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/140-00748d52392ef3fd.js",revision:"00748d52392ef3fd"},{url:"/_next/static/chunks/2920303b-95bace90256bbd60.js",revision:"95bace90256bbd60"},{url:"/_next/static/chunks/40e88094-ec8218c87f50de2b.js",revision:"ec8218c87f50de2b"},{url:"/_next/static/chunks/628-3c3edcbc02050da7.js",revision:"3c3edcbc02050da7"},{url:"/_next/static/chunks/995-5b4b85f9dcf0a4b3.js",revision:"5b4b85f9dcf0a4b3"},{url:"/_next/static/chunks/framework-ac88a2a245aea9ab.js",revision:"ac88a2a245aea9ab"},{url:"/_next/static/chunks/main-dbe8468582ccfec4.js",revision:"dbe8468582ccfec4"},{url:"/_next/static/chunks/pages/EventsPage-87bfe2f364631813.js",revision:"87bfe2f364631813"},{url:"/_next/static/chunks/pages/ProjectPage-e5038ce0ae17f670.js",revision:"e5038ce0ae17f670"},{url:"/_next/static/chunks/pages/TeamPage-0c977b7b3313277e.js",revision:"0c977b7b3313277e"},{url:"/_next/static/chunks/pages/_app-b9c4e3a2935e3d9b.js",revision:"b9c4e3a2935e3d9b"},{url:"/_next/static/chunks/pages/_error-a12d0fec618c6e85.js",revision:"a12d0fec618c6e85"},{url:"/_next/static/chunks/pages/index-42a61c44b0f98ed1.js",revision:"42a61c44b0f98ed1"},{url:"/_next/static/chunks/pages/server-sitemap.xml-3884b6c5ccf39386.js",revision:"3884b6c5ccf39386"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/a7493ef8c7b26453.css",revision:"a7493ef8c7b26453"},{url:"/_next/static/media/Logo.0526228d.png",revision:"76a439fdae4e68cc6386d37af34dfe94"},{url:"/favicon/android-chrome-192x192.png",revision:"69789f87c3f4f65032d8914820cce44a"},{url:"/favicon/android-chrome-512x512.png",revision:"59a9c6bd0ac8e84101bcfaadf8ba4bf4"},{url:"/favicon/apple-touch-icon.png",revision:"addce62d92b4005bee18d4ab40631d73"},{url:"/favicon/favicon-16x16.png",revision:"3445f0bab8bbd8290f53c95e5a3b7386"},{url:"/favicon/favicon-32x32.png",revision:"011006ebae112bd4f705aeaa2862a0a3"},{url:"/favicon/favicon.ico",revision:"b25e5fe03f1002161134c0c07bc8d9eb"},{url:"/favicon/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/icon-192x192.png",revision:"06f0caf67a530ab134cc02c81c40bce0"},{url:"/icon-256x256.png",revision:"ef2eb054a9f51edb93e39959cc113beb"},{url:"/icon-384x384.png",revision:"07f37a7a12806561c522c9b1aa7d3ffe"},{url:"/icon-512x512.png",revision:"e9d1f8234bd309b5f71c0d874fe2b808"},{url:"/images/Frame21.jpg",revision:"2552a96e7a1335626dcf762da9c5ec9a"},{url:"/images/Frame210.jpg",revision:"f0370729cf056e3a65053e5605763506"},{url:"/images/Frame211.jpg",revision:"ea3ae762ec35af43194cd8e37e4f4486"},{url:"/images/Frame212.jpg",revision:"d8367dd84459b913ef2d4e05e3083edd"},{url:"/images/Frame22.jpg",revision:"05949636e9b84feea418557233dcab0b"},{url:"/images/Frame23.jpg",revision:"3e96652824fd4f5e42ed6554b3273952"},{url:"/images/Frame24.jpg",revision:"27fa54e66804566c6612c6cf01b49dbd"},{url:"/images/Frame25.jpg",revision:"8bb50a826a1876fd4c66e294a9335813"},{url:"/images/Frame26.jpg",revision:"c4029d65d65088f4583d9e0aeb3d7598"},{url:"/images/Frame27.jpg",revision:"fedfc3b1e7657ac806923c9a1e9ced77"},{url:"/images/Frame28.jpg",revision:"6ed6d96c841b6cc13dfcfc1055dbf371"},{url:"/images/Frame29.jpg",revision:"7cf6db958e8420250893c02d652a00c4"},{url:"/images/Group 3anime11.jpg",revision:"15c015599d27beafeb6cc6963899a3d7"},{url:"/images/Logo.png",revision:"76a439fdae4e68cc6386d37af34dfe94"},{url:"/images/anime01.jpg",revision:"aa0afe28ae28dd2dfdcb1ca4175984c7"},{url:"/images/anime02.jpg",revision:"a9ff34f955851933225e18bad86245eb"},{url:"/images/anime03.jpg",revision:"7d8c64148b3df03fc75923345f6f417f"},{url:"/images/anime04.jpg",revision:"d29b4e09317645023a1670c404145b69"},{url:"/images/anime05.jpg",revision:"eeabf62f454306604c745b40ed48f581"},{url:"/images/anime06.jpg",revision:"9cd13a396dd80006b808c5b3fbf8bd9e"},{url:"/images/anime07.jpg",revision:"415552c32167531e0580d16edfbd746b"},{url:"/images/anime08.jpg",revision:"831586496bcab8af0cf4bf2768ba5287"},{url:"/images/anime09.jpg",revision:"d80c6e47ad64e93e82cbbbd12dd0964e"},{url:"/images/anime10.jpg",revision:"d149c3fd42278818b84776fb68fa3546"},{url:"/logo/Logo.png",revision:"76a439fdae4e68cc6386d37af34dfe94"},{url:"/manifest.webmanifest",revision:"8c5106cb62321f834541621a3d654f69"},{url:"/robots.txt",revision:"d01f8673e3517e03eeb43a8af126398a"},{url:"/sitemap-0.xml",revision:"2bd70cc56646baab085efa798796505f"},{url:"/sitemap.xml",revision:"6080280059f1748adc2309a07a4b0fd1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
