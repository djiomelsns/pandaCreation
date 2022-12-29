'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e10370087d6aaab6638b6b769178cd4b",
"assets/FontManifest.json": "3924b0c52039c10d50316896fe5737b2",
"assets/fonts/Courgette/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/fonts/Kalam/Kalam-Light.ttf": "4c79496352e7ef6dc4956f60ce095408",
"assets/fonts/Kalam/Kalam-Regular.ttf": "b3d0cb8286497ecfe76846476495927c",
"assets/fonts/Lobster_Two/LobsterTwo-Italic.ttf": "aeb48750ac6d1dfaec2dfe21d580b523",
"assets/fonts/Lobster_Two/LobsterTwo-Regular.ttf": "6d3f44fa5b7f6ce27aea91f8ea715069",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/blog/busi1.jpg": "c6c8188a014dc65c47cae1960ca32015",
"assets/images/blog/busi2.jpg": "071723a92ee1325f0d521b799f5d01f6",
"assets/images/busi.jpg": "fe0dee44e3e864fa040030f718d3cbc8",
"assets/images/carte/Cartes1.jpg": "106bd94e92bc1cddef62d05cb64f2b31",
"assets/images/carte/Cartes2.jpg": "c5c4f4521c32cd0d092fee8f2e7dbbe6",
"assets/images/carte/Cartes3.jfif": "81dae861ea33a5a887f293ca201a371b",
"assets/images/carte/Cartes4.jfif": "e3ece6c934f3240e41dc08a8d360b8a3",
"assets/images/carte/Cartes5.png": "bfaf8f1df9d80dbdd700fb6b804eaca0",
"assets/images/carte/Cartes6.jfif": "95a56a175ecb1494c185328c88f8df26",
"assets/images/depliant/D%25C3%25A9pliants1.jpg": "eddc67954c8af8df14294fc6b665dafa",
"assets/images/depliant/D%25C3%25A9pliants2.jpg": "0f04b3fd145dafe43fb60b9ba04ec3d1",
"assets/images/depliant/D%25C3%25A9pliants3.jfif": "3c643709f0823618661dccb4582646b5",
"assets/images/depliant/D%25C3%25A9pliants4.webp": "37f380912a65374d3a7dcbd81dfbd6f5",
"assets/images/enseignes/Enseignes1.jpg": "55d87bd107489d3488543121041084e9",
"assets/images/enseignes/Enseignes2.jfif": "003a5ec927f3d0de1f51e3b395fc6298",
"assets/images/enseignes/Enseignes3.jpg": "ca0b351735269c2be0e6621c846e565c",
"assets/images/enseignes/Enseignes4.jpg": "bc60aded8a8b09f43db12e0e60dbc331",
"assets/images/enseignes/Enseignes5.webp": "0fefddfeef3af5d944fbe174115c740d",
"assets/images/enseignes/Enseignes6.jpg": "3bcd452042e62b25bf9294c2f24c3d60",
"assets/images/flyers/Flyers1.jfif": "4a2bca6b75b273b96a0a0059237283da",
"assets/images/flyers/Flyers2.jpg": "8d28aa4f0aa181d1354c4edfe0b9f015",
"assets/images/flyers/Flyers3.jfif": "9417607d5d01ed7faa878ec590082e7a",
"assets/images/flyers/Flyers4.webp": "8cac2712e0a21438cfce4b7422c5614a",
"assets/images/flyers/Flyers5.jfif": "6e07b365c982f0fbc80e408a3f75ef31",
"assets/images/flyers/Flyers6.png": "504b5ed13d4aacb8744ecb0cf6cf73cd",
"assets/images/icons/add-friend.png": "bcd93fdff775b5bc7018d3f6c31cf975",
"assets/images/icons/algorithm.png": "b38fd390a511e601457c43a518f0db9d",
"assets/images/icons/blogger.png": "6609de6ce881a17e83171b1e50e96166",
"assets/images/icons/investissement.png": "c7886a8ccdfd2acc69c9c138c6e309cc",
"assets/images/icons/layout.png": "d76fdfa3ef39b6773dc2d3062b09a509",
"assets/images/icons/presentation.png": "b358a1c3dc1007b6619b499ef2447958",
"assets/images/icons/redaction.png": "e6f4b49afca63f72356110b1837d7c17",
"assets/images/icons/sabonner.png": "28d9dc324cb95edbffaf69f38c9e386a",
"assets/images/icon_agence/agile.png": "39c23a20ac13fc26d40f2a26cd5f718d",
"assets/images/icon_agence/group.png": "a94661333f2aa342d95340153b0cf869",
"assets/images/icon_agence/map.png": "029a47d856a187dde88d1a91ea574076",
"assets/images/icon_agence/rotation.png": "150378e5e2e2300c5d349266d39d5247",
"assets/images/icon_agence/social-media.png": "26bc65225c979efd353c8ea97b0cbbfd",
"assets/images/icon_agence/user-experience.png": "c157f852e9cc90658049464c94fc6737",
"assets/images/img/carte.jpg": "14df9568fa39c87d345f67417f3470dd",
"assets/images/img/D%25C3%25A9pliants.jpg": "bf3e6a3c87a4b964f09e799bedd7e3d3",
"assets/images/img/drapeau.jpg": "e9963270503477a9befd52dd91a2bcc4",
"assets/images/img/ecran.png": "60ee79f25f541b6aa2981de1079fb850",
"assets/images/img/enseigne.jpg": "7205448797ef0e91f9b0ddabcd2bb400",
"assets/images/img/flyers.jpg": "0bf4f5d6ea403a04a114a66a64d00b9a",
"assets/images/img/Goodies.jpeg": "bcbef20ac12be250da7049c2623317bb",
"assets/images/img/habi.png": "9c8ed31a03914d37b7e905a4b45fcf24",
"assets/images/img/habii.jpg": "050145a71ecac9ea6db0cfc57303ac2c",
"assets/images/img/logo.jpg": "e01fb0a0331b051f14c6d2f906816164",
"assets/images/logo/logo1.jfif": "b03b2bb14a056c968fa938889f6756a8",
"assets/images/logo/logo2.png": "5d187923c2f94bf506bc9444ddf02516",
"assets/images/logo/logo3.png": "9f8171ed9b44658f47cf81780caa31a1",
"assets/images/logo/logo4.jpg": "6e861632b5a5c598cff5b92cde242fc3",
"assets/images/logo/logo5.jpg": "37cca970d4b9906fcdc05777716ff404",
"assets/images/logo/logo6.jfif": "cfb900e4e6fdb902285ac506fedc9193",
"assets/images/logo/logo7.jpg": "a4dfb33e746eeeba2a951d5d02e7b776",
"assets/images/logo.png": "c5626f2865e08add10379e24a8277332",
"assets/images/nameEcran.png": "02962c844858a9a5cd5b2c07197973b9",
"assets/images/nameEnseigne.jpg": "50ab5dc504e917a70d189f6fda832eaf",
"assets/images/nameLogo.png": "1187147e121cdb4214b3b1cd5db5a75a",
"assets/images/panda.png": "b12dd5fe3b796112cf27d050c613b594",
"assets/images/panda1.png": "cd63124bd0ba766c7c5305dbf8c8508a",
"assets/images/suivre/email.png": "d531be7f753e52ba4f000b09f7c9b01c",
"assets/images/suivre/instagram.png": "4f7cb5fbb28d0f9ddc97641f8b288735",
"assets/images/suivre/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/images/suivre/phone-call.png": "9e299bb392428812cffbdadaf9272b15",
"assets/images/vehecules/v%25C3%25A9hicules1.jpeg": "1dd84bd9e596345537b32229070a852d",
"assets/images/vehecules/v%25C3%25A9hicules2.png": "2b457bd54bec5fdc635297d7f5024b74",
"assets/images/vehecules/v%25C3%25A9hicules3.png": "f4703af614c83d5be3d94c7d5e4d4b33",
"assets/images/vehecules/v%25C3%25A9hicules4.jfif": "d460b24d297f2b9885c87fbc2584fa45",
"assets/images/vehecules/v%25C3%25A9hicules5.jfif": "67a12ea45fb2d4ec86f52981810d100e",
"assets/images/vehecules/v%25C3%25A9hicules6.jpg": "3a37c2147626a7d0cd8f1a3168cb938e",
"assets/images/vitrines/vitrines1.jfif": "b49570c0252e221f9b54627e9af1b392",
"assets/images/vitrines/vitrines2.jfif": "aa902a1c739adede08d180b776e822a0",
"assets/images/vitrines/vitrines3.jpg": "571b79c5b08d6e92661520f8680f7f52",
"assets/images/vitrines/vitrines4.jfif": "1d84fa07afe8d8ebb6ed4e4aab795f12",
"assets/images/vitrines/vitrines5.jfif": "15d963316614e32418d5d6435d17ce82",
"assets/images/vitrines/vitrines6.jpg": "017caedfb11f9284734f7ad922e1bcc0",
"assets/NOTICES": "978260e8620fca19be33b7966f8d4e99",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
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
"index.html": "a5fc67cc689615e1242e6059a9ef950b",
"/": "a5fc67cc689615e1242e6059a9ef950b",
"main.dart.js": "58c96ea5a6b8ff049f33e47bd47e879e",
"manifest.json": "e09d2c39513c749193c005ee5cdb7107",
"version.json": "25f1af02f3d1c33218147c07436b8f1d"
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
