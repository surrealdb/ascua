import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { equal } from '@ember/object/computed';

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

	@equal('status', 'online') online;

	@equal('status', 'offline') offline;

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
