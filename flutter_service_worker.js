'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "f926fc80743b9f510265ebb554f619c7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6cd7707b2d9c569d81a1bec46f028f76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "420eaade9aff52d80958a2ea971b6520",
".git/logs/refs/heads/main": "b94ac270737c5489fecaeeea40defbad",
".git/logs/refs/remotes/origin/main": "c69dc7d0e2c16c353ff8dec4e4cc1b37",
".git/objects/00/e9fee0e1325ded266a2a135840038c44404f84": "ab47e314915ebff6c6fa5fcad5d4339d",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "b3781133604d26e4cdb145dcc68d0ac2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "2d24e3b2aca96b7451c14212b5b9d144",
".git/objects/2a/4bc625883556ecfabcf3db52f52ac7a09b3fb4": "567606cf68d23864154ad13751958bba",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "27ccec63cb61a6d305d64f14d2274433",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "733ddcf1f8467729f0dab00912add93d",
".git/objects/31/fb214dd7e81f1f47fc4c4b0db1320d17dc55dc": "dae8f8c3a1565ee42c15486fb83d0dfe",
".git/objects/38/3c715dd27199e23ec49118449273c3c1292942": "5da805e86b4166b46a86cd0631414e85",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "dddca3f1373f3dc9a3da1c1e3b0991bc",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "b30319238dd94c52293935e05a5d5325",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4e/08182b4ef2c8d59203c67a3420086e2cbb52fa": "cdcbccb74f983e90a2ffb796e5f7f12e",
".git/objects/50/9e28bac0432692fc75b3175d6111e3e894bceb": "2796c4db7b6f1f23235e4e04a8488cc9",
".git/objects/54/69c677e3e39351bcde334ae10ced348f32ab17": "5bcdf195896a709cd93a25e6044c533b",
".git/objects/5f/3fe8aa5ae02ec3d3527eaa61398a252036a1f9": "3ceca8278ad9135c51d4e5efba2bdd40",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "de49b11d810cad932ea6b390d89c7232",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "449ba916d8cf5a147c30fda522daee5f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "5a97e1409617516f21f4a27552287f75",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "7def488d5a8181e9ef810563a24a28f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/8d/060524701ab20541d3806619ea88bd0d1ffc1e": "f29c3e01f8647d3746d55b89fb09fb7d",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "6b6eb8c09fb911d71443bbea51e3196e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "d3184f8d69b8aa198a5a7a210764ede9",
".git/objects/a6/9b5bbe7c3ac05e6cd67bfa0f95d6a4e98e990c": "f3628354dbe77dd8c62597d63e9736c4",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "8743e406ba04f7d2151b690cfec2c95f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/bf/529549ce9e21f48206a7d49a35e127b677e8fb": "66ba762068a333676a0c68d26a7ad271",
".git/objects/cb/fdd2d5327dd0e7bdefc26946914c644c543b4c": "b6a10dcc77dd644ac131c40b70d01f36",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "f7a47fae7dcec9d444a58ad4813b3fc0",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "35a0a9cd1e8a47b15c7c24b47370679e",
".git/objects/d0/d68a2acb0dc16f7e90d543509bc4572d764ade": "03984bdb7b8c4a58bf75a1a133058dc4",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "47d7ecb7bfe70ca10675080fd96474ed",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d9/7fb6093f015c171a8fb64e08467100b578fb29": "6c2b6223b7fd00f37ded0e384791f310",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "6d6f532e28da652c0cef326ce98de4a1",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "c3ca0ff3ede231955797b1571e9fae0f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "b1bfda8eb29e326a32fc89e9c85ae8dd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "25e06ebaa65451a5081c1b315e068bd7",
".git/refs/remotes/origin/main": "25e06ebaa65451a5081c1b315e068bd7",
"assets/AssetManifest.json": "6d6efe837aaa4b8329b52d6a55169377",
"assets/assets/images/3.jfif": "5ca9ec6a5e6df4cbc302f5c5802395fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "d6f14ed74545a5cdfaf0e1bd799ddcfd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "729279c5c9904492d42a1ced78b98f17",
"/": "729279c5c9904492d42a1ced78b98f17",
"main.dart.js": "5ba674c10df58e6898473d68e04058a0",
"manifest.json": "830255d242dd0e7a7cb8690164fa1cea",
"version.json": "7c9705b9a14c7d79e8864a221c03e341"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
