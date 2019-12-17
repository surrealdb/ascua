import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

function enabled() {
	try {
		if (typeof FastBoot !== 'undefined') throw "exception";
		if (!window) throw "exception";
		if (!window.navigator) throw "exception";
		if (!window.navigator.serviceWorker) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}

export default class extends Service.extend(Evented) {

	// Whether an update is available
	// for the service worker, so that
	// we can display a notification.

	@tracked updatefound = false;

	// Setup the Worker service if the
	// feature is supported, and check
	// continuously for updates.

	constructor() {

		super(...arguments);

		if (enabled() === false) return;

		this.config = getOwner(this).lookup('ascua:worker');

		if (this.config.enabled === true) {
			if (this.config.frequency) {
				this.timer = setInterval(
					this.check.bind(this),
					this.config.frequency,
				);
			}
		}

		this.on('updatefound', () => {
			switch (this.config.autoupdate) {
			case false:
				return this.updatefound = true;
			case true:
				return this.reset();
			}
		});

		this.setup();

	}

	// If this service is going to be
	// destroyed, then let's ensure that
	// the checker timer is cancelled.

	willDelete() {

		if (this.timer) clearInterval(this.timer);

		super.willDelete(...arguments);

	}

	// Setup sets up the service worker
	// and checks for any version changes
	// if the service worker is updated

	setup() {

		if (this.config.enabled === false) {

			let sw = window.navigator.serviceWorker;

			// Deregister all of the service worker
			// registrations at the root of the
			// domain, and then exit.

			sw.getRegistrations().then(regs => {
				for (let reg of regs) {
					reg.unregister();
				}
			});

		}

		if (this.config.enabled === true) {

			let sw = window.navigator.serviceWorker;

			// If a new service worker is activated
			// with skipWaiting, and claims this page
			// then we need to reload the window.

			sw.addEventListener('controllerchange', () => {
				if (this.active) window.location.reload();
			});

			// Register the service worker file at
			// the root of the domain, and wait for
			// the registration to be successful.

			sw.register('/sw.js').then(reg => {

				this.worker = reg;

				// If a service worker is waiting to
				// be activated on page load, then
				// immediately activate it and reload.

				if (reg.waiting) {
					this.trigger('updatefound');
				}

				// If an updated service worker is
				// found, then wait for it to install
				// and trigger an 'updatefound' event.

				reg.addEventListener('updatefound', (e) => {
					e.target.installing.addEventListener('statechange', (e) => {
						if (e.target.state === 'installed') {

							this.active = this.worker.active;

							if (this.active) {
								return this.trigger('updatefound');
							} else {
								return this.worker.waiting.postMessage('skipWaiting');
							}

						}
					});
				});

			});

		}

	}

	// Reset reloads the page, notifying
	// the new installed service worker
	// to skip waiting and activate.

	@action reset() {

		if (this.worker && this.worker.waiting) {
			this.worker.waiting.postMessage('skipWaiting');
		}

	}

	// Check determines if an update to
	// the application is available by
	// checking the service worker.

	@action check() {

		if (this.worker) {
			this.worker.update();
		}

	}

}
