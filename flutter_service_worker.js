'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0cd5296e7716bbc93fde9ecdaf146a77",
"assets/AssetManifest.bin.json": "4b14e685e5377e22f8bf2cb15bae61eb",
"assets/AssetManifest.json": "1cc04751809c668e8ba6a4ce1623540c",
"assets/assets/icons/chat-quote-line.png": "90998f15bf802454cbb319b9a4a2c5fc",
"assets/assets/icons/contacts-line.png": "3d0c5f0ef5e9bdf430231652c1a7c236",
"assets/assets/icons/ic_chart.png": "2dd950c242563925279a15e2e1696fc3",
"assets/assets/icons/ic_home.png": "51d7438e3ebce61e503b9194eb01f841",
"assets/assets/icons/ic_profile.png": "81a5989f16a2f825b259a0d905c82fbb",
"assets/assets/icons/lab1.png": "b7f76340cbe4c837a510ad4d5d0811e5",
"assets/assets/icons/lab2.png": "dc7257913f5b28e7f4dd8406ec57baaf",
"assets/assets/icons/lab3.jpg": "e3db9b84ce491c0aa50db9eb59acb26d",
"assets/assets/icons/lab4.jpg": "da86ca1a511cb25dcf43f84941c3a753",
"assets/assets/icons/lab5.png": "c41ecf1c55d108e831958410570690e4",
"assets/assets/icons/mental-health-line.png": "2acca3a1a03562825b910317b369b88f",
"assets/assets/icons/profile-line.png": "486e9428ae8d235f38a861ff8dd5a9ae",
"assets/assets/icons/projector-2-line.png": "cdf081e42163195c49ce28bf63ef4250",
"assets/assets/icons/scan.png": "ca3035d409487dcc4020b07d0ebae208",
"assets/assets/images/algoritma.png": "a09f934e7abbe71b1e124c90edd2b55a",
"assets/assets/images/basis-data.png": "199ae15fa16af79aa3b7160df0437675",
"assets/assets/images/galaxy.png": "4fb0b98c4be8be6345c0bb7ad5b0a9df",
"assets/assets/images/instruction-1.png": "6be34746e3ecac7a1169d6917d86a621",
"assets/assets/images/instruction-2.png": "728d0bff52442a92500df5e0b0fa056a",
"assets/assets/images/instruction-3.png": "e58c836e25fe7e1f1b79bcdd14a5ff1a",
"assets/assets/images/instruction-4.png": "a70683d0503fdfcc24f0a7576cb97f28",
"assets/assets/images/instruction-5.png": "cf43d191175fe67fafee3b4b0a186364",
"assets/assets/images/jadwal.png": "cbb044f8e4cd768b9de0349509951e71",
"assets/assets/images/khs.png": "32fba56fe7ca95dfb174fde50540241f",
"assets/assets/images/logo.png": "1d42fcc44b3560d9f5a778c87b3811e4",
"assets/assets/images/maps.png": "5257d52b99b83956385273b972f8af56",
"assets/assets/images/nMatkul%2520copy.png": "a6dcb560bf8f6041d811fe88e3eb0999",
"assets/assets/images/nMatkul.png": "a6dcb560bf8f6041d811fe88e3eb0999",
"assets/assets/images/rpl.png": "51a5b7c428a3b9486eb20b140c2f955e",
"assets/assets/images/splash-champion.png": "6c6f993aadb4eacf1b15662cb5a8ff9d",
"assets/assets/images/splash-online-learning.png": "d66d9ecbf5daafd2104efa84a061a3c8",
"assets/assets/profiles/bakeri.jpg": "f2be9db40325a78e1cc220bad4a820ff",
"assets/assets/profiles/fahriza.jpg": "a58ed8a3c41508e8ea49ced8b2f99404",
"assets/assets/profiles/hery.jpg": "11d67d0b7222181326f78bab32c60d3c",
"assets/assets/profiles/zidan.jpg": "2c9a66c19b30b35cb1fbbda50f3273ef",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3458f07c1634603606a43c37cdb2bc41",
"assets/NOTICES": "e39e5588d36347b04a3f79a84011bdf1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "dd677b435b16f44e4ca08a9f354bac24",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "48ed03214a7cbd617bafd16c5b766b5a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "764d4ba2eb0fde5f32bc195b5acd4437",
"/": "764d4ba2eb0fde5f32bc195b5acd4437",
"main.dart.js": "4b3a407b05b7949640cb1c6ccd8373e9",
"manifest.json": "99d9aa8161051b891c83a7328fd1a0df",
"version.json": "bf0b77d8e898f095ee689cac4fca8a58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
