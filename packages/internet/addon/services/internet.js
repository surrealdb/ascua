import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

function enabled() {
	try {
		if (typeof FastBoot !== 'undefined') throw "exception";
		if (!window) throw "exception";
		if (!window.addEventListener) throw "exception";
		return true;
	} catch (e) {
		return false;
	}
}

export default class extends Service {

	@tracked status = 'online';

	get online() {
		return this.status === 'online';
	}

	get offline() {
		return this.status === 'offline';
	}

	constructor() {

		super(...arguments);

		if (enabled() === false) return;

		window.addEventListener('online', () => {
			this.status = 'online';
		}, false);

		window.addEventListener('offline', () => {
			this.status = 'offline';
		}, false);

	}

}
