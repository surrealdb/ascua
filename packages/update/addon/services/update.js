import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { getOwner } from '@ember/application';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

function enabled() {
	try {
		if (typeof FastBoot !== 'undefined') throw "exception";
		if (!window) throw "exception";
		if (!window.location) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}

export default class extends Service.extend(Evented) {

	// Whether an update is available
	// for the ember app, so that we
	// can display a notification.

	@tracked updatefound = false;

	// Setup the Version service if the
	// feature is supported, and check
	// continuously for updates.

	constructor() {

		super(...arguments);

		if (enabled() === false) return;

		this.config = getOwner(this).lookup('ascua:update');

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

		this.check();

	}

	// If this service is going to be
	// destroyed, then let's ensure that
	// the checker timer is cancelled.

	willDelete() {

		if (this.timer) clearInterval(this.timer);

		super.willDelete(...arguments);

	}

	// Reset reloads the newer software
	// version by reloading the page
	// which will load the new version.

	@action reset() {

		window.location.reload();

	}

	// Check determines if an update to
	// the application is available by
	// checking the server version.

	@action check() {

		if (this.config.enabled === true) {

			let url = `/version.txt?_=${new Date().getTime()}`;

			let xhr = new XMLHttpRequest();
			xhr.open('GET', url);
			xhr.onload = () => {
				if (this.version === undefined) {
					this.version = xhr.responseText;
				} else if (this.version != xhr.responseText) {
					this.trigger('updatefound');
				}
			};
			xhr.send();

		}

	}

}
