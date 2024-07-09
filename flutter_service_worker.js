'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "90ef01e0ee4f67ce748f108613442f93",
"version.json": "3d4b50643d08763b12045984ba02f820",
"index.html": "e787a03c5a2d5ed81d17ddab358e90f3",
"/": "e787a03c5a2d5ed81d17ddab358e90f3",
"main.dart.js": "2a546cbe0259fa990b9f87d90158d501",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a24087895a8fd396fe9ef1c6364b6e01",
"assets/AssetManifest.json": "b46fecbb4f789d4a32bfe11cb4d6cb43",
"assets/NOTICES": "46a7cffbdc37b17cd4a8b7d6ffc6c6bf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "775dd1cf0590f2526b051991d724fd47",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6b4077d5b3ea1fd9f82b0585ddfd8cbe",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/awadh_logo3.png": "fe345a43215d073ad22791dedd50fee3",
"assets/assets/images/new2.png": "203d5a4c99ca547efc673a46bedbe770",
"assets/assets/images/landing_page.jpg": "793340b386459b26fcdca97777dab18d",
"assets/assets/images/login.png": "70d4c169754258233072fb3bb399a03a",
"assets/assets/images/happy_black.png": "d03c459fb8e2574fb30dc5fb2e4d2cac",
"assets/assets/images/sad_black.png": "177bcd9c0693aaf9cb2a8a2fa97ed5b8",
"assets/assets/images/register.png": "9be6775185b2178e08206cd9335a73c7",
"assets/assets/images/waterdrink.jpg": "d08fe3ac3749b9a21319acbb0bf5ee3d",
"assets/assets/images/chlorine.jpg": "0335af71782743b6069453400e044dd3",
"assets/assets/images/login_page.jpg": "72b732f08591348779fda27af96d4471",
"assets/assets/images/drink.jpg": "12f29f32c36682c4818dca36e5b2b546",
"assets/assets/images/home_page.jpg": "bcbd668685c438a9a99fca8af269bbed",
"assets/assets/images/signup.png": "08fa05c0638186dc69b4dbd68ee8f91c",
"assets/assets/images/about_bg.png": "7d7955150610b5771f9855a1acd3d21e",
"assets/assets/images/new.png": "15ca559dfc5d644e7c2ef93614fe901d",
"assets/assets/images/new.jpg": "f8e6a4b900e8bf60acb4e96e43157874",
"assets/assets/images/signup_bg.png": "58391aa1244cb0256bdbf31410d432fd",
"assets/assets/images/drink2.png": "e37d12e5060f3ba94b0c0d011b56c100",
"assets/assets/images/white.png": "82ede29ff97b161b6ccbc991cd730776",
"assets/assets/assets/images/awadh_logo3.png": "fe345a43215d073ad22791dedd50fee3",
"assets/assets/assets/images/new2.png": "203d5a4c99ca547efc673a46bedbe770",
"assets/assets/assets/images/new2.jpg": "055f40ba356ebd06fde3ffde90b27b92",
"assets/assets/assets/images/landing.gif": "7b7aa4cdfd2ac570bc5817b291e3ce69",
"assets/assets/assets/images/landing_page.jpg": "793340b386459b26fcdca97777dab18d",
"assets/assets/assets/images/deshraj_sir.png": "1d713a72fc2dc881c000490b81b9197c",
"assets/assets/assets/images/login.png": "70d4c169754258233072fb3bb399a03a",
"assets/assets/assets/images/swati.jpeg": "73fdc4d93d130819d52f81aad0e3859f",
"assets/assets/assets/images/signup.gif": "107e4aa94514fe91aebebb2814445346",
"assets/assets/assets/images/happy_black.png": "d03c459fb8e2574fb30dc5fb2e4d2cac",
"assets/assets/assets/images/sad_black.png": "177bcd9c0693aaf9cb2a8a2fa97ed5b8",
"assets/assets/assets/images/register.png": "9be6775185b2178e08206cd9335a73c7",
"assets/assets/assets/images/login_page2.png": "c9cc7c3cdd0212d42460152796fa3e45",
"assets/assets/assets/images/waterdrink.jpg": "d08fe3ac3749b9a21319acbb0bf5ee3d",
"assets/assets/assets/images/login_page1.png": "e136187ed9ce71db3f7c10aab71b43c8",
"assets/assets/assets/images/chlorine.jpg": "0335af71782743b6069453400e044dd3",
"assets/assets/assets/images/login_page.png": "dea61ec570ef1c88a351cee1d5626638",
"assets/assets/assets/images/drink.jpg": "12f29f32c36682c4818dca36e5b2b546",
"assets/assets/assets/images/chlorine_bg.png": "4173d956fe44abb8b3ba6f39b7e4a6c4",
"assets/assets/assets/images/signup1.gif": "4afa575686f7bfa8c78e704c34f803d3",
"assets/assets/assets/images/landing.png": "49dbff3ee5affc8e2dc3d658afaaa8b2",
"assets/assets/assets/images/home_page.jpg": "bcbd668685c438a9a99fca8af269bbed",
"assets/assets/assets/images/login.gif": "0d2e2f66d05338af22ae31f0e27fc048",
"assets/assets/assets/images/signup.png": "2fc566be23b42f8ef4659b826ba9b0bb",
"assets/assets/assets/images/about_bg.png": "7d7955150610b5771f9855a1acd3d21e",
"assets/assets/assets/images/sad_white.png": "d4dc47de6dc2a13267a66db0e9449cf2",
"assets/assets/assets/images/happy_white.png": "b9cb9df91bd26ba9a850b448217e6378",
"assets/assets/assets/images/new.png": "15ca559dfc5d644e7c2ef93614fe901d",
"assets/assets/assets/images/signup_bg.png": "58391aa1244cb0256bdbf31410d432fd",
"assets/assets/assets/images/drink2.png": "e37d12e5060f3ba94b0c0d011b56c100",
"assets/assets/assets/images/background.gif": "10d14b90d20c819a1fa04325c2f373a2",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
