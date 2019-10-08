import { ENABLED, VERSION, PREPEND, INDEX, PATHS } from './config';

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// DISABLED WORKER
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

if (ENABLED == false) {

	self.addEventListener('install', () => {
		self.skipWaiting();
	});

	self.addEventListener('activate', () => {
		self.clients.matchAll().then(clients => {
			clients.forEach(client => {
				client.navigate(client.url);
			});
		});
	});

}

// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------
// ENABLED WORKER
// --------------------------------------------------
// --------------------------------------------------
// --------------------------------------------------

if (ENABLED == true) {

	// --------------------------------------------------
	// Prepend assets
	// --------------------------------------------------

	const ASSETS = PATHS.map(file => {
		return new URL(file, (PREPEND || self.location)).toString();
	});

	// --------------------------------------------------
	// Reload worker
	// --------------------------------------------------

	self.addEventListener('message', e => {
		if (e.data === 'skipWaiting') {
			self.skipWaiting();
			self.clients.claim();
		}
	});

	// --------------------------------------------------
	// Install worker
	// --------------------------------------------------

	self.addEventListener('install', e => {
		e.waitUntil(
			caches.open(`ember-xenon-${VERSION}`).then(cache => {
				return cache.add(INDEX);
			})
		);
	});

	self.addEventListener('install', e => {
		e.waitUntil(
			caches.open(`ember-xenon-${VERSION}`).then(cache => {
				return cache.addAll(ASSETS);
			})
		);
	});

	// --------------------------------------------------
	// Activate worker
	// --------------------------------------------------

	self.addEventListener('activate', e => {
		caches.keys().then(names => {
			names.forEach(name => {
				if (name.indexOf('ember-xenon') === 0) {
					if (name.indexOf(VERSION) === -1) {
						caches.delete(name);
					}
				}
			});
		});
	});

	// --------------------------------------------------
	// Fetch html cache
	// --------------------------------------------------

	self.addEventListener('fetch', e => {

		let req = e.request;

		let url = new URL(req.url);

		// This is not a GET request
		if (req.method !== 'GET') return;

		// The file is an asset file
		if (ASSETS.indexOf(req.url) !== -1) return;

		// This is not on the same origin
		if (url.origin !== location.origin) return;

		// The request is not an HTML request
		if (req.headers.get('accept').indexOf('text/html') === -1) return;

		// Respond with the html file from the cache
		e.respondWith(
			caches.open(`ember-xenon-${VERSION}`).then(cache => {
				return cache.match(INDEX).then(res => res).catch(err => {
					return fetch(req).then(res => res);
				});
			})
		);

	});

	// --------------------------------------------------
	// Fetch file cache
	// --------------------------------------------------

	self.addEventListener('fetch', e => {

		let req = e.request;

		// This is not a GET request
		if (req.method !== 'GET') return;

		// The file is not specified in the cache
		if (ASSETS.indexOf(req.url) === -1) return;

		// Respond with the asset file from the cache
		e.respondWith(
			caches.open(`ember-xenon-${VERSION}`).then(cache => {
				return cache.match(req).then(res => {
					return res || fetch(req).then(res => {
						cache.put(req, res.clone());
						return res;
					});
				});
			})
		);

	});

}
